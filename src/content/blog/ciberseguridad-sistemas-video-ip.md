---
title: "Ciberseguridad en sistemas de video IP, lo que nadie revisa"
description: "Una cámara IP con firmware viejo es un vector de ataque. Firmware firmado, LTS del fabricante y segmentación de red, antes de que haya incidente."
heroImage: "/img/ciberseguridad-sistemas-video-ip.jpg"
pubDate: 2026-09-17
author: "Building Networks"
contactForm: true
draft: false
---
Las cámaras IP son computadoras en tu red. Hay que tratarlas como tal.

Cuando una empresa instala un sistema de videovigilancia, la conversación suele girar en torno a las cámaras, los grabadores y la cobertura de cada sector. Rara vez aparece una pregunta: ¿quién actualiza el firmware de esos dispositivos, y cada cuánto?

La respuesta más común es nadie, o no sé. Y eso es un problema, porque una cámara IP con firmware desactualizado no es solo un dispositivo que puede fallar. Es un punto de entrada a la red de la empresa.

## Qué puede hacer un atacante con acceso a una cámara

Una cámara comprometida permite varias cosas que no son obvias. Puede ser usada como punto de pivote para moverse lateralmente dentro de la red, accediendo a sistemas que no tienen nada que ver con la videovigilancia. Puede ser reclutada para ataques contra terceros, con la infraestructura de la empresa como origen. Puede transmitir su video a destinos externos sin que nadie lo note. O puede dejar de funcionar en el momento más inconveniente.

Los ataques a dispositivos IoT mal mantenidos no son una amenaza teórica. La botnet Mirai, que en 2016 generó uno de los mayores ataques de denegación de servicio de la historia, se construyó principalmente sobre cámaras IP y grabadores de video con firmware sin actualizar y credenciales de fábrica sin cambiar.

## Por qué elegimos AXIS como partner de hardware

No todos los fabricantes de cámaras aplican el mismo nivel de rigor en ciberseguridad. La diferencia no se ve en la ficha técnica, se ve en el modelo de seguridad que el fabricante aplica desde el diseño del chip hasta el soporte post-venta.

AXIS es el partner de hardware de Building Networks. Lo elegimos, entre otras razones, por el nivel de seriedad con el que trata la ciberseguridad de sus dispositivos, que está documentado, verificable y auditado por terceros.

**Chip propio con seguridad integrada.** AXIS diseña su propio procesador, el ARTPEC, desarrollado internamente. Eso le da control total sobre las funciones de seguridad desde el nivel más bajo del hardware, sin depender de chips de terceros. Cada dispositivo incluye Edge Vault, un módulo criptográfico seguro que protege las claves y los certificados del dispositivo ante cualquier intento de manipulación, incluso con acceso físico al equipo.

**ID de dispositivo único y certificado.** Cada cámara AXIS tiene un identificador único firmado digitalmente que certifica que el dispositivo es un producto original. Eso impide que se introduzcan dispositivos falsos o adulterados en la red.

**Firmware firmado e inicio seguro.** El sistema operativo de las cámaras, AXIS OS, está firmado digitalmente por AXIS. Cada vez que el dispositivo arranca, verifica que el firmware que está ejecutando lleva esa firma. Si no la tiene, no lo ejecuta. Eso impide que alguien instale firmware malicioso, ya sea de forma remota o con acceso físico al dispositivo.

**Certificación FIPS 140.** Las normas FIPS 140 son los estándares de seguridad criptográfica exigidos por las agencias federales de Estados Unidos y Canadá para el manejo de información sensible. AXIS cumple con FIPS 140-2 en toda su cartera de productos actuales, y ya tiene el primer dispositivo con certificación FIPS 140-3 Nivel 3, el nivel más alto certificado para dispositivos de este tipo. Que un fabricante de cámaras cumpla con los requisitos criptográficos del Departamento de Defensa de Estados Unidos es una señal concreta del nivel de seguridad que aplica.

**Autoridad de numeración CVE.** AXIS es una autoridad de numeración reconocida para vulnerabilidades y exposiciones comunes. Eso significa que no solo gestiona las vulnerabilidades de sus productos, sino que participa activamente en el ecosistema global de seguridad. Publica sus parches con transparencia, opera un servicio de notificación de seguridad al que cualquier usuario puede suscribirse, y sigue el sistema de puntuación CVSS para evaluar y comunicar el nivel de riesgo de cada vulnerabilidad.

**Long term support documentado y publicado.** AXIS ofrece dos modalidades de actualización de AXIS OS. El modo activo incorpora nuevas funcionalidades y parches de seguridad en cada versión. El modo LTS entrega solo parches de seguridad, garantizando la estabilidad del sistema en instalaciones que no quieren cambios de funcionalidad. Ambas son gratuitas. El calendario de soporte está publicado en el AXIS OS Portal y es accesible sin necesidad de registro.

## Long term support y ciclo de vida, por qué importa en una instalación corporativa

No todo el hardware de videovigilancia tiene el mismo ciclo de soporte. Algunos fabricantes publican actualizaciones por un período limitado y después dejan el producto sin mantenimiento. Cuando eso sucede, las vulnerabilidades que se descubran no tienen parche disponible.

En una instalación corporativa que no rota su hardware cada dos años, eso es la diferencia entre una infraestructura que se puede mantener segura y una que acumula deuda técnica desde el momento en que el fabricante corta el soporte. Si estás evaluando un sistema nuevo o una ampliación, el ciclo de vida del hardware con soporte activo es un dato que tiene que estar en la propuesta. Lo trabajamos en más detalle en [cuánto dura una cámara IP y cuándo conviene reemplazarla](/vida-util-camara-ip/).

## Actualización gestionada de toda la flota

Actualizar el firmware de una cámara en forma manual no escala. En un sistema de veinte dispositivos ya es tedioso. En uno de doscientas, es impracticable sin herramientas de gestión centralizada.

CamScope, la plataforma de gestión que desarrollamos en Building Networks a lo largo de diez años de operación, permite ejecutar actualizaciones de firmware de forma centralizada sobre toda la flota, incluyendo tanto las cámaras AXIS como el propio sistema de gestión. Las actualizaciones se planifican y ejecutan desde un punto único, sin necesidad de intervenir dispositivo por dispositivo.

La diferencia práctica es que las actualizaciones se aplican efectivamente, en lugar de postergarse indefinidamente porque nadie las prioriza.

## Segmentación de red, la capa que completa la protección

La ciberseguridad de un sistema de video no se resuelve solo con firmware actualizado. La segmentación de red es la capa que limita el impacto si algo igual falla.

Una red de videovigilancia bien diseñada corre en una VLAN separada del tráfico productivo de la empresa. Las cámaras pueden comunicarse con el servidor de gestión, pero no tienen acceso libre al resto de la red. Si un dispositivo se ve comprometido, el radio de acción del atacante queda acotado a esa VLAN.

Es un principio de diseño que requiere que la infraestructura de red lo soporte. Por eso el sistema de video y la red se diseñan juntos. Si necesitás evaluar si tu red actual está preparada para soportar un sistema convergente, [este artículo sobre infraestructura de red](/infraestructura-de-red/) explica los requisitos concretos.

## Cinco preguntas para evaluar cualquier propuesta

Más allá del hardware que se elija, estas preguntas separan una propuesta de ingeniería de una lista de equipos.

¿El hardware tiene un ciclo de LTS documentado y publicado por el fabricante?

¿El firmware está firmado digitalmente y el dispositivo verifica esa firma en cada arranque?

¿El fabricante opera un programa de gestión de vulnerabilidades con notificación activa?

¿El sistema de gestión permite actualizar la flota de forma centralizada?

¿La propuesta incluye diseño de VLAN y segmentación de red para el tráfico de video?

Si la propuesta que recibís no responde estas preguntas, no es que el proveedor las ignoró. Es que probablemente no trabaje con ese nivel de detalle. Podés ver qué más evaluar antes de contratar en [qué preguntar antes de diseñar tu infraestructura de red](/diseno-de-infraestructura-de-red-nueva/).

## Cuánto cuesta un incidente frente a cuánto cuesta la gestión preventiva

La gestión preventiva tiene un costo predecible y planificable. Firmware actualizado, red segmentada, hardware con LTS. El incidente no tiene costo predecible, e incluye desde investigación forense y remediación hasta responsabilidades legales si la brecha involucra datos de terceros.

En instalaciones donde el sistema de video está integrado con control de accesos y audio IP, el radio de impacto de una brecha es mayor que si el sistema fuera independiente. Si querés ver cómo se integran esos sistemas, [este artículo sobre integración de control de accesos y audio IP](/integracion-control-accesos-audio-ip/) lo explica en detalle.

## Evaluá la ciberseguridad de tu sistema actual

Si tu instalación de video tiene más de tres años y no recordás cuándo se actualizó el firmware por última vez, es un buen momento para revisarlo.

En Building Networks diseñamos e instalamos sistemas de videovigilancia corporativa e industrial con AXIS como partner de hardware y CamScope como plataforma de gestión. El mantenimiento y la actualización de la flota forman parte del servicio.
