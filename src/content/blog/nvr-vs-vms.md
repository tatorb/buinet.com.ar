---
title: "NVR vs VMS, cómo elegir la base de tu videovigilancia"
description: "NVR o VMS, qué conviene según cantidad de cámaras, retención, analítica e integración. Criterios técnicos para decidir la arquitectura de grabación."
heroImage: "/wp-content/uploads/2026/08/nvr-vs-vms.png"
pubDate: 2026-08-11
author: "Building Networks"
draft: false
---
## La pregunta suele llegar mal formulada

En la mayoría de las empresas la decisión entre NVR y VMS no la toma el área de sistemas. La toma el instalador que cotizó el proyecto, y llega al jefe de sistemas ya resuelta, adentro de una lista de materiales. El equipo aparece como una línea más entre las cámaras y el cableado, y recién se discute cuando hay que sumar veinte cámaras nuevas y no entran.

Ahí se descubre que la elección no era un detalle de compra. Era una decisión de arquitectura que condiciona cuántas cámaras vas a poder sumar, cuántos días vas a poder retener, qué analítica vas a poder correr y con qué otros sistemas vas a poder integrar. Vale la pena entenderla antes de firmar, no después.

## Qué es un NVR y qué resuelve

Un NVR, sigla de Network Video Recorder, es un equipo dedicado que graba el video que le llega por red desde las cámaras IP. Viene con su sistema operativo cerrado, su software de grabación instalado de fábrica y una cantidad fija de canales, típicamente 8, 16, 32 o 64. Muchos modelos traen switch PoE integrado, así que alimentan las cámaras por el mismo cable de red.

Lo que resuelve bien es la simplicidad. Se enchufa, se descubren las cámaras, se define la retención y funciona. No hay servidor que administrar, no hay licencias que renovar, no hay dependencia de un equipo de sistemas para operarlo. Para una sucursal, un depósito o una oficina con una cantidad estable de cámaras, es una solución razonable y difícil de superar en costo.

Lo que no resuelve es el crecimiento. Un NVR de 32 canales graba 32 cámaras, y la cámara 33 requiere otro NVR. Cuando tenés tres o cuatro equipos, cada uno con su interfaz y su usuario, la operación se vuelve un problema en sí misma. Nadie mira cuatro pantallas distintas para reconstruir un evento.

## Qué es un VMS y qué resuelve

Un VMS, sigla de Video Management System, es software de gestión de video que corre sobre un servidor estándar. La capacidad no está definida por el hardware que compraste sino por la licencia y por el dimensionamiento del servidor. Sumar cámaras es sumar licencias, y sumar capacidad es sumar disco, memoria o un servidor más al mismo sistema.

Lo que resuelve es todo lo que el NVR deja afuera. Administración centralizada de varias sedes bajo una sola interfaz, perfiles de usuario con permisos diferenciados por cámara y por función, búsqueda forense sobre horas de grabación, integración con control de accesos, audio IP y sistemas de terceros vía API, y capacidad de correr [analítica de video con inteligencia artificial](/analitica-de-video-con-ia/) sobre el flujo en vivo o sobre el archivo.

El costo es la complejidad. Un VMS necesita un servidor bien dimensionado, una red que soporte el throughput, alguien que administre las licencias y una política de actualizaciones. No es un equipo que se enchufa, es una plataforma que se opera.

## Los criterios que definen la decisión

### Cantidad de cámaras y horizonte de crecimiento

El número que importa no es cuántas cámaras tenés hoy sino cuántas vas a tener en tres años. Si el plan de expansión de planta contempla dos naves nuevas, la cuenta se hace sobre el escenario final. Un sistema que se resuelve con NVR hoy y necesita migrar en dieciocho meses termina costando más que el VMS que se descartó por precio inicial.

### Retención requerida

La cantidad de días de grabación que necesitás guardar cambia por completo el cálculo de almacenamiento. Treinta días con treinta cámaras en 4K no entran en el disco interno de un NVR, y ahí el equipo cerrado deja de ser una opción. El cálculo completo lo desarrollamos en [almacenamiento de video](/almacenamiento-videovigilancia/), y el dimensionamiento general del sistema en [cómo dimensionar un sistema de videovigilancia corporativo](/como-dimensionar-sistema-videovigilancia/).

### Analítica

Si la analítica corre en la cámara, el grabador solo recibe eventos y metadatos, y un NVR alcanza. Si la analítica corre en servidor, por ejemplo reconocimiento de patentes con LPR sobre múltiples accesos, conteo de personas o detección de comportamiento sobre varias cámaras a la vez, necesitás capacidad de procesamiento que un NVR no tiene. Ese es el punto donde la mayoría de los proyectos industriales termina en VMS.

### Integración con otros sistemas

Una cámara que graba es un sistema de video. Una cámara que dispara la apertura de una barrera cuando reconoce una patente autorizada, y que registra el evento junto al usuario que pasó, es un sistema de seguridad. La diferencia la hace la capa de integración, y esa capa vive en el VMS. Si el proyecto contempla control de accesos, audio IP para avisos por zona o alarmas perimetrales, el NVR queda corto. Lo desarrollamos en [integración con control de accesos y audio IP](/integracion-control-accesos-audio-ip/).

### Red disponible

Este es el criterio que más veces se omite. Treinta cámaras en 1080p a 15 fps generan un throughput sostenido que compite con el tráfico productivo si comparte infraestructura. Cualquiera de las dos arquitecturas requiere VLAN dedicada para el tráfico de video, switches con presupuesto PoE suficiente y uplinks dimensionados. Un VMS mal ubicado en la topología genera cuellos de botella que se leen como fallas de cámara.

### Continuidad

Un NVR es un punto único de falla. Si se cae la fuente o el disco, se pierde la grabación de todas sus cámaras hasta que alguien lo reemplace. Un VMS admite grabación redundante, failover entre servidores y almacenamiento en arreglo. Si el video tiene valor probatorio o cumple una función de proceso, esa diferencia no es opcional.

## Comparación rápida

| Criterio | NVR | VMS |
|---|---|---|
| Escalabilidad | Limitada al número de canales del equipo | Por licencia y por hardware, sin techo práctico |
| Multisede | Un equipo y una interfaz por sede | Administración centralizada |
| Analítica en servidor | No, o muy acotada | Sí, según dimensionamiento |
| Integraciones | Cerradas al fabricante | API y protocolos abiertos |
| Redundancia | Punto único de falla | Failover y grabación redundante |
| Costo inicial | Bajo | Alto |
| Carga de administración | Mínima | Requiere gestión de sistemas |

## Tres escenarios concretos

**Oficina única, doce cámaras, retención de quince días, sin analítica.** NVR. Cualquier otra cosa es sobredimensionar. El presupuesto rinde más invirtiendo en mejores cámaras que en una plataforma que no vas a usar.

**Planta industrial, sesenta cámaras, perímetro con detección térmica, control de acceso vehicular con LPR, retención de sesenta días.** VMS sin discusión. Acá el video es parte de la operación, no un registro pasivo. Es el escenario que desarrollamos en [videovigilancia industrial](/videovigilancia-industrial/).

**Casa central con ocho sucursales.** Arquitectura híbrida. NVR local en cada sucursal para grabación de contingencia, VMS central que federa todo y concentra la visualización, la búsqueda y los reportes. Si se corta el enlace, la sucursal sigue grabando y sincroniza después. Es la configuración que mejor tolera enlaces de calidad despareja.

## Lo que ni el NVR ni el VMS resuelven solos

Ninguna de las dos arquitecturas compensa un dimensionamiento mal hecho. Si la cámara está mal ubicada, si el WDR no alcanza para el contraste del portón contra el sol de la tarde o si el ancho de banda del enlace no da, el problema no se arregla cambiando de grabador. La elección de plataforma viene después de resolver la capa física, no antes. Sobre eso trabajamos en la comparativa de [cámaras IP y analógicas](/camaras-ip-vs-analogicas/).

## La opción de plataforma propia

Hay un tercer camino que se discute poco. Los VMS comerciales están construidos para un mercado amplio, y eso significa que traen funciones que no vas a usar y les faltan las que tu operación necesita. Cuando el video cumple una función específica de proceso, por ejemplo auditoría de líneas de producción o trazabilidad de despacho, la plataforma genérica obliga a adaptar la operación al software.

CamScope es la plataforma que desarrollamos en Building Networks a lo largo de diez años justamente para ese caso. Se construye sobre los requerimientos del cliente en lugar de sobre un catálogo cerrado, y eso permite integrar el video con los sistemas que la empresa ya usa, definir la lógica de eventos según el proceso real y evitar el esquema de licenciamiento por canal. Lo desarrollamos en [la página de CamScope](/camscope/).

## Cómo tomar la decisión sin quedar atado

La regla práctica es simple. Definí primero el escenario a tres años, después la retención, después qué tiene que hacer el sistema además de grabar. Con esas tres respuestas la arquitectura se elige sola. Si empezás por el precio del equipo, la vas a pagar dos veces.

Y sea cual sea la decisión, exigí protocolos abiertos en las cámaras. Un parque de cámaras que solo habla con un fabricante te obliga a reemplazar todo cuando cambiás de plataforma. Un parque abierto te deja migrar el software y conservar el hardware, que es donde está la mayor parte de la inversión y donde más pesa el [ciclo de vida de los equipos](/vida-util-camara-ip/).

En Building Networks diseñamos, implementamos y mantenemos sistemas de videovigilancia corporativa e industrial desde hace más de veinte años, con partners de hardware como AXIS y plataforma propia cuando el proyecto lo justifica. Podés ver el panorama completo en nuestra guía de [videovigilancia corporativa](/videovigilancia-corporativa/).

Si estás evaluando la arquitectura de tu sistema o te quedó chico el que tenés, [conversemos](/contacto/).
