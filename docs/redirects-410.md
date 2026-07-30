# 410 Gone para URLs de spam del hackeo previo

El sitio anterior (WordPress) fue comprometido con *cloaking* que servía miles
de URLs falsas a Googlebot (patrones `/?shop/c/...`, `/?shop/goods/...`,
`/shop/...`, `/goods/...`). El sitio nuevo es estático y ya no las sirve, pero
necesitamos que devuelvan **410 Gone** (no 404, no 301, no 200) para que Google
las elimine del índice de forma permanente.

La configuración vive en **`public/.htaccess`** (se copia a la raíz del sitio en
cada build). Abajo están las variantes por stack.

## Apache (actual — `public/.htaccess`)

```apache
RewriteEngine On

# Query string que arranca con "shop" o "goods"
RewriteCond %{QUERY_STRING} (^|&)shop [OR,NC]
RewriteCond %{QUERY_STRING} (^|&)goods [NC]
RewriteRule ^ - [G,L]

# Path que arranca con /shop/ o /goods/
RewriteRule ^shop(/.*)?$  - [G,L,NC]
RewriteRule ^goods(/.*)?$ - [G,L,NC]
```

`[G]` = 410 Gone · `[L]` = última regla · `[NC]` = sin distinción de mayúsculas.

## nginx (si el stack fuera nginx-puro)

`.htaccess` se **ignora** en nginx. Poner esto en el `server { }` del vhost,
**antes** del `location /` que sirve los estáticos:

```nginx
# 410 por query string (?shop... / ?goods...)
if ($args ~* "(^|&)shop")  { return 410; }
if ($args ~* "(^|&)goods") { return 410; }

# 410 por path (/shop/... /goods/...)
location ~* ^/shop(/|$)  { return 410; }
location ~* ^/goods(/|$) { return 410; }
```

## Cloudflare u otro CDN por delante

Cloudflare no devuelve 410 con una Redirect Rule normal. Opciones:

1. **Dejar que lo maneje el origen** (recomendado): asegurarse de que Cloudflare
   no cachee estas URLs (no deberían cachearse por defecto al ser 4xx) y que el
   `.htaccess`/nginx del origen aplique el 410.
2. **Cloudflare Worker**: interceptar y `return new Response('Gone', {status:410})`
   cuando `url.searchParams` o `url.pathname` matcheen `shop`/`goods`.

## Verificación (correr DESPUÉS del deploy)

```bash
# Deben devolver 410:
for u in "/?shop/c/c82294/" "/?shop/goods/W822665/" "/shop/" "/goods/anything"; do
  echo -n "$u -> "; curl -s -o /dev/null -w "%{http_code}\n" "https://buinet.com.ar$u"
done

# Deben devolver 200:
for u in "/" "/infraestructura-de-red/" "/que-es-una-red-convergente-y-por-que-es-esencial-hoy-en-dia/"; do
  echo -n "$u -> "; curl -s -o /dev/null -w "%{http_code}\n" "https://buinet.com.ar$u"
done
```

## Limpieza pendiente en el server

El WordPress viejo comprometido quedó en `/retired-wp` (fuera del docroot).
Conviene **eliminarlo por completo** una vez respaldadas las imágenes, para que
no quede ningún vector del cloaking activo.
