import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { getResourcePath } from '../utils/paths';
import imageLoader from '../utils/imageLoader';

interface OptimizedImageProps extends ImageProps {
  src: string;
  alt: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, ...props }) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [error, setError] = useState<boolean>(false);

  // Obtenemos la ruta correcta usando getResourcePath
  const fullSrc = getResourcePath(src);
  
  // Manejamos errores de carga
  useEffect(() => {
    // Reset error cuando cambia el src
    setError(false);
  }, [src]);

  // Función para manejar errores de carga
  const handleError = () => {
    // Si la imagen original falló, probamos con una fallback directa
    if (!error && imageSrc === fullSrc) {
      console.warn(`Error al cargar imagen: ${fullSrc}, intentando ruta alternativa`);
      setError(true);
      
      // Intentamos otra ruta como fallback (eliminando cualquier basePath)
      const fallbackSrc = src.startsWith('/') ? src : `/${src}`;
      setImageSrc(fallbackSrc);
    }
  };
  
  return (
    <Image
      src={error ? imageSrc : fullSrc}
      alt={alt}
      loader={imageLoader}
      onError={handleError}
      {...props}
    />
  );
};

export default OptimizedImage; 