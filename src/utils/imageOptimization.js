// Função para otimizar carregamento de imagens
export function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// Função para carregar múltiplas imagens
export async function preloadImages(sources) {
  try {
    const promises = sources.map(src => preloadImage(src));
    return await Promise.all(promises);
  } catch (error) {
    console.warn('Erro ao carregar algumas imagens:', error);
    return [];
  }
}

// Função para gerar srcset responsivo
export function generateSrcSet(basePath, sizes = [320, 640, 1024, 1920]) {
  return sizes.map(size => `${basePath}?w=${size} ${size}w`).join(', ');
}