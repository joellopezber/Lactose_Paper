/**
 * Configuración de Next.js para el proyecto
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */

// Determinar si estamos en producción
const isProd = process.env.NODE_ENV === 'production';
// Ruta base para GitHub Pages
const REPO_NAME = 'Lactose_Paper';
const basePath = isProd ? `/${REPO_NAME}` : '';

const nextConfig = {
  // Prefijo para rutas en producción (útil para GitHub Pages)
  basePath: basePath,
  
  // Configuración simplificada para imágenes estáticas
  images: {
    unoptimized: true, // Necesario para exportación estática
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Parámetros de compilación
  reactStrictMode: true,
  
  // Configuración para exportación estática
  output: 'export',

  // Usar trailing slash para mejorar compatibilidad con GitHub Pages
  trailingSlash: true,
  
  // Configuración de assetPrefix para recursos estáticos
  assetPrefix: basePath,
  
  // Configuraciones adicionales para GitHub Pages
  env: {
    REPO_NAME: REPO_NAME,
    BASE_PATH: basePath,
  },
  
  // Agregar cabeceras personalizadas (estas solo funcionan en servidores Node.js, no en exportación estática)
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
