// Mapa: slug de nota del blog -> slug del servicio del que trata.
//
// Sirve para que [post].astro muestre el banner lateral que lleva a la página
// del servicio correspondiente (ver ServicioBanner.astro).
//
// Es un mapa central y no un campo en el frontmatter de cada nota porque con
// casi sesenta notas conviene ver de un vistazo qué está asignado y qué no.
// Una nota que no figure acá simplemente no muestra banner: no se inventa un
// servicio por descarte.
//
// Los slugs de servicio válidos son los de src/data/servicios.ts:
//   video-inteligente | videovigilancia | control-de-accesos
//   audio-ip | data-center | infraestructura-de-red

export const servicioDeNota: Record<string, string> = {
  // ---- Video inteligente (analítica, IA, detección, control operativo) ----
  'auditoria-procedimientos-video-ip': 'video-inteligente',
  'auditoria-procesos-video': 'video-inteligente',
  'camaras-ip-para-prevencion-de-accidentes': 'video-inteligente',
  'deteccion-epp-conductas-riesgo-video': 'video-inteligente',
  'deteccion-intrusion-perimetral-analitica': 'video-inteligente',
  'ia-en-videovigilancia-una-ventaja-competitiva': 'video-inteligente',
  'ikea-soroksar-videovigilancia-analitica-retail': 'video-inteligente',
  'mejorar-la-experiencia-del-cliente-con-sistema-de-video': 'video-inteligente',
  'mejorar-la-productividad-videovigilancia-avanzada': 'video-inteligente',
  'merma-robo-interno-videovigilancia': 'video-inteligente',
  'video-alerta-temprana-industrial': 'video-inteligente',
  'video-control-operaciones': 'video-inteligente',

  // ---- Videovigilancia (el sistema base: cámaras, grabación, perímetro) ----
  'actualizacion-de-sistemas-de-videovigilancia-ip-en-perimetros-del-exceso-de-camaras-a-un-enfoque-termico-visual-y-sonoro': 'videovigilancia',
  'actualizacion-videovigilancia-analogica-a-ip': 'videovigilancia',
  'almacenamiento-videovigilancia': 'videovigilancia',
  'camaras-termicas-axis-para-industrias-y-perimetros': 'videovigilancia',
  'camaras-termicas-y-termometricas': 'videovigilancia',
  'ciberseguridad-sistemas-video-ip': 'videovigilancia',
  'como-evitar-robos-con-videovigilancia-en-fabricas': 'videovigilancia',
  'deteccion-termica-planta-industrial': 'videovigilancia',
  'eficiencia-industrial-sistema-de-videovigilancia': 'videovigilancia',
  'long-term-support-camaras-ip': 'videovigilancia',
  'nvr-vs-vms': 'videovigilancia',
  'proyeccion-desde-la-videovigilancia-para-ciudades': 'videovigilancia',
  'redisenamos-camscope': 'videovigilancia',
  'seguridad-y-privacidad-con-camaras-ip-industriales': 'videovigilancia',
  'tco-videovigilancia-corporativa': 'videovigilancia',
  'vida-util-camara-ip': 'videovigilancia',
  'videovigilancia-en-obra': 'videovigilancia',
  'videovigilancia-hospitalaria': 'videovigilancia',
  'videovigilancia-industria-alimenticia': 'videovigilancia',
  'videovigilancia-industrial': 'videovigilancia',

  // ---- Control de accesos ----
  'integracion-control-accesos-audio-ip': 'control-de-accesos',
  'intercomunicadores-ip-acceso': 'control-de-accesos',
  'lpr-control-acceso-vehicular': 'control-de-accesos',
  'lpr-logistica-vehicular-planta': 'control-de-accesos',

  // ---- Audio IP ----
  'audio-ip-perimetro-exterior': 'audio-ip',
  'el-poder-del-audio-ip-en-grandes-organizaciones-una-solucion-integral-de-building-networks': 'audio-ip',
  'integracion-audio-video-seguridad': 'audio-ip',
  'monitoreo-audio-remoto-instalaciones': 'audio-ip',
  'sistema-audio-ip-planta-industrial': 'audio-ip',
  'voceo-evacuacion-emergencia': 'audio-ip',

  // ---- Data center ----
  // Las cuatro notas con capitalinasBanner: true no muestran este banner
  // (ver [post].astro). Quedan mapeadas igual por si ese flag cambia.
  'cuando-contratar-un-datacenter': 'data-center',
  'los-data-centers-en-la-era-del-edge-computing': 'data-center',
  'que-es-un-data-center-capitalinas': 'data-center',
  'ventajas-de-los-centros-de-datos-on-premise-vs-cloud': 'data-center',

  // ---- Infraestructura de red ----
  'cableado-estructurado-vida-util-red-empresa': 'infraestructura-de-red',
  'cisco-isr-caso-galp-de-sd-wan-en-1-200-sitios': 'infraestructura-de-red',
  'cuando-ampliar-la-infraestructura-de-red-de-tu-empresa': 'infraestructura-de-red',
  'cuando-infraestructura-de-red-se-decide-en-el-plano': 'infraestructura-de-red',
  'cuanto-influye-el-costo-de-una-solucion-integral-convergente': 'infraestructura-de-red',
  'diseno-de-infraestructura-de-red-nueva': 'infraestructura-de-red',
  'lo-que-aprendimos-en-20-anos-it-para-empresas-en-cordoba': 'infraestructura-de-red',
  'monitoreo-de-red-empresa-como-implementarlo': 'infraestructura-de-red',
  'mudanza-e-infraestructura-de-red': 'infraestructura-de-red',
  'que-es-una-red-convergente-y-por-que-es-esencial-hoy-en-dia': 'infraestructura-de-red',
  'wifi-corporativo-como-disenar-cobertura-sin-puntos-ciegos': 'infraestructura-de-red',
};

// Copy del banner por servicio. La pregunta abre, el apoyo da una razón para
// hacer clic y la etiqueta nombra el destino sin ambigüedad.
export interface CopyBanner {
  pregunta: string;
  apoyo: string;
  cta: string;
}

export const copyPorServicio: Record<string, CopyBanner> = {
  'video-inteligente': {
    pregunta: '¿Necesitás que tus cámaras detecten, no solo graben?',
    apoyo: 'Analítica en el dispositivo, en tiempo real, integrada con audio y accesos.',
    cta: 'Ver video inteligente',
  },
  videovigilancia: {
    pregunta: '¿Estás evaluando un sistema de videovigilancia?',
    apoyo: 'Diseño, implementación y soporte de sistemas que se sostienen en el tiempo.',
    cta: 'Ver videovigilancia',
  },
  'control-de-accesos': {
    pregunta: '¿Querés controlar quién entra, cuándo y a dónde?',
    apoyo: 'Credenciales, biometría y patentes, con trazabilidad de cada ingreso.',
    cta: 'Ver control de accesos',
  },
  'audio-ip': {
    pregunta: '¿Necesitás voceo y evacuación sobre tu red?',
    apoyo: 'Altavoces IP gestionados junto con las cámaras y los accesos.',
    cta: 'Ver audio IP',
  },
  'data-center': {
    pregunta: '¿Buscás dónde alojar tu infraestructura crítica?',
    apoyo: 'Housing en entorno controlado, con energía y conectividad redundantes.',
    cta: 'Ver data center',
  },
  'infraestructura-de-red': {
    pregunta: '¿Tu red sostiene lo que le estás pidiendo?',
    apoyo: 'Cableado, switching y wifi dimensionados para lo que la operación necesita.',
    cta: 'Ver infraestructura de red',
  },
};
