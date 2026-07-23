#!/usr/bin/env node
/**
 * Importador WordPress -> Markdown
 * =============================================================================
 * Convierte un export de WordPress (WXR / archivo XML de "Herramientas > Exportar")
 * en archivos Markdown dentro de src/content/blog/, listos para Astro.
 *
 * USO:
 *   1) Conseguir el export XML del blog (WXR). Dos caminos:
 *        a) Desde un WordPress funcionando: Herramientas > Exportar > "Entradas".
 *        b) Si sólo tenés el dump SQL: importalo en un WordPress local UNA vez
 *           y exportá el WXR. (Ver docs/INFRAESTRUCTURA.md)
 *   2) Guardar el archivo en:  _migracion/wordpress-export.xml
 *   3) Instalar dependencias del importador (una sola vez):  npm install
 *   4) Correr:  npm run import:wp
 *
 * Qué hace:
 *   - Toma sólo los <item> de tipo "post" con estado "publish".
 *   - Convierte el HTML del contenido a Markdown (turndown).
 *   - Genera front-matter (title, description, pubDate, author, category, tags).
 *   - Escribe un .md por post usando el slug original (mantiene las URLs /blog/<slug>/).
 *
 * NOTA: es un script de migración de una sola vez. Revisá los .md generados
 * (imágenes, shortcodes de WordPress, etc.) antes de publicar.
 * =============================================================================
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const INPUT = process.env.WP_EXPORT || join(ROOT, '_migracion', 'wordpress-export.xml');
const OUT_DIR = join(ROOT, 'src', 'content', 'blog');

// --- Carga perezosa de dependencias con mensaje claro si faltan --------------
let XMLParser, TurndownService;
try {
  ({ XMLParser } = await import('fast-xml-parser'));
  TurndownService = (await import('turndown')).default;
} catch {
  console.error(
    '\n[import:wp] Faltan dependencias del importador.\n' +
      'Instalá con:  npm install\n' +
      '(usa fast-xml-parser y turndown, sólo para esta migración).\n',
  );
  process.exit(1);
}

if (!existsSync(INPUT)) {
  console.error(
    `\n[import:wp] No encontré el export en:\n  ${INPUT}\n\n` +
      'Poné el XML (WXR) de WordPress ahí, o indicá la ruta con:\n' +
      '  WP_EXPORT=/ruta/al/export.xml npm run import:wp\n',
  );
  process.exit(1);
}

// --- Helpers -----------------------------------------------------------------
const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });

/** Escapa comillas para el front-matter YAML. */
const yamlStr = (s = '') => `"${String(s).replace(/"/g, '\\"').replace(/\n/g, ' ').trim()}"`;

/** Fecha YYYY-MM-DD a partir de la fecha de WordPress. */
function toDate(raw) {
  const d = raw ? new Date(raw) : null;
  if (!d || Number.isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}

/** Normaliza a array (fast-xml-parser colapsa listas de 1 elemento). */
const arr = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);

/** Extrae texto de description a partir del contenido (primeros ~160 chars). */
function excerpt(md, explicit) {
  if (explicit) return explicit;
  const text = md.replace(/[#>*_`\-!\[\]()]/g, '').replace(/\s+/g, ' ').trim();
  return text.slice(0, 160);
}

// --- Parseo del WXR ----------------------------------------------------------
const xml = readFileSync(INPUT, 'utf8');
const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  cdataPropName: '__cdata',
  // Los tags de WordPress usan prefijos (wp:, dc:, content:). Los conservamos.
  removeNSPrefix: false,
});

const doc = parser.parse(xml);
const channel = doc?.rss?.channel;
if (!channel) {
  console.error('[import:wp] El archivo no parece un export WXR de WordPress (no encontré rss > channel).');
  process.exit(1);
}

const items = arr(channel.item);
const unwrap = (v) => (v && typeof v === 'object' && '__cdata' in v ? v.__cdata : v);

mkdirSync(OUT_DIR, { recursive: true });

let escritos = 0;
let saltados = 0;

for (const item of items) {
  const type = unwrap(item['wp:post_type']);
  const status = unwrap(item['wp:status']);

  // Sólo posts publicados (ajustá si querés también páginas: type === 'page').
  if (type !== 'post' || status !== 'publish') {
    saltados++;
    continue;
  }

  const title = unwrap(item.title) || 'sin-titulo';
  const slug = (unwrap(item['wp:post_name']) || title)
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const html = unwrap(item['content:encoded']) || '';
  const md = turndown.turndown(String(html));

  const pubDate = toDate(unwrap(item['wp:post_date']) || unwrap(item.pubDate));
  const author = unwrap(item['dc:creator']) || 'Building Networks';

  // Categorías y tags vienen como <category domain="category|post_tag">
  const cats = arr(item.category);
  const categoria = cats.find((c) => c?.['@_domain'] === 'category');
  const tags = cats
    .filter((c) => c?.['@_domain'] === 'post_tag')
    .map((c) => unwrap(c['#text'] || c.__cdata || c))
    .filter(Boolean);

  const description = excerpt(md, unwrap(item['excerpt:encoded']));

  const frontmatter = [
    '---',
    `title: ${yamlStr(title)}`,
    `description: ${yamlStr(description)}`,
    `pubDate: ${pubDate || '1970-01-01'}`,
    `author: ${yamlStr(author)}`,
    categoria ? `category: ${yamlStr(unwrap(categoria['#text'] || categoria.__cdata || categoria))}` : null,
    tags.length ? `tags: [${tags.map(yamlStr).join(', ')}]` : 'tags: []',
    'draft: false',
    '---',
    '',
  ]
    .filter(Boolean)
    .join('\n');

  const outPath = join(OUT_DIR, `${slug || 'post-' + escritos}.md`);
  writeFileSync(outPath, frontmatter + md + '\n', 'utf8');
  escritos++;
  console.log(`  ✓ ${slug}.md`);
}

console.log(
  `\n[import:wp] Listo. ${escritos} post(s) escritos en src/content/blog/. ` +
    `${saltados} item(s) ignorados (no eran posts publicados).\n` +
    'Revisá los .md (imágenes, shortcodes) y borrá el ejemplo ejemplo-migracion.md.\n',
);
