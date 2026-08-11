---
title: "Cuánto dura una cámara IP y cuándo conviene reemplazarla"
description: "Vida útil real de una cámara IP, qué la acorta, las señales de reemplazo y cómo planificar el recambio sin rehacer todo el sistema de golpe."
heroImage: "/wp-content/uploads/2024/10/PORTADA-SEGURIDAD-PERIMETROS-100.jpg"
pubDate: 2026-08-06
author: "Building Networks"
draft: false
---
## Una cámara casi nunca se muere, deja de servir

La pregunta suele llegar planteada como un problema de falla. Se rompió una cámara, hay que ver si conviene repararla o cambiarla. Pero en la práctica, la mayoría de las cámaras IP que se reemplazan en un sistema corporativo todavía están encendidas y transmitiendo imagen el día que salen de servicio.

Lo que se agotó no fue el equipo, fue su utilidad. La cámara sigue funcionando exactamente igual que el día uno, y el problema es que el día uno fue hace ocho años. Cambió lo que se le pide, cambió el riesgo de seguridad que arrastra y cambió lo que el resto del sistema puede hacer si ella no acompaña.

Entender esa diferencia cambia por completo la planificación del recambio, y es la diferencia entre presupuestar por emergencia y presupuestar por ciclo.

## La vida útil real, componente por componente

No existe una cifra única. Una cámara IP es un conjunto de piezas con curvas de desgaste distintas, y la que falla primero define el resto.

**Sensor de imagen.** Es lo más duradero del equipo. Un sensor bien alimentado y sin exposición directa a sol permanente puede superar los diez años sin degradación perceptible. Salvo golpe o sobretensión, rara vez es la causa del reemplazo.

**Óptica.** El lente en sí dura, pero el sellado no. En exterior el punto crítico es la junta, cuando pierde estanqueidad entra humedad y aparece condensación interna. Se ve como una imagen velada que empeora con el frío de la mañana y mejora al mediodía. Es una falla progresiva, no repentina.

**Filtro IR mecánico.** Es la pieza que se mueve todos los días. El filtro corta el infrarrojo de día y se retira de noche, lo que significa dos ciclos diarios durante años. Cuando falla, la cámara queda con dominante rosada de día o pierde sensibilidad de noche. Es una de las causas de reemplazo más frecuentes en cámaras de exterior.

**Iluminadores infrarrojos.** Los LED pierden intensidad de forma gradual. A los cinco o seis años de uso nocturno intensivo, el alcance efectivo puede haber caído a la mitad del original. Nadie lo nota porque la degradación es lenta, hasta que se necesita reconstruir un evento nocturno y la imagen no da.

**Mecánica de domos PTZ.** Los motores y engranajes de una cámara con movimiento tienen un límite de ciclos concreto. Si el domo está en patrulla continua, ese límite llega mucho antes que en una cámara fija. Es el tipo de equipo que sí conviene mantener bajo contrato de servicio.

**Fuente y electrónica de alimentación.** Los capacitores de la etapa de alimentación son sensibles al calor. En gabinetes sin ventilación, en techos de nave industrial o en columnas expuestas al sol, esta es la causa número uno de muerte prematura.

Como referencia práctica, una cámara fija de interior en ambiente controlado rinde entre ocho y diez años. La misma cámara en exterior industrial rinde entre cuatro y seis. Un domo PTZ en patrulla continua, entre tres y cinco.

## Qué dice el MTBF y qué no dice

Las fichas técnicas suelen publicar un MTBF, que es el tiempo medio entre fallas expresado en horas. Ver cifras de cien mil horas o más es habitual, y traducido a años parece que la cámara va a durar una década larga.

El dato es real pero se lee mal. El MTBF es una medida estadística sobre una población grande de equipos en condiciones controladas de laboratorio, no una promesa de duración de tu unidad. Sirve para comparar dos modelos entre sí, no para planificar el recambio de tu parque. La planificación se hace sobre condiciones de instalación reales, que es lo que efectivamente determina el desgaste.

## Un dato propio, diez años en Capitalinas

En el complejo Capitalinas, donde operamos el data center desde 2008, hubo cámaras AXIS que estuvieron diez años en servicio y salieron por decisión de proyecto, no por falla. El día que se reemplazaron seguían funcionando.

Ese número no es lo habitual y conviene leer por qué pasó. Equipo de línea profesional, instalación correcta, alimentación estable, gabinete adecuado al ambiente y firmware al día durante todo el ciclo. La calidad del hardware puso el piso, las condiciones de instalación pusieron el resto. Ninguna de las dos cosas alcanza sola.

Ahí aparece el argumento que suele perderse cuando se comparan presupuestos. Enfrentando precios de compra, la diferencia entre una línea profesional y una gama media es difícil de justificar ante quien firma. Enfrentando el costo del ciclo completo, la cuenta se da vuelta, porque el equipo más barato se vuelve a pagar en cada recambio anticipado, y cada recambio arrastra mano de obra, alquiler de plataforma elevadora, reconfiguración y horas del sistema degradado. El precio de la cámara es la parte chica del costo de cambiar una cámara.

## Lo que acorta la vida útil

Los factores que más pesan son de instalación, no de fabricación.

**Calor acumulado.** Un gabinete cerrado sin disipación puede sumar quince o veinte grados sobre la temperatura ambiente. En un galpón de Córdoba en enero, eso pone a la electrónica bien arriba de su rango de diseño durante meses.

**Alimentación inestable.** PoE por switches sobrecargados, cables de sección insuficiente en tiradas largas o inyectores de calidad dudosa generan caídas de tensión que la cámara compensa hasta que no puede. Un presupuesto PoE mal calculado no se manifiesta como falla inmediata sino como reinicios esporádicos que después se convierten en muerte del equipo.

**Ambiente agresivo.** Polvo en cementeras y molinos, vapores en plantas de alimentos, salinidad en zonas costeras, vibración en líneas de producción. Cada uno ataca una parte distinta, y todos acortan el ciclo.

**Descargas atmosféricas.** En instalaciones perimetrales y en columnas, la protección contra sobretensiones no es opcional. Una tormenta puede llevarse ocho cámaras de un perímetro en un solo evento si el sistema no tiene supresores en cada tramo.

## Las cinco señales de que llegó el momento

### 1. El fabricante dejó de publicar firmware

Esta es la más importante y la que menos se mira. Una cámara sin actualizaciones de firmware es un equipo con vulnerabilidades conocidas y sin parche, conectado a tu red. No es un problema de imagen, es un problema de seguridad informática.

Las cámaras son uno de los vectores de entrada más usados en redes corporativas, justamente porque nadie las trata como lo que son, computadoras con sistema operativo. Si el modelo está fuera de soporte, el reemplazo dejó de ser una decisión de calidad de imagen. Mientras tanto, mantené el tráfico de video en VLAN separada, que es la mitigación mínima que corresponde en cualquier caso.

### 2. Ya no cumple el objetivo para el que está

Una cámara que se instaló para ver movimiento en un pasillo puede no servir para identificar a una persona. Si el objetivo cambió, por ejemplo porque ahora se necesita leer una patente o reconocer un rostro, la resolución y el WDR que alcanzaban antes no alcanzan más. El WDR, que es el rango dinámico de la cámara, define si podés ver algo en un portón a contraluz o si te queda una silueta negra. Esto se define en el dimensionamiento, y lo desarrollamos en la nota sobre [cómo dimensionar un sistema de videovigilancia corporativo](/como-dimensionar-sistema-videovigilancia/).

### 3. No puede correr analítica

Las cámaras de generación anterior no tienen capacidad de procesamiento a bordo. Si el plan es incorporar detección de intrusión, conteo o clasificación de objetos en el borde, hay equipos del parque que directamente no van a poder participar. Lo tratamos en detalle en [analítica de video con inteligencia artificial](/analitica-de-video-con-ia/).

### 4. El costo de mantenerla superó el de cambiarla

Es una cuenta que conviene hacer explícita. Si un equipo requiere dos visitas técnicas por año, cada visita implica alquiler de plataforma elevadora para llegar a diez metros de altura y el modelo ya no tiene repuestos originales, el reemplazo se pagó solo.

### 5. Cambió el entorno

Se construyó una nave que tapa el campo de visión, se movió el portón de ingreso, cambió el layout de la planta. La cámara está impecable y apunta a un lugar que ya no importa. Acá el reemplazo puede ser reubicación, que es bastante más barato.

## El error de reemplazar de a una

Cuando el recambio se maneja por falla, el parque termina con seis generaciones distintas conviviendo. Eso trae tres consecuencias concretas.

La primera es operativa, cada modelo tiene su interfaz de configuración, su ciclo de firmware y su comportamiento. La segunda es funcional, la analítica que corre en las cámaras nuevas no corre en las viejas, así que las reglas se aplican a medias y la confianza en el sistema se cae. La tercera es de imagen, con exposición y color desparejos entre cámaras, reconstruir un recorrido completo en el visor se vuelve incómodo.

La alternativa es el recambio por zona. Se define un ciclo de vida por tipo de instalación, cinco años en exterior industrial, ocho en interior controlado, y se renueva por sector completo. Presupuestariamente es predecible, y técnicamente mantiene coherencia.

## Qué se conserva cuando se renueva

Buena noticia para el presupuesto, la cámara es la parte más barata del sistema. El cableado estructurado, los gabinetes, los soportes, los ductos y la canalización sobreviven varios ciclos de cámara. Si el cableado se hizo bien la primera vez, un recambio de cincuenta cámaras es un trabajo de un par de días.

Los switches PoE sí conviene revisarlos, porque las cámaras nuevas con calefactor, iluminador y procesamiento a bordo consumen más que las que reemplazan. Un presupuesto PoE que alcanzaba justo con el parque viejo se queda corto con el nuevo, y el síntoma son reinicios aleatorios que parecen falla de cámara.

## La plataforma también define el ciclo

Hay una decisión previa que condiciona todo esto. Si la plataforma de grabación solo trabaja con un fabricante, el día que ese fabricante discontinúa la línea quedás obligado a migrar hardware y software juntos. Si la plataforma soporta protocolos abiertos, podés renovar cámaras por etapas, mezclar marcas y estirar la inversión en el resto de la infraestructura. Es uno de los criterios que pesan al elegir entre [NVR y VMS](/nvr-vs-vms/).

CamScope, la plataforma que desarrollamos en Building Networks durante diez años, está construida sobre ese principio. No ata al cliente a un parque de hardware específico ni a un esquema de licenciamiento por canal, así que el recambio de cámaras se planifica según la operación y no según el calendario comercial del fabricante.

## Cómo armar una política de recambio

Tres pasos concretos que podés hacer este mes.

Primero, inventario con fecha de instalación, modelo y estado de soporte de firmware de cada equipo. Sin eso no hay planificación posible, solo reacción.

Segundo, clasificación por criticidad. Qué cámaras cubren un punto donde no podés quedarte sin imagen y cuáles son complementarias. El recambio empieza por las primeras.

Tercero, ciclo asignado por condición de instalación, no por modelo. La misma cámara en una oficina y en un perímetro industrial tiene dos vidas útiles distintas, y planificarlas igual garantiza que una se cambie de más y la otra se caiga sola.

En Building Networks diseñamos, implementamos y mantenemos sistemas de videovigilancia corporativa e industrial desde hace más de veinte años, con AXIS como partner de hardware y plataforma propia cuando el proyecto lo justifica. El panorama completo está en nuestra guía de [videovigilancia corporativa](/videovigilancia-corporativa/).

Si querés saber en qué estado está tu parque de cámaras y qué conviene renovar primero, [conversemos](/contacto/).
