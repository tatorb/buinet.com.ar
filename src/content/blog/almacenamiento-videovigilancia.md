---
title: "Almacenamiento de video, cómo se calcula bien la retención"
description: "Cómo se dimensiona el almacenamiento de un sistema de videovigilancia, qué define el bitrate real, cuántos días guardar y por qué RAID no es backup."
heroImage: "/wp-content/uploads/2026/08/almacenamiento-videovigilancia.png"
pubDate: 2026-08-11
author: "Building Networks"
draft: false
---
## El cálculo que casi siempre sale mal

Hay una escena que se repite. El sistema se instaló con treinta días de retención comprometidos, y a los cuatro meses alguien pide el video de hace tres semanas y no está. El disco se llenó antes y el sistema empezó a sobrescribir mucho más rápido de lo previsto.

No es una falla. Es un cálculo hecho con los números del folleto en lugar de con los de la instalación real. Y como el problema recién se manifiesta cuando alguien necesita el video, se descubre siempre en el peor momento.

El almacenamiento es la variable menos glamorosa de un proyecto de videovigilancia y la que más veces define si el sistema sirve. Vale la pena entender cómo se calcula de verdad.

## La fórmula, y por qué la fórmula no alcanza

El cálculo base es simple. Bitrate por cámara, multiplicado por la cantidad de cámaras, por las horas de grabación diarias, por los días de retención. El resultado, en terabytes, es el almacenamiento necesario.

El problema no está en la fórmula, está en el primer número. El bitrate no es un dato fijo del equipo, es un resultado de la escena. La misma cámara con la misma configuración puede generar tres veces más datos en un lugar que en otro, y ahí es donde el cálculo del folleto se cae.

## Qué determina el bitrate real

**Resolución y cuadros por segundo.** Es lo obvio y lo único que suele considerarse. Pasar de 1080p a 4K multiplica los datos por cuatro. Bajar de 25 a 12 fps los reduce casi a la mitad, y en la enorme mayoría de las aplicaciones de seguridad, 12 fps alcanza de sobra.

**Movimiento en la escena.** Los codecs de video comprimen guardando las diferencias entre cuadros. Una cámara apuntando a un pasillo vacío genera una fracción de los datos que genera la misma cámara apuntando a una calle con tránsito. Por eso dos cámaras idénticas en el mismo edificio pueden tener consumos completamente distintos.

**Ruido nocturno.** Este es el factor que más veces arruina el cálculo. De noche, con poca luz, el sensor introduce ruido, y el ruido es movimiento aleatorio píxel por píxel. El codec no puede comprimirlo porque cada cuadro es distinto del anterior, así que el bitrate nocturno de una cámara mal iluminada puede duplicar o triplicar el diurno. Una cámara con buena sensibilidad en baja luz no es solo un tema de calidad de imagen, es un tema de almacenamiento.

**Escenas con vegetación o agua.** Un árbol moviéndose con viento, una pileta, una lona. Movimiento constante y no comprimible. Son las cámaras que siempre aparecen primeras en el ranking de consumo.

## Codecs y compresión inteligente

El codec define cuánto ocupa cada segundo de video. H.264 sigue siendo el más compatible, pero H.265 reduce el tamaño de forma significativa a igual calidad, y en un sistema mediano esa diferencia se traduce en discos que no hay que comprar.

Encima del codec hay una segunda capa. Los fabricantes desarrollaron tecnologías de compresión que analizan la escena y aplican compresión distinta según la zona, guardando con máximo detalle lo que cambia y con detalle mínimo el fondo estático. En escenas mayormente quietas, que son la mayoría en videovigilancia corporativa, la reducción es considerable sin perder lo que importa.

El punto a verificar antes de decidir es que la plataforma de grabación soporte el codec elegido. Un parque de cámaras con H.265 y un sistema que solo procesa H.264 obliga a transcodificar, y ahí se paga en carga de servidor lo que se ahorró en disco.

## Grabación continua, por evento, o las dos

**Continua.** Todo, todo el tiempo. Es la única que garantiza que no falte nada, y la que más consume. Necesaria donde el video tiene valor probatorio o donde reconstruir la secuencia completa importa.

**Por evento.** Se graba solo cuando la analítica dispara. Reduce el consumo de forma drástica, y tiene un riesgo obvio, lo que la analítica no detectó no existe. Además pierde el contexto previo, aunque casi todos los sistemas permiten configurar un búfer de algunos segundos antes del evento.

**Mixta, que es lo que conviene en la mayoría de los casos.** Grabación continua permanente a baja tasa de cuadros y calidad moderada, más grabación en alta calidad y alta tasa solo cuando hay evento. Así siempre tenés la línea de tiempo completa para reconstruir, y detalle suficiente para identificar en los momentos que importan. Es la configuración que mejor relación da entre lo que cuesta y lo que sirve.

## Cuántos días guardar

La pregunta correcta no es cuánto podemos guardar, es cuánto tarda en aparecer el problema.

Un robo en un depósito se detecta cuando alguien hace inventario, y eso puede ser dos semanas después. Un faltante sistemático de bajo monto puede tardar dos meses en notarse. Un reclamo laboral por un accidente puede llegar bastante más tarde. Un incidente de seguridad física se detecta en horas.

De ahí sale la retención, no de un número redondo. En la práctica los rangos habituales son de quince a treinta días para seguridad general, de sesenta a noventa cuando hay procesos de auditoría o control de mermas, y períodos más largos y selectivos cuando hay marco regulatorio o contractual que lo exige.

Y conviene separar los flujos. La grabación general con su retención estándar, y aparte un archivo de eventos marcados, que ocupa poquísimo y se guarda mucho más tiempo. Guardar todo mucho tiempo es caro. Guardar lo que importa mucho tiempo es barato.

## RAID no es backup

Confusión frecuente y cara. Un arreglo RAID protege contra la falla de un disco, y eso es valioso porque en un sistema con doce discos girando las veinticuatro horas, alguno va a fallar. Pero no protege contra borrado accidental, contra corrupción de la base de datos del sistema, contra ransomware ni contra que alguien se lleve el equipo.

Si el video tiene valor probatorio, la protección real es una copia del material relevante en otro lado. No de todo el archivo, que sería carísimo, sino de los eventos exportados y marcados. Es una política de dos niveles, el arreglo protege la operación diaria, la copia externa protege lo que no podés perder.

Y en sistemas donde el video es crítico, la plataforma puede grabar en dos destinos simultáneos o conmutar automáticamente si el destino primario falla. Eso lo resuelve la capa de gestión, y es uno de los criterios que separan a un grabador de una plataforma completa, algo que comparamos en detalle en [NVR y VMS](/nvr-vs-vms/).

## Los discos no son todos iguales

Un disco de escritorio está diseñado para escritura intermitente. Un sistema de videovigilancia escribe de forma continua, sin pausa, todo el día, todos los días. Es un perfil de carga completamente distinto.

Los discos específicos para videovigilancia están construidos para eso, con tolerancia a vibración cuando hay muchas unidades juntas y firmware optimizado para escritura secuencial sostenida. Usar discos comunes para ahorrar en la compra inicial se paga en fallas prematuras y en las horas de reconstrucción del arreglo cada vez que hay que reemplazar uno.

El mismo criterio de ciclo de vida que aplica a las cámaras aplica acá, y lo desarrollamos en [cuánto dura una cámara IP](/vida-util-camara-ip/).

## Almacenamiento en el borde

Grabar en la tarjeta de memoria de la cámara resuelve dos escenarios bien concretos. Las ubicaciones sin enlace estable, donde la cámara graba local y sincroniza cuando puede. Y la contingencia, donde la cámara sigue grabando aunque se caiga la red o el servidor, y después completa los huecos.

No reemplaza al almacenamiento central en un sistema corporativo, pero como capa de respaldo cambia bastante el perfil de riesgo, sobre todo en sedes remotas.

## El margen que nadie deja

Dos errores finales que conviene evitar.

El primero es dimensionar al límite exacto. Un sistema que llena el disco al noventa y ocho por ciento no tiene lugar para exportar, para retener un evento importante más tiempo ni para sumar dos cámaras el mes que viene. Conviene calcular con margen sobre el escenario a tres años, igual que se hace con el resto de la arquitectura, algo que planteamos en [cómo dimensionar un sistema de videovigilancia corporativo](/como-dimensionar-sistema-videovigilancia/).

El segundo es no medir después. El bitrate real de cada cámara se conoce recién con el sistema andando. Vale la pena revisar el consumo por cámara a las dos semanas de puesta en marcha, identificar las tres o cuatro que se disparan y ajustarlas. Es media hora de trabajo que suele recuperar bastante capacidad.

## Dónde vive el almacenamiento

Un arreglo de discos escribiendo sin pausa genera calor y no tolera bien la temperatura alta ni los cortes de energía. Un servidor de grabación en un armario de oficina, sin ventilación y sin respaldo eléctrico, tiene una expectativa de vida bastante menor a la de la garantía de sus componentes.

Y hay un punto que se piensa poco. Si el evento que necesitás reconstruir afectó al edificio, el equipo que guarda la prueba estuvo expuesto a lo mismo. Alojar la grabación en un ambiente con energía respaldada y refrigeración controlada es una decisión de arquitectura, no un lujo.

## Cuando el consumo depende del proceso

En operaciones donde el video cumple función de proceso, la retención no es uniforme. Las cámaras de línea de producción pueden necesitar noventa días durante una auditoría y quince el resto del año. Las de perímetro pueden necesitar alta calidad solo en horario nocturno. Una plataforma genérica obliga a configurar todo igual o a hacer malabares.

CamScope, la plataforma que desarrollamos en Building Networks a lo largo de diez años, permite definir políticas de grabación y retención por cámara, por franja horaria y por estado operativo, lo que en sistemas medianos y grandes se traduce directamente en menos almacenamiento para el mismo resultado. Lo desarrollamos en [la página de CamScope](/camscope/).

## Por dónde empezar

Si estás por dimensionar un sistema, pedí que el cálculo se haga cámara por cámara según la escena real, no con un promedio general. Si ya tenés uno andando y sospechás que la retención no se está cumpliendo, la verificación es directa, mirá cuál es la grabación más antigua disponible y compará con lo que se comprometió.

En Building Networks diseñamos, implementamos y mantenemos sistemas de videovigilancia corporativa e industrial desde hace más de veinte años, con AXIS como partner de hardware y plataforma propia cuando el proyecto lo justifica. El panorama completo está en nuestra guía de [videovigilancia corporativa](/videovigilancia-corporativa/).

Si tu sistema no está guardando lo que debería guardar, [conversemos](/contacto/).
