---
title: "LPR y control de acceso vehicular, qué hace falta"
description: "Cómo funciona el reconocimiento de patentes, por qué una cámara común no sirve y qué condiciones definen si el sistema acierta o te hace perder tiempo."
heroImage: "/wp-content/uploads/2026/08/lpr-control-acceso-vehicular.png"
pubDate: 2026-08-11
author: "Building Networks"
draft: false
---
## El portón es el cuello de botella que nadie mide

En una planta con movimiento de camiones, el ingreso es el punto donde se pierde más tiempo y donde el registro es más flojo.

La secuencia habitual es esta. El camión llega, toca bocina, alguien sale de la garita, mira la patente, la busca en una planilla o llama por teléfono para confirmar, vuelve, abre. Entre tres y cinco minutos por vehículo. Con veinte movimientos diarios son más de una hora de espera acumulada, y el registro que queda es una anotación manual que nadie audita hasta que hay un problema.

El reconocimiento automático de patentes, LPR por sus siglas en inglés, resuelve eso. Pero funciona bien o funciona mal según decisiones que se toman en la instalación, no en la compra del software.

## Qué es y cómo funciona

Una cámara captura la imagen del vehículo, un motor de reconocimiento óptico extrae los caracteres de la patente y el sistema compara ese dato contra una lista. Si la patente está autorizada, se libera la barrera y queda registrado el evento con la imagen asociada. Si no está, se avisa a portería.

Descrito así parece trivial. Lo que no es trivial es lograr que la imagen sea legible en todas las condiciones en las que un vehículo puede llegar.

## Por qué una cámara común no alcanza

Este es el error más caro y el más frecuente. Se instala una cámara de propósito general apuntando al carril, se le agrega el software, y el sistema acierta el sesenta por ciento de las veces. Ese número es peor que no tener nada, porque obliga a intervención manual igual y encima genera desconfianza.

Una cámara para LPR resuelve un problema distinto al de una cámara de vigilancia. No tiene que mostrar la escena, tiene que congelar un objeto en movimiento con contraste suficiente para leer caracteres.

**Velocidad de obturación.** Tiene que ser lo bastante rápida como para que la patente no salga movida. Una cámara de vigilancia configurada para ver bien de noche usa obturaciones lentas, y con eso la patente de un vehículo en movimiento es una mancha.

**Iluminación infrarroja dedicada.** Las patentes son retrorreflectivas, devuelven la luz hacia la fuente. Con un iluminador IR alineado con la cámara, la patente aparece brillante y el resto de la escena oscuro, que es exactamente el contraste que el reconocimiento necesita. Sin eso, de noche no hay lectura confiable.

**Manejo del contraste extremo.** Un vehículo que entra a contraluz al atardecer, con los faros encendidos apuntando a la cámara, es el peor escenario posible. Se resuelve con WDR, que es el rango dinámico de la cámara, es decir su capacidad de manejar zonas muy claras y muy oscuras en el mismo cuadro.

En la práctica esto significa una cámara dedicada al carril, además de la cámara de vigilancia que muestra el contexto. Son dos equipos con dos funciones distintas, y querer ahorrarse uno es lo que hace fallar al sistema.

## La geometría, que es donde se define casi todo

**Ángulo.** El eje de la cámara respecto de la patente debe mantenerse acotado en horizontal y en vertical. Cuanto más oblicua la vista, más se deforman los caracteres y más cae la tasa de acierto. Una cámara montada muy alta para "ver mejor" suele empeorar la lectura.

**Distancia y encuadre.** La patente tiene que ocupar una cantidad mínima de píxeles de ancho para ser legible. Eso define la combinación de distancia, resolución y lente, y es un cálculo, no una estimación visual. Sobre el método completo trabajamos en [cómo dimensionar un sistema de videovigilancia corporativo](/como-dimensionar-sistema-videovigilancia/).

**Carril delimitado.** El sistema funciona mucho mejor cuando el vehículo pasa por un punto previsible. Islas, defensas o simplemente una marca en el piso mejoran la tasa de acierto más que cualquier ajuste de software.

**Velocidad de paso.** No es lo mismo un acceso con lomo de burro donde el camión llega casi detenido que un ingreso a cuarenta kilómetros por hora. Definir la velocidad esperada antes de elegir el equipo evita rehacer la instalación.

## Las listas, que es donde vive la lógica

**Lista blanca.** Vehículos autorizados con paso automático. Flota propia, proveedores habituales, empleados con estacionamiento asignado.

**Lista negra.** Vehículos con acceso bloqueado, que además pueden disparar un aviso al llegar.

**Vehículos no listados.** Es el caso más frecuente y el que hay que diseñar bien. Un proveedor nuevo, un flete, una visita. Acá el sistema no decide, avisa. Lo que gana la operación es que el evento llega con la patente ya leída y la imagen adjunta, así quien atiende resuelve en segundos y no anota nada a mano.

**Autorizaciones temporales.** Una patente cargada con vigencia acotada a un día o a una franja horaria. Es lo que permite manejar contratistas sin dejar accesos abiertos para siempre, que es el problema típico de las listas que nunca se depuran.

## Lo que LPR no resuelve

Conviene decirlo claro porque se vende al revés. LPR identifica el vehículo, no a la persona que lo maneja.

Si lo que se necesita es saber quién entró, hace falta cruzar la patente con la credencial del conductor o con una cámara que capture la cabina. Ese cruce lo hace la capa de integración, no el LPR, y es la diferencia entre un sistema que registra vehículos y uno que registra ingresos. Lo desarrollamos en [integración con control de accesos y audio IP](/integracion-control-accesos-audio-ip/).

Tampoco resuelve patentes ilegibles. Una placa sucia, doblada, con soporte que la tapa parcialmente o con caracteres deteriorados va a fallar, y eso no es un defecto del sistema. Por eso siempre tiene que existir el camino manual, que en la práctica es que portería vea la imagen y decida.

## Qué tasa de acierto esperar

Un sistema bien instalado, con cámara dedicada, iluminación adecuada y carril delimitado, trabaja en el orden del noventa y largo por ciento en condiciones normales. Ese número baja con lluvia intensa, con placas en mal estado y con vehículos que se salen del carril previsto.

Lo importante para la operación no es perseguir el cien por ciento, es que el porcentaje restante tenga un camino de resolución rápido. Un sistema que acierta noventa y cinco y resuelve el cinco en diez segundos es mejor que uno que acierta noventa y ocho y para la fila cuando falla.

Desconfiá de cualquier propuesta que garantice cien por ciento. No existe.

## Dónde tiene más sentido

**Plantas con movimiento de camiones.** Es el caso más claro. Ingreso, egreso y control de balanza con registro automático de qué vehículo pesó qué y cuándo.

**Estacionamientos corporativos.** Elimina el tag o la tarjeta, que se pierden, se prestan y hay que reponer. La patente ya está en el vehículo.

**Predios con múltiples accesos.** Con un sistema centralizado se sabe por dónde entró y por dónde salió cada vehículo, y se detecta lo que ninguna garita ve, un vehículo que entró y no salió, o que salió por un acceso distinto al esperado.

**Perímetros industriales.** Como capa complementaria a la detección, un vehículo detenido en el camino perimetral externo puede quedar registrado con su patente aunque no intente ingresar. Se integra con lo que planteamos en [videovigilancia industrial](/videovigilancia-industrial/).

## La red y la infraestructura

Los requisitos son los mismos que para cualquier sistema de video serio, con dos agregados.

La barrera o el portón necesitan un controlador que reciba la orden del sistema, y ese enlace tiene que tener su propio respaldo. Un corte de energía que deja la barrera bloqueada con un camión adentro es un problema operativo inmediato.

Y la sincronización horaria importa más de lo que parece. Si el reloj del sistema de video y el del controlador de barrera difieren, la imagen asociada a la apertura no corresponde al momento de la apertura, y el registro pierde valor. Todos los equipos tienen que sincronizar contra el mismo servidor NTP.

Sobre dónde vive la plataforma que orquesta todo esto, la comparación completa está en [NVR y VMS](/nvr-vs-vms/).

## Datos personales

Una patente es un dato asociable a una persona. Conviene definir desde el inicio cuánto tiempo se conservan los registros de tránsito, quién puede consultarlos y con qué trazabilidad. No es solo una cuestión normativa, es lo que evita que el sistema se use para cosas para las que no se instaló.

## Cuando la lógica depende del proceso

En una operación real las reglas rara vez son simples. Un proveedor autorizado solo los martes por la mañana. Un camión que puede entrar por el acceso norte pero no por el sur. Una autorización que se habilita cuando el sistema de gestión confirma que hay una orden de compra asociada.

Las plataformas de catálogo resuelven las reglas básicas y se quedan cortas ahí. CamScope, la plataforma que desarrollamos en Building Networks a lo largo de diez años, permite definir esa lógica sobre el proceso real de la empresa e integrarla con los sistemas que ya usa. Lo desarrollamos en [la página de CamScope](/camscope/).

## Por dónde empezar

Antes de cotizar, tres definiciones. Cuántos movimientos diarios tiene el acceso y en qué franjas se concentran. A qué velocidad pasan los vehículos y si el carril está delimitado. Y qué tiene que pasar cuando el sistema no reconoce la patente, porque eso va a ocurrir todos los días.

Con esas respuestas se sabe qué equipo hace falta y, más importante, si el problema se resuelve con LPR o con una reforma del acceso.

En Building Networks diseñamos e implementamos sistemas de control de acceso vehicular integrados a videovigilancia desde hace más de veinte años, con AXIS como partner de hardware y plataforma propia cuando el proyecto lo justifica. El panorama completo está en nuestra guía de [videovigilancia corporativa](/videovigilancia-corporativa/).

Si tu portón todavía funciona con planilla y bocina, [conversemos](/contacto/).
