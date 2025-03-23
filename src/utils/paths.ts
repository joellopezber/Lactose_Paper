/**
 * Utilidad para manejar rutas de recursos en la aplicación
 * Garantiza coherencia entre entornos de desarrollo y producción
 */

// Definimos el basePath constante que corresponde al definido en next.config.js
const BASE_PATH = '/Lactose_Paper';

/**
 * Obtiene la ruta completa para un recurso incluyendo el prefijo base cuando es necesario
 * @param path - Ruta relativa del recurso
 * @returns Ruta completa con prefijo base en producción
 */
export const getResourcePath = (path: string): string => {
  // Verificamos si estamos en un entorno de navegador y no en desarrollo local
  const isGitHubPages = typeof window !== 'undefined' && window.location.hostname !== 'localhost';
  const basePath = isGitHubPages ? BASE_PATH : '';
  return path.startsWith('/') ? `${basePath}${path}` : path;
};

/**
 * Obtiene la ruta para una imagen
 * @param category - Categoría de la imagen (carpeta)
 * @param filename - Nombre del archivo
 * @returns Ruta completa a la imagen
 */
export const getImagePath = (category: string, filename: string): string => {
  return getResourcePath(`/images/${category}/${filename}`);
}; 