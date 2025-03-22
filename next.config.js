/**
 * Configuración de Next.js para el proyecto
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const nextConfig = {
  // Prefijo para rutas en producción (útil para GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/lactose' : '',
  
  // Optimización de imágenes
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
  },
  
  // Parámetros de compilación
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
