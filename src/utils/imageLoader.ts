export default function imageLoader({ src }: { src: string }) {
  // Detectamos el entorno en tiempo de ejecución, no en tiempo de compilación
  const isGitHubPages = typeof window !== 'undefined' && window.location.hostname !== 'localhost';
  
  // En GitHub Pages, obtenemos el basePath del pathname actual
  // El formato típico es: joellopezber.github.io/Lactose_Paper/...
  const basePath = isGitHubPages 
    ? window.location.pathname.split('/')[1] 
      ? `/${window.location.pathname.split('/')[1]}` 
      : ''
    : '';
  
  // Si la URL ya es absoluta, la devolvemos tal cual
  if (src.startsWith('http')) {
    return src;
  }
  
  // Eliminamos / inicial si existe, para evitar doble slash
  const normalizedSrc = src.startsWith('/') ? src.substring(1) : src;
  
  // Construir la URL completa con el basePath asegurándose de que haya solo un slash
  return `${basePath}/${normalizedSrc}`;
} 