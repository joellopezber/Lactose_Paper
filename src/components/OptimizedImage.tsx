import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import imageLoader from '../utils/imageLoader';

interface OptimizedImageProps extends ImageProps {
  src: string;
  alt: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, alt, ...props }) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [error, setError] = useState<boolean>(false);
  const [attemptCount, setAttemptCount] = useState<number>(0);
  
  // Función para determinar si estamos en GitHub Pages
  const isGitHubPages = typeof window !== 'undefined' && 
    (window.location.hostname.includes('github.io') || 
     window.location.href.includes('github.io'));
  
  // Log para depuración
  useEffect(() => {
    console.log('OptimizedImage cargando:', src);
    console.log('¿GitHub Pages?:', isGitHubPages);
    console.log('URL actual:', typeof window !== 'undefined' ? window.location.href : 'No disponible');
  }, [src, isGitHubPages]);
  
  // Resetear el estado de error cuando cambia la fuente
  useEffect(() => {
    setError(false);
    setAttemptCount(0);
  }, [src]);
  
  // Función para manejar errores de carga
  const handleError = () => {
    console.error(`Error al cargar imagen: ${imageSrc} (intento ${attemptCount + 1})`);
    
    // Primer intento: añadir /Lactose_Paper al inicio si estamos en GitHub Pages
    if (attemptCount === 0 && isGitHubPages && !imageSrc.includes('/Lactose_Paper')) {
      const correctedSrc = `/Lactose_Paper${imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`}`;
      console.log(`Intentando con ruta corregida: ${correctedSrc}`);
      setImageSrc(correctedSrc);
      setAttemptCount(1);
    } 
    // Segundo intento: probar con URL absoluta para GitHub Pages
    else if (attemptCount === 1 && isGitHubPages) {
      const absoluteSrc = `https://joellopezber.github.io/Lactose_Paper/${
        imageSrc.replace(/^\/Lactose_Paper\//, '').replace(/^\//, '')
      }`;
      console.log(`Intentando con URL absoluta: ${absoluteSrc}`);
      setImageSrc(absoluteSrc);
      setAttemptCount(2);
    } 
    // Si todos los intentos fallan, establecer error
    else {
      setError(true);
    }
  };
  
  return (
    <>
      {error ? (
        <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded">
          <p className="text-sm text-gray-500">Error al cargar la imagen</p>
        </div>
      ) : (
        <Image
          src={imageSrc}
          alt={alt}
          loader={imageLoader}
          onError={handleError}
          {...props}
        />
      )}
    </>
  );
};

export default OptimizedImage; 