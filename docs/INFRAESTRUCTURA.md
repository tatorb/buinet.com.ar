# Infraestructura del sitio — Building Networks (buinet.com.ar)

Documento de decisión técnica de la migración desde WordPress a un sitio propio.

## Contexto

El sitio corría sobre **WordPress** y su backend fue **comprometido** (hackeado),
por lo que no se puede seguir usando. La **base de datos del blog se salvó** (está
en otro server). El objetivo es **replicar el sitio, salir de WordPress y quedar
sin dependencia de proveedores externos**, con algo **flexible, seguro y manejable
por el propio equipo**.

## Decisión: sitio estático con Astro

| Aspecto | Elección | Motivo |
|---|---|---|
| Motor | **Astro** (genera HTML estático) | Sin PHP, sin backend, sin panel administrable → **nada que hackear**. |
| Contenido / blog | **Markdown en el repo Git** | El blog se importa **una sola vez** desde la DB salvada. Después vive versionado en Git. |
| Base de datos | **No hay DB en producción** | La DB sólo es el *origen* de la importación. El sitio final no la necesita. |
| Estilos/marca | Tokens CSS en `src/styles/global.css` | Cambiar colores/tipografías = un solo archivo. |
| Hosting | **Server propio (Linux + nginx)** | El output es estático y **portable**: corre en cualquier lado, sin lock-in. |
| Publicación | Editar Markdown → `git commit` → build → subir `dist/` | El equipo lo maneja sin depender de un programador. |

### Por qué NO seguir en WordPress
- Fue el vector del ataque: PHP + plugins + panel + DB = mucha superficie.
- Requiere actualizaciones y mantenimiento de seguridad constantes.
- Ata a un hosting con PHP/MySQL.

### Por qué estático
- **Seguridad:** archivos planos, no hay login ni ejecución de código en el server.
- **Cero dependencia:** el sitio compilado (`dist/`) se sube a cualquier server.
- **Velocidad y costo:** sirve archivos, sin base de datos ni procesamiento.
- **Control total:** todo el contenido y el diseño están en este repositorio Git.

## Estructura del proyecto

```
src/
  pages/            Rutas del sitio (cada .astro = una página). Replican las URLs de WordPress.
  content/blog/     Posts del blog en Markdown (generados por el importador).
  layouts/          Plantillas (BaseLayout, PageLayout).
  components/        Header, Footer.
  styles/global.css  Tokens de marca (colores, tipografías) y estilos base.
  site.config.ts     Menú de navegación y datos de contacto.
scripts/
  import-wordpress.mjs  Importa el blog desde el export de WordPress.
deploy/
  nginx.conf.example    Config de servidor de ejemplo.
public/             Archivos estáticos (favicon, imágenes, logo).
```

## Flujo de trabajo

- **Desarrollo:** `npm install` y luego `npm run dev` (previsualización local).
- **Compilar:** `npm run build` → genera `dist/` (el sitio estático listo para subir).
- **Publicar:** subir el contenido de `dist/` al server (rsync/FTP) o automatizar (ver deploy).

## Migración del blog

1. Conseguir el **export de WordPress (WXR)**: `Herramientas > Exportar > Entradas`.
   - Si sólo se tiene el **dump SQL**: importarlo en un WordPress local **una vez**
     y exportar el WXR desde ahí (así se evita parsear SQL a mano).
2. Guardar el XML en `_migracion/wordpress-export.xml` (carpeta ignorada por Git).
3. `npm install` y `npm run import:wp` → genera los `.md` en `src/content/blog/`.
4. Revisar los posts (imágenes, shortcodes) y borrar `ejemplo-migracion.md`.

## Formulario de contacto (único punto dinámico)

Un sitio estático no procesa formularios por sí solo. Opciones, en orden de
preferencia según "cero dependencia":

1. **Handler propio en el server** (recomendado): un pequeño script en el mismo
   server (PHP `mail()` o un micro-endpoint Node) al que apunta el `action` del
   formulario. Cero terceros.
2. **`mailto:`**: el formulario abre el cliente de correo del visitante. Simple,
   sin server, pero peor experiencia.
3. Servicio externo de formularios: descartado por la política de no depender de
   proveedores.

Se define al elegir el server. El formulario ya está listo en `/contacto/` apuntando
a `/api/contacto` (placeholder) e incluye honeypot anti-spam.

## Pendientes para completar el clon (a proveer por el cliente)

- [ ] **Dump de la base de datos** o export WXR del blog salvado.
- [ ] **Logo** (SVG/PNG) y **paleta de colores** / tipografías reales de la marca.
- [ ] **Textos e imágenes** de las páginas (Sobre Nosotros, servicios, etc.) o un
      export/HTML del sitio actual (el entorno no puede acceder al sitio vivo).
- [ ] **Datos del server** de destino (SSH/dominio) para configurar el deploy.
