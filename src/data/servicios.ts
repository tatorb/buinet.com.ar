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

// Partners estratégicos (logos servidos desde /wp-content/uploads del server).
export const partners = [
  {
    nombre: 'Axis Communications',
    detalle: 'Solution Gold Partner',
    logo: '/wp-content/uploads/2025/03/logo_axis_cpp_solution_gold_cmyk-1-300x195.jpg',
    resumen:
      'Socio líder en soluciones de seguridad integradas: sistemas avanzados de videovigilancia y control para garantizar protección, conectividad y eficiencia en proyectos empresariales de alto estándar.',
  },
  {
    nombre: 'CISCO',
    detalle: 'Partner',
    logo: '/wp-content/uploads/2024/07/Cisco.png',
    resumen:
      'Innovamos con Cisco para ofrecer soluciones de conectividad y redes avanzadas, diseñadas para maximizar la productividad y robustez en infraestructuras empresariales de cualquier escala.',
  },
  {
    nombre: 'Cambium Networks',
    detalle: 'Connected Partner',
    logo: '/wp-content/uploads/2024/07/Cambium.png',
    resumen:
      'Integramos tecnología de Cambium Networks para crear redes inalámbricas eficientes, escalables y confiables, ideales para empresas que buscan máxima conectividad y desempeño en sus operaciones.',
  },
];
