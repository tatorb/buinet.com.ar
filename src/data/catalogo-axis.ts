// ============================================================================
// CATÁLOGO DE PROTOTIPO.
//
// Alimenta la sección de e-commerce de /prototipo-ecommerce-vi-7c21/. Sirve
// para ver cómo se vería y cómo se navegaría una grilla de producto dentro de
// una página de servicio.
//
// QUÉ ES REAL Y QUÉ NO, antes de que esto se use para otra cosa:
//
//  - Las FOTOS y los NOMBRES DE MODELO de las cámaras son reales. Salen del
//    set que pasó el cliente, en /public/img/catalogo/.
//  - Los PRECIOS son inventados. Están para que la grilla, el filtro por
//    rango y el total del carrito tengan algo que mostrar.
//  - Las FICHAS describen el formato del equipo (domo, bala, caja, PTZ,
//    panorámica, biespectral), que es lo que se ve en la foto. No son
//    especificaciones de AXIS y no hay que copiarlas a ningún lado.
//  - El campo ENTORNO se dedujo del sufijo del modelo, siguiendo la
//    convención de AXIS: -E, -LE, -VE, -LVE y -SLVE para intemperie, el resto
//    para interior. Para el prototipo alcanza; para un catálogo de verdad hay
//    que confirmarlo contra la ficha de cada producto.
//  - Faltan dos fotos: el altavoz AXIS C1004-E y el servidor AXIS S1216.
//    Esos dos quedan con el placeholder hasta que lleguen las imágenes.
//  - OJO con los modelos de radar y grabación: salieron de la primera versión
//    inventada de este archivo y no se verificaron contra el catálogo vigente
//    de AXIS. Los de cámaras y altavoces sí vinieron del cliente.
// ============================================================================

export interface Producto {
  sku: string;
  nombre: string;
  modelo: string;
  categoria: 'camara' | 'radar' | 'altavoz' | 'grabacion';
  /** Dónde puede instalarse. Alimenta el filtro de entorno. */
  entorno: 'interior' | 'exterior' | 'ambos';
  /** Trae analítica corriendo en el propio dispositivo. */
  analitica: boolean;
  ficha: string;
  /** Etiquetas para el buscador y los chips de la tarjeta. */
  tags: string[];
  precio: number;
  /** Ruta en /public. Vacío = la tarjeta dibuja un placeholder. */
  imagen?: string;
}

export const CATEGORIAS = [
  { id: 'camara', label: 'Cámaras' },
  { id: 'radar', label: 'Radar' },
  { id: 'altavoz', label: 'Altavoces' },
  { id: 'grabacion', label: 'Grabación' },
] as const;

export const ENTORNOS = [
  { id: 'interior', label: 'Interior' },
  { id: 'exterior', label: 'Exterior' },
] as const;

const IMG = '/img/catalogo/';

export const productos: Producto[] = [
  // ------------------------------------------------------------ domos
  {
    sku: 'AX-P3268',
    nombre: 'Domo fijo de exterior',
    modelo: 'AXIS P3268-SLVE',
    categoria: 'camara',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Domo antivandálico para intemperie. El formato más usado en perímetros, accesos y playones.',
    tags: ['domo', 'exterior', 'antivandálico'],
    precio: 1180000,
    imagen: IMG + 'axis-p3268-slve.webp',
  },
  {
    sku: 'AX-Q3538',
    nombre: 'Domo de alta resolución',
    modelo: 'AXIS Q3538-SLVE',
    categoria: 'camara',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Domo de gama alta para intemperie, cuando hace falta más detalle sobre la misma superficie.',
    tags: ['domo', 'exterior', 'alta resolución'],
    precio: 2150000,
    imagen: IMG + 'axis-q3538-slve.webp',
  },
  {
    sku: 'AX-M3057',
    nombre: 'Domo panorámico de interior',
    modelo: 'AXIS M3057-PLR Mk II',
    categoria: 'camara',
    entorno: 'interior',
    analitica: true,
    ficha: 'Cubre 360 grados desde un solo punto de montaje. Para salones, depósitos y áreas abiertas.',
    tags: ['domo', 'interior', '360'],
    precio: 1320000,
    imagen: IMG + 'axis-m3057-plr-mkii.webp',
  },
  {
    sku: 'AX-Q9307',
    nombre: 'Domo discreto de interior',
    modelo: 'AXIS Q9307-LV',
    categoria: 'camara',
    entorno: 'interior',
    analitica: true,
    ficha: 'Perfil bajo para espacios donde el equipo no debe llamar la atención. Recepciones y oficinas.',
    tags: ['domo', 'interior', 'discreto'],
    precio: 1050000,
    imagen: IMG + 'axis-q9307-lv.webp',
  },

  // ------------------------------------------------------------ balas
  {
    sku: 'AX-M2035',
    nombre: 'Cámara bala compacta',
    modelo: 'AXIS M2035-LE',
    categoria: 'camara',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Bala chica para intemperie. La opción de entrada para sumar puntos de cobertura en exterior.',
    tags: ['bala', 'exterior', 'compacta'],
    precio: 620000,
    imagen: IMG + 'axis-m2035-le.webp',
  },
  {
    sku: 'AX-P1475',
    nombre: 'Cámara bala de exterior',
    modelo: 'AXIS P1475-LE',
    categoria: 'camara',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Bala de uso general para perímetros y accesos. Montaje orientable sobre poste o pared.',
    tags: ['bala', 'exterior', 'perímetro'],
    precio: 980000,
    imagen: IMG + 'axis-p1475-le.webp',
  },
  {
    sku: 'AX-Q1800',
    nombre: 'Bala para lectura de patentes',
    modelo: 'AXIS Q1800-LE',
    categoria: 'camara',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Pensada para portería vehicular y control de ingreso de camiones, donde hay que leer la patente.',
    tags: ['bala', 'patentes', 'acceso vehicular'],
    precio: 1890000,
    imagen: IMG + 'axis-q1800-le.webp',
  },

  // ------------------------------------------------------------ caja y bloque
  {
    sku: 'AX-P1385',
    nombre: 'Cámara tipo caja',
    modelo: 'AXIS P1385',
    categoria: 'camara',
    entorno: 'interior',
    analitica: true,
    ficha: 'Formato caja con óptica intercambiable. Para elegir el campo de visión según el tramo a cubrir.',
    tags: ['caja', 'interior', 'óptica intercambiable'],
    precio: 790000,
    imagen: IMG + 'axis-p1385.webp',
  },
  {
    sku: 'AX-Q1656',
    nombre: 'Cámara caja de gama alta',
    modelo: 'AXIS Q1656',
    categoria: 'camara',
    entorno: 'interior',
    analitica: true,
    ficha: 'Caja de gama alta para instalaciones donde la calidad de imagen es la variable crítica.',
    tags: ['caja', 'interior', 'gama alta'],
    precio: 1650000,
    imagen: IMG + 'axis-q1656.webp',
  },
  {
    sku: 'AX-Q1715',
    nombre: 'Cámara de bloque',
    modelo: 'AXIS Q1715',
    categoria: 'camara',
    entorno: 'interior',
    analitica: true,
    ficha: 'Formato bloque, para integrar dentro de un gabinete o una carcasa propia del proyecto.',
    tags: ['bloque', 'interior', 'integración'],
    precio: 1420000,
    imagen: IMG + 'axis-q1715.webp',
  },
  {
    sku: 'AX-P1245',
    nombre: 'Cámara modular',
    modelo: 'AXIS P1245 Mk II',
    categoria: 'camara',
    entorno: 'interior',
    analitica: true,
    ficha: 'Sensor separado de la unidad de proceso. Para montar el lente donde no entra una cámara entera.',
    tags: ['modular', 'interior', 'sensor remoto'],
    precio: 880000,
    imagen: IMG + 'axis-p1245-mkii.webp',
  },
  {
    sku: 'AX-P9117',
    nombre: 'Cámara de esquina',
    modelo: 'AXIS P9117-PV',
    categoria: 'camara',
    entorno: 'interior',
    analitica: true,
    ficha: 'Se monta en el vértice de la pared y no deja ángulo muerto debajo. Celdas, pasillos y vestuarios.',
    tags: ['esquina', 'interior', 'sin ángulo muerto'],
    precio: 1240000,
    imagen: IMG + 'axis-p9117-pv.webp',
  },

  // ------------------------------------------------------------ PTZ
  {
    sku: 'AX-M5000',
    nombre: 'PTZ compacta de interior',
    modelo: 'AXIS M5000',
    categoria: 'camara',
    entorno: 'interior',
    analitica: true,
    ficha: 'PTZ chica para interiores. Movimiento y zoom controlados a distancia, sin la escala de una PTZ de exterior.',
    tags: ['ptz', 'interior', 'compacta'],
    precio: 1760000,
    imagen: IMG + 'axis-m5000.webp',
  },
  {
    sku: 'AX-P5654',
    nombre: 'PTZ de exterior',
    modelo: 'AXIS P5654-E Mk II',
    categoria: 'camara',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Se usa para seguir un evento que otra cámara o el radar ya detectaron, en vez de cubrir un área fija.',
    tags: ['ptz', 'exterior', 'seguimiento'],
    precio: 3250000,
    imagen: IMG + 'axis-p5654-e-mkii.webp',
  },
  {
    sku: 'AX-V5925',
    nombre: 'PTZ de alta velocidad',
    modelo: 'AXIS V5925',
    categoria: 'camara',
    entorno: 'interior',
    analitica: true,
    ficha: 'PTZ de respuesta rápida, pensada para operación manual desde la sala de monitoreo.',
    tags: ['ptz', 'interior', 'operación manual'],
    precio: 2980000,
    imagen: IMG + 'axis-v5925.webp',
  },

  // ------------------------------------------------------------ panorámicas
  {
    sku: 'AX-Q6020',
    nombre: 'Panorámica de exterior',
    modelo: 'AXIS Q6020-E',
    categoria: 'camara',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Vista panorámica continua desde un solo punto. Playones, patios de maniobra y predios abiertos.',
    tags: ['panorámica', 'exterior', 'área amplia'],
    precio: 3800000,
    imagen: IMG + 'axis-q6020-e.webp',
  },
  {
    sku: 'AX-Q6300',
    nombre: 'Panorámica multisensor',
    modelo: 'AXIS Q6300-E',
    categoria: 'camara',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Varios sensores en un mismo cuerpo y una sola bajada de red. Reemplaza cuatro cámaras en un cruce.',
    tags: ['panorámica', 'multisensor', 'exterior'],
    precio: 4450000,
    imagen: IMG + 'axis-q6300-e.webp',
  },

  // ------------------------------------------------------------ biespectrales
  {
    sku: 'AX-Q2802',
    nombre: 'Cámara biespectral',
    modelo: 'AXIS Q2802-E',
    categoria: 'camara',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Combina imagen térmica y visual en un solo equipo. Detecta por temperatura donde la luz no alcanza.',
    tags: ['térmica', 'biespectral', 'exterior'],
    precio: 5200000,
    imagen: IMG + 'axis-q2802-e.webp',
  },
  {
    sku: 'AX-Q6411',
    nombre: 'PTZ biespectral',
    modelo: 'AXIS Q6411-LE',
    categoria: 'camara',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Térmica y visual con movimiento y zoom. El equipo de perímetro para grandes superficies sin luz.',
    tags: ['térmica', 'ptz', 'perímetro'],
    precio: 6900000,
    imagen: IMG + 'axis-q6411-le.webp',
  },

  // ------------------------------------------------------- radar (sin foto)
  {
    sku: 'AX-D2110',
    nombre: 'Radar de seguridad',
    modelo: 'AXIS D2110-VE',
    categoria: 'radar',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Detecta por movimiento real y no por cambio de píxeles. No lo afectan la lluvia, la niebla ni las sombras.',
    tags: ['radar', 'perímetro', 'sin falsas alarmas'],
    precio: 3900000,
    imagen: IMG + 'axis-d2110-ve.webp',
  },
  {
    sku: 'AX-D2210',
    nombre: 'Radar de área amplia',
    modelo: 'AXIS D2210-VE',
    categoria: 'radar',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Alcance mayor para predios grandes. Se combina con una PTZ para que el radar detecte y la cámara siga.',
    tags: ['radar', 'predios grandes', 'ptz'],
    precio: 4600000,
    imagen: IMG + 'axis-d2210-ve.webp',
  },

  // --------------------------------------------------- altavoces (sin foto)
  {
    sku: 'AX-C1004E',
    nombre: 'Altavoz de gabinete',
    modelo: 'AXIS C1004-E',
    categoria: 'altavoz',
    entorno: 'interior',
    analitica: false,
    ficha: 'Bidireccional, pensado para entornos ruidosos de producción. Responde a un evento de video con un mensaje en el sector.',
    tags: ['audio ip', 'industrial', 'bidireccional'],
    precio: 620000,
  },
  {
    sku: 'AX-C1310E',
    nombre: 'Altavoz tipo bocina',
    modelo: 'AXIS C1310-E Mk II',
    categoria: 'altavoz',
    entorno: 'exterior',
    analitica: false,
    ficha: 'Para intemperie y distancias largas. Disuasión activa en perímetro cuando la analítica detecta un ingreso.',
    tags: ['audio ip', 'exterior', 'disuasión'],
    precio: 740000,
    imagen: IMG + 'axis-c1310-e-mk-ii.webp',
  },
  {
    sku: 'AX-C2005',
    nombre: 'Altavoz de techo',
    modelo: 'AXIS C2005',
    categoria: 'altavoz',
    entorno: 'interior',
    analitica: false,
    ficha: 'Cobertura pareja en galpones y depósitos. Voceo, evacuación y mensajería por zona.',
    tags: ['audio ip', 'techo', 'voceo'],
    precio: 410000,
    imagen: IMG + 'axis-c2005.webp',
  },

  // -------------------------------------------------- grabación (sin foto)
  {
    sku: 'AX-S3008',
    nombre: 'Grabador compacto',
    modelo: 'AXIS S3008 Recorder',
    categoria: 'grabacion',
    entorno: 'interior',
    analitica: false,
    ficha: 'Ocho puertos PoE y almacenamiento integrado. Para instalaciones chicas que no justifican un servidor.',
    tags: ['nvr', 'poe', 'instalación chica'],
    precio: 1250000,
    imagen: IMG + 'axis-s3008-recorder.webp',
  },
  {
    sku: 'AX-S1216',
    nombre: 'Servidor de grabación en rack',
    modelo: 'AXIS S1216 Rack Server',
    categoria: 'grabacion',
    entorno: 'interior',
    analitica: false,
    ficha: 'Para instalaciones medianas y grandes, con retención definida por política. Se gestiona desde CamScope.',
    tags: ['servidor', 'rack', 'retención'],
    precio: 6800000,
  },
];
