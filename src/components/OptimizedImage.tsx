import Image, { ImageProps } from 'next/image';
import React from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, ...props }) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/lactose' : '';
  const fullSrc = src.startsWith('/') ? `${basePath}${src}` : src;
  
  return <Image {...props} src={fullSrc} />;
};

export default OptimizedImage; 