/**
 * Utilidad para manejar rutas de recursos en la aplicación
 * Garantiza coherencia entre entornos de desarrollo y producción
 */

/**
 * Obtiene la ruta completa para un recurso
 * @param path - Ruta relativa del recurso
 * @returns Ruta completa del recurso
 */
export const getResourcePath = (path: string): string => {
  // Simplemente normalizamos la ruta, el imageLoader se encargará del basePath
  return path.startsWith('/') ? path : `/${path}`;
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