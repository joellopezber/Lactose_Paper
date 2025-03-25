export default function imageLoader({ src }: { src: string }) {
  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? '/Lactose_Paper' : '';
  
  // Si la URL ya es absoluta, la devolvemos tal cual
  if (src.startsWith('http')) {
    return src;
  }
  
  // Asegurarnos de que la ruta comience con /
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  
  // Construir la URL completa
  return `${basePath}${normalizedSrc}`;
} 