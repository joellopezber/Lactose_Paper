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
    unoptimized: true, // Necesario para exportación estática
    domains: ['joellopezber.github.io'], // Permitir imágenes desde GitHub Pages
    path: process.env.NODE_ENV === 'production' ? '/Lactose_Paper/_next/image' : '/_next/image',
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
  },
  
  // Parámetros de compilación
  reactStrictMode: true,
  
  // Configuración para exportación estática
  output: 'export',

  // Usar trailing slash para mejorar compatibilidad con GitHub Pages
  trailingSlash: true,
  
  // Configuración de assetPrefix para recursos estáticos
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Lactose_Paper' : '',
};

module.exports = nextConfig;
