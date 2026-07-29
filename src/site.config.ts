// Configuración central del sitio: datos de contacto y navegación.
// Datos reales tomados del sitio actual (buinet.com.ar).

export const site = {
  name: 'Building Networks',
  legalName: 'Building Networks S.A.',
  shortName: 'BuiNet',
  domain: 'buinet.com.ar',
  email: 'info@buinet.com.ar',
  phone: '+54 351 5544150',
  phoneHref: '+543515544150',
  address: {
    street: 'Humberto Primo 670, Piso 6 - Of. F66',
    zip: 'X5000FAN',
    city: 'Córdoba',
    country: 'Argentina',
  },
  tagline: 'Infraestructuras de redes convergentes',
  social: {
    linkedin: 'https://www.linkedin.com/company/building-networks-sa/',
    instagram: 'https://www.instagram.com/buinet.sa/',
  },
};

// Menú principal — replica el del sitio actual (nombres y orden).
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Data Center', href: '/data-center/' },
  { label: 'Infraestructura de Red', href: '/infraestructura-de-red/' },
  { label: 'Videovigilancia', href: '/videovigilancia/' },
  { label: 'Audio IP', href: '/audio-ip/' },
  { label: 'Control de Accesos', href: '/control-de-accesos/' },
  { label: 'Sobre Nosotros', href: '/sobre-nosotros/' },
  { label: 'Novedades', href: '/novedades/' },
  { label: 'Contacto', href: '/contacto/' },
];
