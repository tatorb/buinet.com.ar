# Diagnóstico de medición (Google Analytics / Tag Manager)

**Fecha:** 11 de agosto de 2026

## Alcance y método

El proxy de red de este entorno **bloquea el acceso saliente** a `buinet.com.ar` y a
`capitalinasdc.com` (el gateway responde `403 CONNECT`), así que no se pudo descargar
el sitemap ni las páginas en vivo.

Para **buinet.com.ar** el análisis se hizo sobre el **build de producción** (`dist/`),
que es byte a byte lo que el deploy sube al servidor. Es equivalente a descargar cada
página, y cubre el 100% de las URLs, no solo las del sitemap.

Para **capitalinasdc.com** no hay ninguna vía de acceso: no es un repositorio de esta
sesión y el dominio está bloqueado. **Quedó sin analizar.**

---

## a) Tabla por URL y patrón

| URL | googletagmanager.com/gtag/js | googletagmanager.com/gtm.js | G-XXXXXXXXXX | GTM-XXXXXXX | UA-XXXXXXXX | gtag( | dataLayer |
|---|---|---|---|---|---|---|---|
| https://buinet.com.ar/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/actualizacion-de-sistemas-de-videovigilancia-ip-en-perimetros-del-exceso-de-camaras-a-un-enfoque-termico-visual-y-sonoro/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/actualizacion-videovigilancia-analogica-a-ip/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/almacenamiento-videovigilancia/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/audio-ip/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/auditoria-procesos-video/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/cableado-estructurado-vida-util-red-empresa/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/camaras-ip-para-prevencion-de-accidentes/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/camaras-termicas-axis-para-industrias-y-perimetros/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/camaras-termicas-y-termometricas/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/camscope/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/cisco-isr-caso-galp-de-sd-wan-en-1-200-sitios/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/como-evitar-robos-con-videovigilancia-en-fabricas/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/contacto/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/control-de-accesos/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/cuando-ampliar-la-infraestructura-de-red-de-tu-empresa/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/cuando-contratar-un-datacenter/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/cuando-infraestructura-de-red-se-decide-en-el-plano/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/cuanto-nfluye-el-costo-de-una-solucion-integral-convergente/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/data-center/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/diseno-de-infraestructura-de-red-nueva/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/eficiencia-industrial-sistema-de-videovigilancia/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/el-poder-del-audio-ip-en-grandes-organizaciones-una-solucion-integral-de-building-networks/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/galeria-interna-bn-8f3d/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/iaen-videovigilancia-una-ventaja-competitiva/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/ikea-soroksar-videovigilancia-analitica-retail/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/infraestructura-de-red/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/integracion-control-accesos-audio-ip/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/lo-que-aprendimos-en-20-anos-it-para-empresas-en-cordoba/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/los-data-centers-en-la-era-del-edge-computing/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/lpr-control-acceso-vehicular/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/mejorar-la-experiencia-del-cliente-con-sistema-de-video/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/mejorar-la-productividad-videovigilancia-avanzada/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/merma-robo-interno-videovigilancia/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/monitoreo-de-red-empresa-como-implementarlo/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/mudanza-e-infraestructura-de-red/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/novedades/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/nvr-vs-vms/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/politicas-de-privacidad/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/proyeccion-desde-la-videovigilancia-para-ciudades/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/que-es-un-data-center-capitalinas/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/que-es-una-red-convergente-y-por-que-es-esencial-hoy-en-dia/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/que-es-una-red-convergente-y-por-que-es-la-base/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/redisenamos-camscope/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/seguridad-y-privacidad-con-camaras-ip-industriales/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/sobre-nosotros/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/ventajas-de-los-centros-de-datos-on-premise-vs-cloud/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/vida-util-camara-ip/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/videovigilancia-en-obra/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/videovigilancia-hospitalaria/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/videovigilancia-industria-alimenticia/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/videovigilancia-industrial/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/videovigilancia/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| https://buinet.com.ar/wifi-corporativo-como-disenar-cobertura-sin-puntos-ciegos/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

---

## b) Identificadores encontrados

**Ninguno.** No aparece ningún identificador `G-`, `GTM-` ni `UA-` en ninguna de las
54 páginas. No hay mediciones superpuestas porque no hay ninguna medición.

---

## c) Páginas con y sin medición

### CON medición (0)

_(ninguna)_

### SIN medición (54 de 54, o sea el 100%)

- https://buinet.com.ar/
- https://buinet.com.ar/actualizacion-de-sistemas-de-videovigilancia-ip-en-perimetros-del-exceso-de-camaras-a-un-enfoque-termico-visual-y-sonoro/
- https://buinet.com.ar/actualizacion-videovigilancia-analogica-a-ip/
- https://buinet.com.ar/almacenamiento-videovigilancia/
- https://buinet.com.ar/audio-ip/
- https://buinet.com.ar/auditoria-procesos-video/
- https://buinet.com.ar/cableado-estructurado-vida-util-red-empresa/
- https://buinet.com.ar/camaras-ip-para-prevencion-de-accidentes/
- https://buinet.com.ar/camaras-termicas-axis-para-industrias-y-perimetros/
- https://buinet.com.ar/camaras-termicas-y-termometricas/
- https://buinet.com.ar/camscope/
- https://buinet.com.ar/cisco-isr-caso-galp-de-sd-wan-en-1-200-sitios/
- https://buinet.com.ar/como-evitar-robos-con-videovigilancia-en-fabricas/
- https://buinet.com.ar/contacto/
- https://buinet.com.ar/control-de-accesos/
- https://buinet.com.ar/cuando-ampliar-la-infraestructura-de-red-de-tu-empresa/
- https://buinet.com.ar/cuando-contratar-un-datacenter/
- https://buinet.com.ar/cuando-infraestructura-de-red-se-decide-en-el-plano/
- https://buinet.com.ar/cuanto-nfluye-el-costo-de-una-solucion-integral-convergente/
- https://buinet.com.ar/data-center/
- https://buinet.com.ar/diseno-de-infraestructura-de-red-nueva/
- https://buinet.com.ar/eficiencia-industrial-sistema-de-videovigilancia/
- https://buinet.com.ar/el-poder-del-audio-ip-en-grandes-organizaciones-una-solucion-integral-de-building-networks/
- https://buinet.com.ar/galeria-interna-bn-8f3d/
- https://buinet.com.ar/iaen-videovigilancia-una-ventaja-competitiva/
- https://buinet.com.ar/ikea-soroksar-videovigilancia-analitica-retail/
- https://buinet.com.ar/infraestructura-de-red/
- https://buinet.com.ar/integracion-control-accesos-audio-ip/
- https://buinet.com.ar/lo-que-aprendimos-en-20-anos-it-para-empresas-en-cordoba/
- https://buinet.com.ar/los-data-centers-en-la-era-del-edge-computing/
- https://buinet.com.ar/lpr-control-acceso-vehicular/
- https://buinet.com.ar/mejorar-la-experiencia-del-cliente-con-sistema-de-video/
- https://buinet.com.ar/mejorar-la-productividad-videovigilancia-avanzada/
- https://buinet.com.ar/merma-robo-interno-videovigilancia/
- https://buinet.com.ar/monitoreo-de-red-empresa-como-implementarlo/
- https://buinet.com.ar/mudanza-e-infraestructura-de-red/
- https://buinet.com.ar/novedades/
- https://buinet.com.ar/nvr-vs-vms/
- https://buinet.com.ar/politicas-de-privacidad/
- https://buinet.com.ar/proyeccion-desde-la-videovigilancia-para-ciudades/
- https://buinet.com.ar/que-es-un-data-center-capitalinas/
- https://buinet.com.ar/que-es-una-red-convergente-y-por-que-es-esencial-hoy-en-dia/
- https://buinet.com.ar/que-es-una-red-convergente-y-por-que-es-la-base/
- https://buinet.com.ar/redisenamos-camscope/
- https://buinet.com.ar/seguridad-y-privacidad-con-camaras-ip-industriales/
- https://buinet.com.ar/sobre-nosotros/
- https://buinet.com.ar/ventajas-de-los-centros-de-datos-on-premise-vs-cloud/
- https://buinet.com.ar/vida-util-camara-ip/
- https://buinet.com.ar/videovigilancia-en-obra/
- https://buinet.com.ar/videovigilancia-hospitalaria/
- https://buinet.com.ar/videovigilancia-industria-alimenticia/
- https://buinet.com.ar/videovigilancia-industrial/
- https://buinet.com.ar/videovigilancia/
- https://buinet.com.ar/wifi-corporativo-como-disenar-cobertura-sin-puntos-ciegos/

---

## d) Patrón detectado

**No hay patrón parcial. La ausencia es total y uniforme.**

No es que la home mida y el resto no, ni que las páginas viejas midan y las nuevas no.
Las 54 páginas del sitio, sin excepción, no tienen ningún código de medición.
Tampoco hay nada en el código fuente (`src/`, `public/`, `astro.config.mjs`): el sitio
nuevo **nunca incluyó** el snippet, no es que se haya roto.

### Qué tenía el WordPress anterior

Revisando el backup de la base del sitio viejo aparecen **dos contenedores de Google
Tag Manager distintos**, lo que confirma que antes sí se medía:

| ID | Dónde estaba | Observación |
|---|---|---|
| `GTM-WK29MCTP` | Snippet inyectado en el `<head>` y el `<noscript>` de las páginas | Es el que efectivamente cargaba |
| `GTM-MRBL36JM` | Configuración del plugin Google Site Kit (cuenta 6301974585) | Configurado, pero distinto del inyectado |

> ⚠️ **Ojo: en el sitio viejo había dos contenedores GTM diferentes conviviendo.**
> Antes de restaurar la medición hay que definir **cuál de los dos es el correcto**, o
> se reproduce una configuración duplicada. No se encontró ningún ID `G-` (GA4) ni `UA-`
> directo en la base: la medición se resolvía a través de GTM, así que el ID de GA4 vive
> dentro del contenedor, no en el sitio.
