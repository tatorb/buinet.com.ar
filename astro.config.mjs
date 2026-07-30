// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL y base del sitio. En producción (dominio propio) quedan en la raíz.
// Para el preview de GitHub Pages, el workflow define SITE_URL y PAGES_BASE
// (subdirectorio /buinet.coml.ar/) por variables de entorno.
const SITE = process.env.SITE_URL || 'https://buinet.com.ar';
const BASE = process.env.PAGES_BASE || '/';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  // Salida 100% estática: HTML/CSS/JS plano. Sin servidor Node, sin PHP, sin DB.
  // Se puede subir a cualquier server (nginx/Apache) o CDN.
  output: 'static',
  trailingSlash: 'always', // Mantiene las URLs con "/" final como en WordPress (/blog/mi-post/)
  // 301 heredados del SEO original. La versión "la-base" consolida en la canónica "esencial-hoy-en-dia".
  redirects: {
    '/que-es-una-red-convergente-y-por-que-es-la-base/':
      '/que-es-una-red-convergente-y-por-que-es-esencial-hoy-en-dia/',
  },
  integrations: [
    sitemap({
      // La galería interna queda fuera del sitemap (no debe indexarse ni difundirse).
      filter: (page) => !page.includes('/galeria-interna-'),
    }),
  ],
  build: {
    // Genera /pagina/index.html en vez de /pagina.html => URLs limpias y compatibles con WordPress.
    format: 'directory',
  },
});
