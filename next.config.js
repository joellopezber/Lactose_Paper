/**
 * Configuración de Next.js para el proyecto
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const nextConfig = {
  // Prefijo para rutas en producción (útil para GitHub Pages)
  // No es necesario si estás desplegando en la raíz de tu sitio (joellopezber.github.io)
  // Pero si estás desplegando en un subdirectorio (joellopezber.github.io/Lactose_Paper) es necesario
  basePath: process.env.NODE_ENV === 'production' ? '/Lactose_Paper' : '',
  
  // Optimización de imágenes
  images: {
    unoptimized: true, // Desactivar API de optimización para ser compatible con la exportación estática
  },
  
  // Parámetros de compilación
  reactStrictMode: true,
  
  // Configuración para exportación estática
  output: 'export',

  // Opcional: Desactivar manejo de links por defecto
  // Útil en algunas configuraciones de GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig;
