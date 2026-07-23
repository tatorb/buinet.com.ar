// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL final del sitio en producción. Cambiar cuando definamos el dominio/hosting.
const SITE = 'https://buinet.com.ar';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Salida 100% estática: HTML/CSS/JS plano. Sin servidor Node, sin PHP, sin DB.
  // Se puede subir a cualquier server (nginx/Apache) o CDN.
  output: 'static',
  trailingSlash: 'always', // Mantiene las URLs con "/" final como en WordPress (/blog/mi-post/)
  integrations: [sitemap()],
  build: {
    // Genera /pagina/index.html en vez de /pagina.html => URLs limpias y compatibles con WordPress.
    format: 'directory',
  },
});
