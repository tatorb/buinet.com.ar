// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';
import { statSync, existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// URL y base del sitio. En producción (dominio propio) quedan en la raíz.
// Para el preview de GitHub Pages, el workflow define SITE_URL y PAGES_BASE
// (subdirectorio /buinet.coml.ar/) por variables de entorno.
const SITE = process.env.SITE_URL || 'https://buinet.com.ar';
const BASE = process.env.PAGES_BASE || '/';

const ROOT = fileURLToPath(new URL('.', import.meta.url));

// Fecha de última modificación "del archivo": el último commit de git que lo
// tocó (señal real de cuándo cambió el contenido). Si git no está disponible
// (o el checkout es shallow), cae a la mtime del archivo. Devuelve YYYY-MM-DD.
// NOTA: el workflow de deploy hace checkout con fetch-depth: 0 para que git
// tenga el historial completo y esta fecha sea precisa por archivo.
function fileDate(absPath) {
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${absPath}"`, {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim();
    if (iso) return iso.slice(0, 10);
  } catch {
    /* sin git: usamos mtime */
  }
  try {
    return statSync(absPath).mtime.toISOString().slice(0, 10);
  } catch {
    return undefined;
  }
}

// lastmod para una URL del sitemap:
//  - Notas del blog: `updatedDate` del frontmatter si existe; si no, `pubDate`
//    (la fecha propia de la nota). Recién si faltaran ambas, la fecha del archivo.
//  - Páginas .astro: fecha del archivo (último commit de git).
function lastmodForUrl(url) {
  const pathname = new URL(url).pathname.replace(/\/+$/, '') || '/';
  if (pathname === '/') return fileDate(join(ROOT, 'src/pages/index.astro'));

  const slug = pathname.replace(/^\//, '');
  const clean = (v) => v.trim().replace(/^['"]|['"]$/g, '').slice(0, 10);

  // ¿Es una nota del blog?
  for (const ext of ['.md', '.mdx']) {
    const md = join(ROOT, 'src/content/blog', slug + ext);
    if (existsSync(md)) {
      const fm = readFileSync(md, 'utf8').slice(0, 2000);
      const mu = fm.match(/^updatedDate:\s*(.+)$/m);
      if (mu) return clean(mu[1]);
      const mp = fm.match(/^pubDate:\s*(.+)$/m);
      if (mp) return clean(mp[1]);
      return fileDate(md);
    }
  }

  // ¿Es una página estática?
  for (const p of [join(ROOT, 'src/pages', slug + '.astro'), join(ROOT, 'src/pages', slug, 'index.astro')]) {
    if (existsSync(p)) return fileDate(p);
  }
  return undefined;
}

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  // Salida 100% estática: HTML/CSS/JS plano. Sin servidor Node, sin PHP, sin DB.
  // Se puede subir a cualquier server (nginx/Apache) o CDN.
  output: 'static',
  trailingSlash: 'always', // Mantiene las URLs con "/" final como en WordPress (/blog/mi-post/)
  // NO definir redirecciones acá. Todas viven en public/.htaccess, que es el
  // único lugar donde se configuran (ver el comentario de ese archivo).
  // Astro genera una página con meta refresh, que responde 200 y es una señal
  // más débil para Google que un 301 real del servidor.
  integrations: [
    sitemap({
      // Fuera del sitemap: la galería interna y las páginas de prototipo. No
      // deben indexarse ni difundirse. Las dos llevan además noindex en el
      // <head> y viven en URLs con un token difícil de adivinar.
      filter: (page) => !page.includes('/galeria-interna-') && !page.includes('/prototipo-'),
      // lastmod por URL (ver lastmodForUrl). Google lo usa para priorizar el recrawl.
      serialize(item) {
        const lm = lastmodForUrl(item.url);
        if (lm) item.lastmod = lm;
        return item;
      },
    }),
  ],
  build: {
    // Genera /pagina/index.html en vez de /pagina.html => URLs limpias y compatibles con WordPress.
    format: 'directory',
  },
});
