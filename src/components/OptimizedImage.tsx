import React from 'react';
import Image, { ImageProps } from 'next/image';
import { getResourcePath } from '../utils/paths';

interface OptimizedImageProps extends ImageProps {
  src: string;
  alt: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, ...props }) => {
  // Utilizamos la función de utilidad para obtener la ruta completa
  // Si la URL ya es una ruta completa de getImagePath, no aplicamos getResourcePath nuevamente
  const fullSrc = src.includes('/images/') ? src : getResourcePath(src);

  return (
    <Image
      src={fullSrc}
      alt={alt}
      {...props}
    />
  );
};

export default OptimizedImage; 