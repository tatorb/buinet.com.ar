// ============================================================================
// CATÁLOGO DE PROTOTIPO — NO SON DATOS REALES.
//
// Alimenta la sección de e-commerce de la página de prototipo
// /prototipo-ecommerce-vi-7c21/. Sirve para ver cómo se vería y cómo se
// navegaría una grilla de producto dentro de una página de servicio.
//
// IMPORTANTE, antes de que esto se use para cualquier otra cosa:
//  - Los PRECIOS son inventados. Están para que la grilla, los filtros por
//    rango y el total del carrito tengan algo que mostrar.
//  - Las FICHAS son descripciones genéricas de cada tipo de dispositivo, no
//    especificaciones de AXIS. No copiar a ningún lado.
//  - Los NOMBRES de modelo sí son familias reales de AXIS, varias ya citadas
//    en las notas del sitio (C1004-E, C1310-E Mk II, C2005, serie 2N).
//  - `imagen` está vacío a propósito: axis.com no es alcanzable desde el
//    entorno de build. Mientras esté vacío la tarjeta dibuja un placeholder.
//    Para poner la foto real, dejá el archivo en /public/img/catalogo/ y
//    escribí acá la ruta: imagen: '/img/catalogo/p3265-lve.jpg'.
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

export const productos: Producto[] = [
  // ---------------------------------------------------------------- cámaras
  {
    sku: 'AX-P3265',
    nombre: 'Domo fijo de interior',
    modelo: 'AXIS P3265-LV',
    categoria: 'camara',
    entorno: 'interior',
    analitica: true,
    ficha: 'Domo antivandálico para pasillos, recepciones y áreas de proceso. Iluminación propia para condiciones de poca luz.',
    tags: ['domo', 'interior', 'analítica'],
    precio: 780000,
  },
  {
    sku: 'AX-P3265E',
    nombre: 'Domo fijo de exterior',
    modelo: 'AXIS P3265-LVE',
    categoria: 'camara',
    entorno: 'exterior',
    analitica: true,
    ficha: 'La versión para intemperie del domo fijo. Perímetros, playones y accesos vehiculares.',
    tags: ['domo', 'exterior', 'analítica'],
    precio: 910000,
  },
  {
    sku: 'AX-P1468',
    nombre: 'Cámara tipo caja',
    modelo: 'AXIS P1468-LE',
    categoria: 'camara',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Formato caja con óptica intercambiable. Para tramos largos donde hace falta elegir el campo de visión.',
    tags: ['bullet', 'exterior', 'analítica'],
    precio: 1150000,
  },
  {
    sku: 'AX-Q6135',
    nombre: 'Domo PTZ',
    modelo: 'AXIS Q6135-LE',
    categoria: 'camara',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Movimiento y zoom controlados a distancia. Se usa para seguir un evento que otra cámara ya detectó.',
    tags: ['ptz', 'exterior', 'seguimiento'],
    precio: 3400000,
  },
  {
    sku: 'AX-Q1961',
    nombre: 'Cámara térmica',
    modelo: 'AXIS Q1961-TE',
    categoria: 'camara',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Detecta por temperatura y no por luz. Zonas sin iluminación, humo o niebla, donde la imagen convencional no alcanza.',
    tags: ['térmica', 'exterior', 'perímetro'],
    precio: 4200000,
  },
  {
    sku: 'AX-P3737',
    nombre: 'Cámara multisensor',
    modelo: 'AXIS P3737-PLE',
    categoria: 'camara',
    entorno: 'ambos',
    analitica: true,
    ficha: 'Cuatro sensores orientables en un solo punto de montaje y una sola bajada de red. Cruces y esquinas.',
    tags: ['multisensor', 'panorámica', 'analítica'],
    precio: 2850000,
  },
  {
    sku: 'AX-P1445LPR',
    nombre: 'Kit de lectura de patentes',
    modelo: 'AXIS P1445-LE-3 License Plate Verifier',
    categoria: 'camara',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Cámara con la aplicación de lectura de patentes ya instalada. Portería vehicular y control de ingreso de camiones.',
    tags: ['lpr', 'patentes', 'acceso vehicular'],
    precio: 1980000,
  },
  {
    sku: 'AX-M3085',
    nombre: 'Minidomo compacto',
    modelo: 'AXIS M3085-V',
    categoria: 'camara',
    entorno: 'interior',
    analitica: false,
    ficha: 'La opción de entrada para oficinas y locales. Sin analítica embebida: cubre, graba y nada más.',
    tags: ['domo', 'interior', 'entrada'],
    precio: 340000,
  },

  // ------------------------------------------------------------------ radar
  {
    sku: 'AX-D2110',
    nombre: 'Radar de seguridad',
    modelo: 'AXIS D2110-VE',
    categoria: 'radar',
    entorno: 'exterior',
    analitica: true,
    ficha: 'Cubre 180 grados y detecta por movimiento real, no por cambio de píxeles. No lo afectan la lluvia, la niebla ni las sombras.',
    tags: ['radar', 'perímetro', 'sin falsas alarmas'],
    precio: 3900000,
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
  },

  // --------------------------------------------------------------- altavoces
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
  },

  // -------------------------------------------------------------- grabación
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
