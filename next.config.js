/**
 * Configuración de Next.js para el proyecto
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const nextConfig = {
  // Prefijo para rutas en producción (útil para GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/Lactose_Paper' : '',
  
  // Optimización de imágenes
  images: {
    unoptimized: true, // Desactivar API de optimización para ser compatible con la exportación estática
  },
  
  // Parámetros de compilación
  reactStrictMode: true,
  
  // Configuración para exportación estática
  output: 'export',
};

module.exports = nextConfig;
