import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { getResourcePath } from '../utils/paths';

interface CustomLinkProps extends NextLinkProps {
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

/**
 * Componente Link personalizado que maneja automáticamente las rutas base
 * para entornos de producción y desarrollo
 */
const Link: React.FC<CustomLinkProps> = ({ 
  href, 
  children, 
  className, 
  external = false,
  ...props 
}) => {
  // Solo aplicamos getResourcePath a rutas internas (que empiezan con /)
  const processedHref = typeof href === 'string' && !external && href.startsWith('/') 
    ? getResourcePath(href) 
    : href;

  return (
    <NextLink href={processedHref} className={className} {...props}>
      {children}
    </NextLink>
  );
};

export default Link; 