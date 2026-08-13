---
title: "Wifi corporativo: cómo diseñar cobertura sin puntos ciegos"
description: "El wifi corporativo se suele pensar mal desde el principio. La empresa compra un router, funciona los primeros meses, aparecen zonas donde no llega, se suma un extensor…"
heroImage: "/wp-content/uploads/2026/07/bloom-53358ccb-d050-4b85-8f9e-e79bb1385dcf.jpg"
pubDate: 2026-07-13
author: "Building Networks"
draft: false
---
El wifi corporativo se suele pensar mal desde el principio. La empresa compra un router, funciona los primeros meses, aparecen zonas donde no llega, se suma un extensor, después otro, y el mapa de cobertura termina siendo un zurcido de parches. Cuando alguien se queja de que "el wifi anda mal", el reflejo es sumar equipos. Y el equipo nuevo, al principio, mejora algo. Después vuelve a molestar.

El problema rara vez es el hardware. Es que nadie diseñó la red inalámbrica antes de instalarla. En una [infraestructura de red bien pensada](/que-es-una-red-convergente-y-por-que-es-esencial-hoy-en-dia/), el wifi es una capa transparente sobre la que todo lo demás funciona. En una infraestructura sin diseño previo, el wifi es una fuente de tickets constante.

## Wifi doméstico y wifi corporativo no son lo mismo

La confusión más común arranca en el equipamiento. Un router doméstico de gama alta puede soportar entre 15 y 25 dispositivos conectados con buen rendimiento. Un access point corporativo soporta entre 60 y 100 en el mismo espacio, y lo hace sin que la latencia se dispare cuando alguien empieza una videollamada. La diferencia no está solo en la potencia de transmisión, está en cómo cada equipo maneja la concurrencia.

El wifi corporativo tiene otras exigencias que el doméstico no considera. Necesita segmentación de tráfico por VLAN para separar la red interna, la red de invitados y los dispositivos IoT. Necesita autenticación centralizada, típicamente con RADIUS y credenciales por usuario, no una clave compartida. Necesita gestión de roaming, para que el dispositivo que camina por la oficina cambie de access point sin cortes. Y necesita capacidad de monitoreo, porque un problema de wifi que no se puede diagnosticar es un problema que se resuelve por prueba y error.

Pretender que un router doméstico reemplaza a un sistema corporativo bien diseñado es una decisión que se paga en tickets, en horas de operación perdidas, y en el costo acumulado de mantener algo que nunca fue pensado para el uso que se le da.

## Qué se decide antes de comprar el primer access point

La decisión técnica más importante en wifi corporativo es la que se toma antes de comprar el primer equipo. Un buen diseño arranca con un site survey, no con un catálogo.

### Site survey pasivo y activo

Un site survey pasivo mide qué señales existen hoy en el espacio: ruido de fondo, interferencia de otras redes, ocupación de canales, obstáculos físicos. Un site survey activo simula el comportamiento real de dispositivos moviéndose por el espacio, para ver dónde el rendimiento cae aunque haya señal. Los dos son complementarios y ninguno es opcional en corporativo.

Sin site survey, la ubicación de los access points se define por lo que "parece razonable" en el plano. En obra terminada, esa lógica lleva a APs colocados donde el cableado ya llegaba, no donde la cobertura los necesita.

### Densidad de usuarios versus superficie

La regla de "un access point cada 100 metros cuadrados" es una simplificación peligrosa. En una sala de reuniones de 40 metros cuadrados con 20 personas conectadas simultáneamente, un solo AP puede saturarse. En un depósito de 500 metros cuadrados con tres cámaras IP y cuatro handhelds, dos APs bien ubicados alcanzan.

Lo que se dimensiona no es superficie, es densidad de dispositivos. Y no cualquier dispositivo: los que exigen ancho de banda constante (videollamada, streaming, VoIP) pesan mucho más que los que hacen consultas puntuales (una impresora de red, un lector de códigos).

### Bandas 2.4 GHz, 5 GHz y 6 GHz

Cada banda tiene su rol. La 2.4 GHz penetra mejor las paredes y llega más lejos, pero tiene solo tres canales sin superposición (1, 6 y 11) y está saturada de interferencias porque todo la usa: bluetooth, microondas, IoT viejo. La 5 GHz tiene decenas de canales, mucho mejor performance, pero cobertura menor y no atraviesa bien mampostería pesada. La 6 GHz (wifi 6E) tiene el espectro más limpio y las mayores velocidades, pero requiere dispositivos compatibles que todavía no son mayoría.

La decisión no es "cuál usar". Es cómo distribuir el tráfico entre las tres, dejando 2.4 GHz para IoT y dispositivos legacy, 5 GHz para la operación general, y 6 GHz para los dispositivos exigentes cuando existen.

### PoE y la capa de energía

Los access points corporativos se alimentan por Power over Ethernet, es decir, por el mismo cable UTP que les da datos. Esto simplifica la instalación (no hay que llevar 220V a cada punto) pero implica que la elección del switch importa tanto como la del AP. Un AP con radios de alta densidad puede consumir 25 a 30 watts. Si el switch entrega PoE estándar (15.4W por puerto), el AP funciona degradado. Si entrega PoE+ (30W), funciona bien. Para APs wifi 6/6E de alta gama conviene PoE++ (60W+).

Este detalle se pasa por alto seguido. Se compra el mejor AP del catálogo y se conecta a un switch que le da la mitad de la energía que necesita, y después nadie entiende por qué el rendimiento no es el que promete la ficha técnica.

## Los puntos ciegos no son un problema de señal

Cuando un usuario reporta "acá no llega el wifi", la mayoría de las veces la señal está. El problema es otro.

El más común es congestión de canal. Si dos APs cercanos están en canales que se superponen, se pisan mutuamente. El dispositivo ve señal, pero el throughput real cae a niveles inservibles. Esto se resuelve con planificación de canales (channel planning) o con controllers que ajustan automáticamente.

El segundo es problema de roaming. Un dispositivo que se aleja de un AP no siempre "salta" al siguiente en el momento adecuado. Se aferra al AP con señal débil, y la conexión se degrada aunque haya un AP mejor cerca. Los estándares 802.11k, 802.11v y 802.11r resuelven esto (asisten al dispositivo en la decisión de roaming), pero requieren que tanto el AP como el dispositivo los soporten. En una red bien diseñada, el usuario camina de una punta a la otra de la oficina sin cortarse la videollamada. En una red mal diseñada, camina hasta la puerta y ya perdió la reunión.

El tercero es interferencia externa. Otra red wifi vecina, un horno microondas industrial, una cámara IP mal apantallada. Esto solo se detecta con un site survey pasivo bien hecho, no con la app del celular.

Los tres problemas se ven idénticos desde afuera: "el wifi no anda". Pero se resuelven distinto. Y ninguno se resuelve sumando más APs.

## Segmentación de red inalámbrica

Una empresa moderna no tiene una wifi, tiene varias. Wifi corporativa para empleados, wifi de invitados para visitas, wifi para IoT (cámaras, sensores, controles de acceso), y a veces wifi específica para operación (handhelds de depósito, tablets industriales).

Estas redes conviven sobre el mismo hardware pero se segmentan lógicamente con VLAN y SSID separados. Cada una con su política de acceso, su ancho de banda máximo, su nivel de aislamiento. La wifi de invitados no debe poder ver a la wifi corporativa. La wifi de IoT no debe salir a Internet libremente. La wifi de handhelds industriales tiene que tener prioridad de tráfico sobre la de invitados.

"Una sola wifi para todos" es la configuración más común y la más peligrosa. Cualquier dispositivo comprometido en la red de invitados (una laptop de visita con malware, un celular hackeado) tiene acceso al resto. Y cualquier congestión en una capa afecta a todas las demás. Segmentar bien es más trabajo al principio, pero es lo que evita que la red termine siendo un cuello de botella y una vulnerabilidad al mismo tiempo.

## Controllers y gestión centralizada

La diferencia entre cinco access points independientes y cinco access points bajo un controller es tan grande que conviene entenderla antes de comprar.

APs independientes: cada uno se configura por separado, cada uno decide su canal, su potencia, sus políticas. Roaming es problemático porque los APs no se hablan entre sí. Cuando hay que hacer un cambio, se hace en cada equipo uno por uno. Cuando algo falla, hay que ir a cada AP a diagnosticar.

APs bajo controller: hay una consola central (física o cloud) que ve todos los APs como un solo sistema. El controller ajusta automáticamente canales y potencias para minimizar interferencias, coordina roaming entre APs, aplica políticas de seguridad y QoS de manera uniforme, actualiza firmware de forma coordinada, y da visibilidad de todo el tráfico en un solo tablero.

La regla práctica: a partir de 4 a 6 access points, la gestión sin controller se vuelve costosa. A partir de 10, es directamente inviable operar bien. En Building Networks trabajamos con Cambium Networks como partner en la capa inalámbrica, y su plataforma cnMaestro es un ejemplo de controller cloud que da gestión centralizada sin necesidad de hardware dedicado en la sede. Esto se traduce en menos horas de operación y en respuesta más rápida cuando algo falla.

## Cuándo llamar a un especialista

Hay señales bastante claras de que el wifi actual no se resuelve con más equipos:

- Se cae o se degrada sistemáticamente en horarios pico (mañana temprano, después del almuerzo).

- Los dispositivos "saltan" entre APs de forma errática o se quedan pegados al AP incorrecto.

- Hay zonas con señal buena en el celular pero conexión lenta al probar velocidad.

- Las videollamadas se cortan siempre en las mismas salas o pasillos.

- Cada vez que se suma un dispositivo nuevo, algo se rompe en otro lado.

- Se sumaron extensores o mesh domésticos para tapar zonas sin cobertura.

Cuando aparecen dos o más de estas señales, el problema ya no es un equipo. Es el diseño de fondo. Y como con cualquier [ampliación de infraestructura](/cuando-ampliar-la-infraestructura-de-red-de-tu-empresa/), conviene resolverlo con criterio antes de que se convierta en un problema mayor.

Un caso frecuente: la empresa que [se muda a una sede nueva](/mudanza-e-infraestructura-de-red/) y replica el esquema de wifi que traía. Sede vieja tenía cuatro puntos de acceso, la sede nueva tiene cuatro puntos de acceso, aunque el layout, la ocupación y las paredes sean completamente distintos. El día uno el wifi funciona. El día 60 empiezan los tickets. Es exactamente el momento en que un site survey previo hubiera evitado todo. Lo mismo pasa cuando se hace una obra sin proyectar la red inalámbrica: los APs terminan colocados donde se pudo pasar cable, no donde tenían que ir. Los [problemas de wifi se decide en el plano](/cuando-infraestructura-de-red-se-decide-en-el-plano/), no después.

## El wifi que no se nota

El mejor wifi corporativo es el que nadie menciona. La gente camina por la oficina, hace videollamadas, mueve archivos pesados, y la red simplemente responde. Cuando el wifi está bien diseñado, es invisible. Cuando no lo está, es lo primero que la empresa aprende a aguantar.

La diferencia entre las dos situaciones no está en la marca del equipo. Está en si alguien se tomó el trabajo de diseñar la red antes de instalarla. Es la misma diferencia que hace que una red funcione todo el tiempo, no casi siempre.

Si en tu empresa el wifi se convirtió en un problema recurrente, o si estás por mudarte o ampliar la sede, es el momento de revisarlo con criterio técnico. Conversemos sobre tu caso y evaluemos qué necesita tu infraestructura inalámbrica hoy y cuál va a ser el escenario cuando la empresa siga creciendo.

[Conversemos](/contacto/)
