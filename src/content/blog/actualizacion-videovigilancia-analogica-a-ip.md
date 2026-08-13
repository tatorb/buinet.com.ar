---
title: "Migrar de videovigilancia analógica a IP sin cortes"
description: "Cómo se planifica una migración de analógico a IP por etapas, qué se conserva del cableado existente y cómo evitar quedarse sin cobertura durante el cambio."
heroImage: "/wp-content/uploads/2026/08/actualizacion-videovigilancia-analogica-a-ip.png"
pubDate: 2026-08-11
author: "Building Networks"
draft: false
---
## El problema no es técnico, es de continuidad

La decisión de migrar de analógico a IP casi nunca está en discusión. Cuando el grabador ya no tiene repuestos, cuando las imágenes no sirven para identificar a nadie y cuando cualquier cosa que se quiera integrar choca contra un sistema cerrado, la conclusión es obvia.

Lo que frena el proyecto es otra cosa. Nadie puede quedarse un fin de semana sin cámaras en una planta que opera, ni desconectar el perímetro para tender cable nuevo, ni perder el archivo de los últimos meses porque el grabador viejo salió de servicio.

Por eso la pregunta correcta no es a qué migrar, es en qué orden, y ese orden es lo que decide si la migración sale bien o se convierte en un proyecto que queda a mitad de camino durante dos años.

## Qué se conserva y qué no

Buena noticia para el presupuesto. La parte más cara de una instalación no son las cámaras.

**El ducto y la canalización se conservan casi siempre.** Es la obra civil, lo que cuesta plata y tiempo, y sirve igual para el cable nuevo.

**El cable coaxial no se tira necesariamente.** Existen conversores que transportan Ethernet sobre el coaxial existente, alimentando además la cámara. En tiradas donde pasar cable nuevo implica romper pared, piso o cruzar un techo inaccesible, es la diferencia entre una migración viable y una que no se hace.

**Los soportes y gabinetes suelen servir.** Con adaptadores en algunos casos, pero rara vez hay que rehacerlos.

**Lo que sí cambia.** Las cámaras, el grabador y, sobre todo, la red. Acá está el costo real que no aparece en las primeras cotizaciones, porque un sistema IP necesita switches con presupuesto PoE suficiente, segmentación en VLAN para que el video no compita con el tráfico productivo y uplinks dimensionados. El detalle está en [cómo dimensionar un sistema de videovigilancia corporativo](/como-dimensionar-sistema-videovigilancia/).

## La convivencia, que es lo que hace posible el gradualismo

La clave de una migración sin cortes es que los dos sistemas funcionen a la vez durante el período de cambio. Hay dos maneras de lograrlo.

**Codificadores de video.** Un equipo que toma la señal analógica de las cámaras viejas y la convierte en flujo IP. Con eso, las cámaras analógicas entran a la plataforma nueva como si fueran IP. No mejoran su imagen, siguen siendo lo que son, pero se administran, se graban y se buscan desde el mismo lugar que las nuevas.

Esto cambia por completo la lógica del proyecto. Se instala primero la plataforma, se incorpora todo el parque viejo mediante codificadores, y a partir de ahí las cámaras se reemplazan de a zonas sin que la operación note nada. El día que se cambia la última, se retiran los codificadores.

**Sistemas en paralelo.** Se deja el sistema analógico funcionando y se monta el IP en paralelo, zona por zona, hasta cubrir todo. Es más simple de entender y más caro, porque durante meses hay dos sistemas que mantener y dos lugares donde buscar. Sirve cuando el sistema viejo está tan cerrado que ni siquiera admite codificadores.

En la mayoría de los casos conviene la primera. La comparación de arquitecturas de grabación la desarrollamos en [NVR y VMS](/nvr-vs-vms/).

## El orden de las zonas

Acá se define el retorno del proyecto, porque una migración por etapas se paga sola si las primeras etapas resuelven lo que más duele.

**Primero, donde el sistema viejo directamente no cumple.** Accesos donde hay que identificar personas o leer patentes, y las cámaras actuales solo muestran siluetas. Es donde el cambio se nota el mismo día.

**Segundo, donde el equipo está por caerse.** Cámaras fuera de soporte, con fallas recurrentes o con repuestos discontinuados. Migrar ahí es reemplazar algo que se va a romper igual, con la diferencia de que se hace planificado y no de urgencia. El criterio de ciclo de vida lo desarrollamos en [cuánto dura una cámara IP](/vida-util-camara-ip/).

**Tercero, donde se quiere sumar función.** Zonas que van a llevar analítica, perímetros que pasan a detección térmica, accesos que se integran con control de accesos.

**Al final, lo que funciona bien.** Un pasillo interior con una cámara analógica que cumple su función puede esperar tranquilamente al último tramo.

Este orden es distinto del que propone la mayoría de las cotizaciones, que suelen ir por sector edilicio porque es más simple de organizar. Ir por criticidad rinde bastante más.

## Lo que hay que resolver antes de tocar nada

**El archivo del sistema viejo.** Cuando el grabador analógico sale de servicio, sus grabaciones se van con él. Definí antes qué material hay que conservar y exportalo en un formato que se pueda ver sin el equipo original. Es el paso que más veces se omite y el que no tiene vuelta atrás.

**La red, antes que las cámaras.** Poner cámaras IP sobre una red que no está preparada produce un sistema que funciona mal y hace parecer que el problema es de las cámaras. Los switches PoE, la segmentación y el ancho de banda van primero.

**Un inventario real.** Cuántas cámaras hay, dónde, de qué modelo, por dónde va cada cable y cuál está efectivamente conectada. En sistemas heredados de quince años es habitual descubrir cámaras que nadie sabía que existían y otras que figuran en el plano y hace años que no funcionan.

**La retención esperada.** El sistema nuevo va a generar bastante más datos que el viejo, y el almacenamiento se dimensiona sobre el escenario final, no sobre la primera etapa. El cálculo está en [almacenamiento de video](/almacenamiento-videovigilancia/).

## No comprar el mismo problema otra vez

El sistema analógico que estás por reemplazar era cerrado. Si el nuevo también lo es, dentro de ocho años vas a estar en la misma conversación.

Dos condiciones que conviene exigir por contrato. Que las cámaras trabajen con protocolos abiertos, para que el parque no quede atado a un fabricante y se pueda cambiar de plataforma conservando el hardware. Y que la plataforma exponga sus eventos hacia otros sistemas, porque tarde o temprano va a aparecer el pedido de integrar con control de accesos o con audio. Eso lo tratamos en [integración con control de accesos y audio IP](/integracion-control-accesos-audio-ip/).

Es la misma lógica de los parches acumulados que se ve en cualquier sistema heredado, y que desarrollamos en [videovigilancia industrial](/videovigilancia-industrial/).

## Lo que se gana, además de la imagen

La mejora de calidad es la que se vende, pero no es la que más cambia la operación.

Lo que cambia de verdad es que el video pasa a ser consultable. Buscar un evento en un sistema analógico es avanzar y retroceder una cinta o un archivo hasta encontrar el momento. En un sistema IP con plataforma es filtrar por cámara, por fecha, por tipo de evento y llegar en segundos. La diferencia entre una tarde y un minuto es lo que hace que alguien efectivamente use el sistema.

Y aparece lo que antes no existía. Analítica que avisa sola en lugar de un operador mirando monitores, algo que desarrollamos en [analítica de video con inteligencia artificial](/analitica-de-video-con-ia/). Acceso remoto con perfiles diferenciados. Integración con los otros sistemas de la empresa.

## Cuando el sistema viejo no era tan malo

Vale una aclaración honesta. Si el sistema analógico cumple su función, si nadie necesita identificar a nadie y si no hay planes de integrar nada, migrar por migrar no tiene sentido.

El disparador legítimo es uno de estos cuatro. El equipo salió de soporte, la imagen no alcanza para lo que hoy se necesita, hace falta integrar con otro sistema, o hay que ampliar y el sistema actual no da más. Si no aparece ninguno, el presupuesto rinde más en otro lado.

## Cuando la migración toca el proceso

En operaciones donde el video cumple función de proceso y no solo de seguridad, la migración es también una oportunidad de reordenar la lógica. Zonas que se comportan distinto según el turno, políticas de retención por cámara, reglas de alarma que escalan según sector y horario.

CamScope, la plataforma que desarrollamos en Building Networks a lo largo de diez años, trabaja con protocolos abiertos y admite codificadores, así que puede tomar el parque analógico existente desde el primer día y sostener toda la transición sin licenciamiento por canal. Lo desarrollamos en [la página de CamScope](/camscope/).

## Por dónde empezar

El primer paso no es cotizar cámaras, es relevar. Inventario real del parque, estado de la red, qué material del archivo hay que conservar y qué zonas están fallando en cumplir su función.

Con eso se arma el plan por etapas, y cada etapa se puede aprobar por separado. Es lo que convierte un proyecto grande y difícil de firmar en varios chicos que se ejecutan sin frenar la operación.

En Building Networks migramos sistemas de videovigilancia analógicos a IP desde hace más de veinte años, con AXIS como partner de hardware y plataforma propia cuando el proyecto lo justifica. El panorama completo está en nuestra guía de [videovigilancia corporativa](/videovigilancia-corporativa/).

Si tenés un sistema analógico que ya no da y no sabés por dónde arrancar, [conversemos](/contacto/).
