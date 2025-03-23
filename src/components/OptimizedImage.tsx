import React from 'react';
import Image, { ImageProps } from 'next/image';
import { getResourcePath } from '../utils/paths';

interface OptimizedImageProps extends ImageProps {
  src: string;
  alt: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, ...props }) => {
  // Siempre aplicamos getResourcePath para garantizar la ruta correcta en todos los entornos
  const fullSrc = getResourcePath(src);

  return (
    <Image
      src={fullSrc}
      alt={alt}
      {...props}
    />
  );
};

export default OptimizedImage; 