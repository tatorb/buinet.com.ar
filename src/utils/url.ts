// Prefija los enlaces internos con el "base" del sitio.
// En producción (dominio propio) BASE_URL = '/', así que no cambia nada.
// En el preview de GitHub Pages (subdirectorio /buinet.coml.ar/) los ajusta solo.
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path; // externos, mailto:, tel:, #ancla
  const base = import.meta.env.BASE_URL; // siempre termina en '/'
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base;
  return prefix + path;
}
