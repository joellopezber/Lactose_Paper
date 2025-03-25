export default function imageLoader({ src }: { src: string }) {
  // Si la URL ya es absoluta, la devolvemos tal cual
  if (src.startsWith('http')) {
    return src;
  }
  
  // Detección más robusta de GitHub Pages usando todas las comprobaciones posibles
  let isGitHubPages = false;
  
  if (typeof window !== 'undefined') {
    // Verifica si estamos en GitHub Pages de varias maneras
    isGitHubPages = 
      window.location.hostname.includes('github.io') || 
      window.location.href.includes('github.io') || 
      document.URL.includes('github.io');
      
    // Log para depuración
    console.log('Hostname:', window.location.hostname);
    console.log('URL completa:', window.location.href);
    console.log('Es GitHub Pages:', isGitHubPages);
  }
  
  // En GitHub Pages, SIEMPRE aplicamos el prefijo /Lactose_Paper
  const basePath = isGitHubPages ? '/Lactose_Paper' : '';
  console.log('BasePath seleccionado:', basePath);
  
  // Eliminamos / inicial si existe, para evitar doble slash
  const normalizedSrc = src.startsWith('/') ? src.substring(1) : src;
  
  // Construir la URL completa
  const finalUrl = `${basePath}/${normalizedSrc}`;
  console.log(`ImageLoader: ${src} → ${finalUrl}`);
  
  return finalUrl;
} 