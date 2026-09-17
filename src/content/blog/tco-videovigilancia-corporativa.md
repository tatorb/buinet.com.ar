---
title: "TCO en videovigilancia corporativa, el costo que no entra en el presupuesto inicial"
description: "El precio de una cámara es la parte más chica del costo a cinco años. Qué incluye el TCO real de un sistema de video corporativo y cómo presentarle ese argumento al directivo que aprueba el presupuesto."
heroImage: "/img/tco-videovigilancia-corporativa.jpg"
pubDate: 2026-09-17
author: "Building Networks"
draft: false
# ENLACE PENDIENTE
# En el bloque "El costo de ampliación", la frase final dice
#   "Lo analizamos en ampliar videovigilancia sin rehacer el sistema."
# Ese texto tiene que volver a ser un enlace a /ampliacion-sistema-videovigilancia/
# cuando esa nota se publique. Hoy quedó como texto plano porque el destino no
# existe y habría sido un enlace roto.
# El comentario va acá y no en el cuerpo: un comentario HTML dentro del
# Markdown se publica en el HTML final y queda a la vista en el código fuente.
---
## Dos propuestas que se parecen en el papel. En cinco años no se parecen en nada.

Cuando una empresa pide presupuestos para un sistema de videovigilancia, las propuestas que llegan suelen tener el mismo formato. Lista de equipos, cantidad de cámaras, modelo de grabador, metros de cable, mano de obra. Un número final.

Ese número no dice nada sobre lo que va a costar ese sistema en el año tres. No dice si el hardware va a tener parches de seguridad disponibles. No dice quién actualiza el firmware y con qué frecuencia. No dice si las licencias se pagan por cámara o por sistema. No dice cuánto cuesta agregar diez cámaras cuando la operación crece.

El TCO, costo total de propiedad, es el número que sí dice todo eso. Y casi ninguna propuesta lo incluye.

## Qué compone el TCO real de un sistema de video

**El hardware inicial.** Es el único rubro que aparece en todas las propuestas. Cámaras, grabadores o servidores, switches PoE, cableado. Es también el rubro que menos varía entre propuestas de distinto nivel de calidad, porque la diferencia de precio entre un hardware con LTS documentado y uno sin él es mucho menor de lo que parece en el presupuesto.

**El licenciamiento.** Algunos sistemas cobran licencia por canal, es decir por cámara. En una instalación de veinte cámaras eso es un detalle. En una que va a crecer a doscientas, es el rubro más pesado del TCO y crece con cada ampliación. CamScope no aplica licenciamiento por canal, lo que cambia la ecuación completamente en instalaciones que escalan.

**El mantenimiento y las actualizaciones.** Quién actualiza el firmware, con qué frecuencia y a qué costo. Si la gestión de actualizaciones es manual, tiene costo de horas de alguien que lo hace. Si es centralizada, ese costo desaparece o se reduce a una fracción. Ignorar este rubro es asumir que el sistema se va a mantener solo, que no ocurre nunca.

**El costo de un incidente de seguridad.** Si el sistema tiene dispositivos con firmware desactualizado y eso genera una brecha, el costo incluye investigación forense, remediación, potencial responsabilidad legal si hay datos de terceros comprometidos y reputación. Es el rubro más difícil de cuantificar y el más fácil de ignorar en el presupuesto inicial. Lo trabajamos en [ciberseguridad en sistemas de video IP](/ciberseguridad-sistemas-video-ip/).

**El costo de ampliación.** Cuánto cuesta agregar cámaras a medida que la operación crece. Si el sistema tiene licenciamiento por canal, cada cámara nueva paga software. Si el grabador está al límite de canales, hay que sumar otro grabador. Si la red no estaba dimensionada para crecer, hay que rehacerla. Todos esos costos existen aunque no aparezcan en la propuesta original. Lo analizamos en ampliar videovigilancia sin rehacer el sistema.

**El recambio anticipado.** Si el hardware sale del soporte del fabricante antes del final de su vida útil física, el cliente enfrenta una decisión, seguir operando con dispositivos vulnerables o reemplazar antes de lo planeado. Ese recambio anticipado es un costo que no estaba en el presupuesto original. La diferencia entre un hardware con LTS de cinco años y uno sin soporte documentado puede representar exactamente ese costo. Lo explicamos en [long term support en cámaras IP](/long-term-support-camaras-ip/).

## Cómo presentarle el TCO al directivo que aprueba el presupuesto

El TCO es un argumento técnico que tiene que traducirse a términos financieros para que tenga peso en la decisión de compra.

La forma más directa es la comparación a cinco años. Tomar la propuesta más barata y la propuesta correcta, y proyectar los costos de cada una al año cinco incluyendo mantenimiento, actualizaciones, licencias de ampliación y probabilidad de recambio anticipado. En la mayoría de los casos, la propuesta más barata es más cara a cinco años.

Esa comparación tiene que ser honesta. No inflar los costos de la opción barata ni minimizar los de la opción correcta. El argumento se sostiene con números reales, no con escenarios de catástrofe.

Un segundo argumento es el de la continuidad operativa. Un sistema de video que falla o que tiene una brecha de seguridad genera un costo operativo que tampoco aparece en el presupuesto, tiempo de personal para resolver el problema, potencial paralización de procesos que dependen del sistema, exposición legal. Ese costo es difícil de cuantificar pero es real y el directivo que lo vivió una vez lo entiende sin necesidad de más explicación.

## El TCO como criterio de evaluación de propuestas

Antes de aprobar una propuesta de videovigilancia, estas preguntas permiten estimar el TCO sin necesidad de un análisis financiero completo.

¿El hardware tiene LTS documentado y publicado por el fabricante? Si no, el recambio anticipado es probable.

¿El sistema cobra licencia por canal? Si sí, proyectá el costo de licencias sobre la cantidad de cámaras que vas a tener en cinco años, no la que tenés hoy.

¿Quién gestiona las actualizaciones de firmware y a qué costo? Si la respuesta es nadie o el cliente, ese costo existe aunque no esté presupuestado.

¿La propuesta incluye dimensionamiento de red para el crecimiento proyectado? Si no, la ampliación va a requerir rehacer parte de la infraestructura.

¿Qué pasa con el soporte técnico después de la garantía? Un sistema instalado y abandonado tiene costos de soporte que alguien va a pagar.

En Building Networks entregamos el análisis de TCO como parte de la propuesta. No porque sea un diferencial de venta, sino porque es la única forma de que el cliente tome una decisión informada. Si querés comparar lo que tenés o lo que te ofrecieron contra el TCO real, el punto de partida es una conversación. [Contactanos](/contacto/).
