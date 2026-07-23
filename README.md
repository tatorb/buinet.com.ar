# buinet.com.ar — Building Networks

Sitio web de **Building Networks**, reconstruido como **sitio estático con [Astro](https://astro.build)**
para reemplazar la instalación de WordPress (comprometida) y quedar **sin dependencia
de proveedores externos**: seguro, rápido y portable.

> Decisión de infraestructura y detalles: **[`docs/INFRAESTRUCTURA.md`](docs/INFRAESTRUCTURA.md)**

## Requisitos

- Node.js 20+ y npm

## Comandos

```bash
npm install        # instala dependencias (una vez)
npm run dev        # servidor de desarrollo en http://localhost:4321
npm run build      # compila el sitio estático a dist/
npm run preview    # previsualiza el build de dist/
npm run import:wp  # importa el blog desde un export de WordPress (ver docs)
```

## Publicar

`npm run build` genera la carpeta **`dist/`** con el sitio estático. Subí ese
contenido al server (nginx). Config de ejemplo en
[`deploy/nginx.conf.example`](deploy/nginx.conf.example).

## Cómo editar el contenido

- **Páginas:** archivos en `src/pages/` (por ejemplo `sobre-nosotros.astro`).
- **Blog:** archivos Markdown en `src/content/blog/`. Para publicar un post nuevo,
  agregá un `.md` con su front-matter y hacé build.
- **Menú y datos de contacto:** `src/site.config.ts`.
- **Colores / tipografías (marca):** `src/styles/global.css` (sección de tokens).

## Estado actual

Andamiaje técnico completo y funcional con contenido **placeholder**. Pendiente de
insumos del cliente para completar el clon fiel (ver la lista al final de
`docs/INFRAESTRUCTURA.md`): dump del blog, logo, paleta y textos/imágenes reales.
