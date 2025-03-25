import React from 'react';
import Image, { ImageProps } from 'next/image';
import { getResourcePath } from '../utils/paths';

interface OptimizedImageProps extends ImageProps {
  src: string;
  alt: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, ...props }) => {
  // Asegurarnos de que la ruta sea absoluta para Next.js Image
  const fullSrc = getResourcePath(src);
  
  return (
    <Image
      src={fullSrc}
      alt={alt}
      loader={({ src }) => src} // Usar un loader personalizado para manejar rutas estáticas
      {...props}
    />
  );
};

export default OptimizedImage; 