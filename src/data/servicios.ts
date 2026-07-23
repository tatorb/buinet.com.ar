// Servicios / unidades — textos tomados del sitio actual (buinet.com.ar).
// Reutilizados en la Home y como base de cada página de servicio.

export interface Servicio {
  slug: string;
  titulo: string;
  href: string;
  resumen: string;
  icono: string; // clave de ícono (ver Icon.astro)
}

export const servicios: Servicio[] = [
  {
    slug: 'videovigilancia',
    titulo: 'Videovigilancia',
    href: '/videovigilancia/',
    icono: 'camera',
    resumen:
      'Integramos soluciones avanzadas de videovigilancia para proteger tus activos, permitiéndote supervisar remotamente, grabar y almacenar datos de manera eficiente y accesible en tiempo real.',
  },
  {
    slug: 'control-de-accesos',
    titulo: 'Control de Accesos',
    href: '/control-de-accesos/',
    icono: 'lock',
    resumen:
      'Diseñamos sistemas inteligentes de control de acceso, asegurando la gestión eficiente de autorizaciones y resguardando tus instalaciones con tecnología moderna y confiable.',
  },
  {
    slug: 'data-center',
    titulo: 'Data Center',
    href: '/data-center/',
    icono: 'server',
    resumen:
      'Optimizamos la infraestructura tecnológica de tu empresa con sistemas eficientes y procesos robustos, diseñados para garantizar fluidez, seguridad y alto rendimiento en cada operación.',
  },
  {
    slug: 'infraestructura-de-red',
    titulo: 'Infraestructura de Red',
    href: '/infraestructura-de-red/',
    icono: 'network',
    resumen:
      'Establecemos redes convergentes de alta capacidad, facilitando la comunicación LAN o inalámbrica fluida entre dispositivos y garantizando un desempeño confiable y continuo.',
  },
  {
    slug: 'audio-ip',
    titulo: 'Audio IP',
    href: '/audio-ip/',
    icono: 'speaker',
    resumen:
      'Implementamos sistemas de audio IP innovadores, perfectos para comunicación corporativa, seguridad y entretenimiento, conectados directamente a tus redes convergentes.',
  },
];

// Industrias / segmentos que atiende la empresa.
export const industrias = [
  {
    titulo: 'Sector Industrial y Productivo',
    resumen:
      'Proveemos soluciones integrales para la automatización, conectividad y seguridad en entornos industriales, optimizando procesos productivos y asegurando la continuidad operativa con tecnología avanzada.',
  },
  {
    titulo: 'Complejos Residenciales y Barrios Privados',
    resumen:
      'Diseñamos infraestructuras tecnológicas para complejos residenciales que garantizan seguridad, conectividad y comodidad, mejorando la calidad de vida y experiencia de sus residentes.',
  },
  {
    titulo: 'Comercios y Redes de Franquicias',
    resumen:
      'Ofrecemos soluciones tecnológicas personalizadas para comercios, fortaleciendo su conectividad, sistemas de seguridad y gestión, optimizando la experiencia del cliente y las operaciones.',
  },
];

// Partners estratégicos.
export const partners = [
  { nombre: 'AXIS', detalle: 'Solution Gold Partner' },
  { nombre: 'CISCO', detalle: 'Partner' },
  { nombre: 'Cambium Networks', detalle: 'Connected Partner' },
];
