// Configuración central del sitio: datos de contacto y navegación.
// Editar acá para cambiar el menú o los datos de la empresa en todo el sitio.

export const site = {
  name: 'Building Networks',
  shortName: 'BUINET',
  domain: 'buinet.com.ar',
  // Datos tomados del sitio actual (verificar/completar):
  email: 'info@buinet.com.ar',
  phone: '+54 351 5544150',
  city: 'Córdoba, Argentina',
  tagline: 'Infraestructuras de redes convergentes',
};

// Menú principal. Las rutas replican las URLs de WordPress para no romper enlaces/SEO.
export const nav = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Nosotros', href: '/sobre-nosotros/' },
  { label: 'Videovigilancia', href: '/videovigilancia/' },
  { label: 'Audio IP', href: '/audio-ip/' },
  { label: 'Data Center', href: '/data-center-cordoba/' },
  { label: 'CamScope', href: '/camscope/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contacto', href: '/contacto/' },
];
