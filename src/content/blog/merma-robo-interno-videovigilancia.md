---
title: "Merma y robo interno, qué puede hacer el video y qué no"
description: "Por qué la merma interna no se detecta como una intrusión, cómo se cruza el video con los datos del sistema de gestión y qué límites hay que respetar."
heroImage: "/wp-content/uploads/2026/08/merma-robo-interno-videovigilancia.png"
pubDate: 2026-08-11
author: "Building Networks"
draft: false
---
## Lo que no se detecta mirando

Una intrusión es un evento. Alguien cruza una línea a una hora en la que no debería, y el sistema lo detecta porque hay un momento puntual donde algo ocurre.

La merma interna no funciona así. No hay un momento, hay un patrón. Un bulto de más en cada despacho de los martes. Una devolución que se registra y no vuelve al estante. Un conteo que cierra bien en el sistema y mal en el estante. Nada de eso dispara una alarma, porque desde el punto de vista del video no pasó nada raro. Alguien que trabaja ahí hizo algo que hace todos los días.

Por eso los sistemas que funcionan bien contra la intrusión no sirven contra la merma, y por eso el enfoque tiene que ser otro.

## Primero, el número

Antes de instalar nada conviene saber de qué se está hablando. Merma es la diferencia entre el stock que el sistema dice que hay y el que efectivamente hay, y esa diferencia tiene varias causas posibles. Error administrativo, rotura, vencimiento, error de picking, robo externo y robo interno.

El video no ataca todas por igual. Ataca bien los errores de proceso y el faltante en puntos de manipulación, y esos dos suelen explicar más merma que el robo deliberado. Empezar por asumir que todo es robo lleva a instalar mal y a generar un clima interno que cuesta caro.

## Los tres puntos donde se pierde

**Recepción.** Llega un camión con cuarenta bultos y el remito dice cuarenta y dos. O al revés. Sin registro visual del descargue, la discusión con el proveedor es palabra contra palabra, y en general se pierde.

**Preparación de pedidos.** Es donde más se pierde en depósitos, y casi nunca por robo. Un producto tomado del estante equivocado, un bulto de más en la caja, una unidad que se cae y nadie levanta. Todo eso es merma que la contabilidad registra como faltante.

**Despacho.** El punto más sensible, porque es la última oportunidad de detectar antes de que la mercadería salga. Un pallet cargado que no coincide con el remito sale por el portón y ya no vuelve.

En retail se agregan la caja y el sector de devoluciones. En planta, el sector de rezago y el de repuestos, que son los dos lugares donde el control formal suele ser más flojo.

## El cambio de enfoque, del video a los datos

Acá está la diferencia entre un sistema que sirve y uno que no.

Un sistema convencional pregunta si algo se movió en la imagen. Un sistema útil contra la merma pregunta si lo que pasó en la imagen coincide con lo que dice el sistema de gestión.

El evento no se dispara desde la cámara, se dispara desde el dato. Se registró una salida de stock, entonces el sistema marca ese instante en la cámara del muelle. Se anuló una operación de caja, entonces queda la imagen del momento de la anulación. Se hizo un ajuste manual de inventario, queda registrado quién lo hizo y qué mostraba la cámara del sector.

Eso convierte el archivo de video en algo consultable. En lugar de revisar horas de grabación buscando algo raro, se abre la lista de operaciones sospechosas del período y cada una viene con su imagen asociada. La búsqueda deja de ser por hora y pasa a ser por evento, que es la misma lógica que aplica en [integración con control de accesos y audio IP](/integracion-control-accesos-audio-ip/).

Para que esto funcione hacen falta dos cosas. Que la plataforma de video pueda recibir eventos externos, y que los relojes de todos los sistemas estén sincronizados contra el mismo servidor NTP. Si el sistema de gestión y el de video difieren en cuarenta segundos, la imagen que se asocia a la operación no es la de la operación.

## Qué analítica sirve acá

No es la misma que se usa en perímetro. Las reglas que rinden en este escenario son otras.

**Permanencia en zona.** Una persona que está más tiempo del habitual en un sector de alto valor, o que entra fuera de la franja en que su tarea lo justifica.

**Conteo en puntos de paso.** Cantidad de bultos que cruzan el muelle en una operación, contrastable con lo declarado.

**Actividad fuera de horario.** Movimiento en depósito cuando el turno cerró. Es la regla más simple y una de las más efectivas.

**Detección de vehículos en muelle.** Cuánto tiempo estuvo cada uno, cuándo empezó y terminó la carga, si coincide con lo registrado.

El detalle de cómo funciona esta capa está en [analítica de video con inteligencia artificial](/analitica-de-video-con-ia/).

## La retención, que acá define todo

Este es el punto que decide si el sistema sirve o no, y es el que peor se dimensiona.

Una intrusión se detecta en horas. Una merma sistemática de bajo monto puede tardar dos meses en aparecer en un inventario. Si el sistema retiene treinta días, el día que alguien detecta el desvío el video del período relevante ya se sobrescribió.

Para este caso de uso la retención tiene que cubrir el ciclo de detección real, que suele ser el ciclo de inventario. Y como retener todo mucho tiempo es caro, la salida es de dos niveles, grabación general con retención estándar y archivo separado de las cámaras críticas de recepción, picking y despacho con retención larga. El cálculo está en [almacenamiento de video](/almacenamiento-videovigilancia/).

## Los límites, que no son opcionales

Un sistema de video que apunta a los propios empleados toca una zona sensible, legal y humana. Conviene tener esto resuelto antes de instalar, no después de un conflicto.

**Se informa.** El personal tiene que saber que hay cámaras, dónde están y para qué se usan. Cartelería visible y comunicación explícita. Un sistema oculto no solo es problemático legalmente, además pierde el efecto disuasivo, que es la mayor parte del valor.

**Zonas excluidas.** Vestuarios, baños y comedores no se filman. No hay matiz.

**Finalidad acotada.** El sistema se instala para control de proceso y protección patrimonial. Usarlo para medir productividad individual, controlar pausas o vigilar a una persona en particular lo desnaturaliza, y en la práctica destruye la aceptación que hace que el sistema funcione.

**Acceso restringido y trazable.** Quién puede ver, qué puede ver y qué queda registrado de cada consulta. Si todo el mundo tiene el usuario, el material no sirve como respaldo de nada.

Vale decirlo claro, un sistema bien comunicado previene mucho más de lo que detecta. La mayor parte del efecto ocurre antes, no después.

## Lo que se descubre y no se buscaba

En la práctica, la mayoría de las empresas que instalan esto buscando robo terminan encontrando otra cosa. Procesos mal diseñados, un paso que genera errores sistemáticos, un sector donde falta espacio y por eso se apilan mal las cosas, un turno que quedó sin la capacitación que sí recibió el otro.

Eso suele valer más que el robo que se buscaba, porque se corrige y deja de costar plata todos los meses. Es la puerta de entrada al uso del video como herramienta de auditoría de procesos, que es un terreno distinto y bastante más productivo.

Sobre la protección patrimonial en el sentido más clásico, perímetro e intrusión, lo desarrollamos en [prevención de robos en fábricas](/como-evitar-robos-con-videovigilancia-en-fabricas/) y en [videovigilancia industrial](/videovigilancia-industrial/).

## Cuando el sistema tiene que hablar con el ERP

Todo esto depende de que el video reciba eventos del sistema de gestión, y ahí es donde las plataformas de catálogo se quedan cortas. Suelen integrar con lo que su fabricante previó, y el sistema de gestión de una empresa mediana argentina rara vez está en esa lista.

CamScope, la plataforma que desarrollamos en Building Networks a lo largo de diez años, se construye sobre los sistemas que la empresa ya usa, así que la correlación entre operación registrada e imagen se arma sobre el proceso real y no sobre un catálogo de integraciones cerrado. Lo desarrollamos en [la página de CamScope](/camscope/).

## Por dónde empezar

Tres pasos antes de comprar nada.

Cuantificá la merma y separala por causa probable. Si no sabés cuánto perdés ni dónde, cualquier inversión es a ciegas.

Identificá los tres o cuatro puntos de manipulación donde se concentra el riesgo. Casi siempre son menos de los que parecen.

Y definí el ciclo de detección, cada cuánto hacés inventario. Ese número, no otro, es el que fija la retención del sistema.

En Building Networks diseñamos sistemas de videovigilancia integrados a la operación desde hace más de veinte años, con AXIS como partner de hardware y plataforma propia cuando el proyecto lo justifica. El panorama completo está en nuestra guía de [videovigilancia corporativa](/videovigilancia-corporativa/).

Si tenés una merma que no cierra y no sabés dónde se pierde, [conversemos](/contacto/).
