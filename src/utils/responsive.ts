/**
 * Devuelve el srcset de una foto de /images/optimized/ con sus variantes de 640 y 960 px
 * (generadas junto al original con el sufijo -640 y -960).
 */
export function srcsetFor(src: string, originalWidth = 1400): string | undefined {
  if (!src.startsWith('/images/optimized/') || src.includes('/gallery/') || src.includes('logo-')) {
    return undefined;
  }
  const base = src.replace(/\.webp$/, '');
  return `${base}-640.webp 640w, ${base}-960.webp 960w, ${base}-1080.webp 1080w, ${src} ${originalWidth}w`;
}

/** Ancho aproximado de las fotos de media columna: columna en escritorio, casi todo el ancho en móvil. */
export const halfColumnSizes = '(min-width: 1080px) 560px, (min-width: 768px) 45vw, 92vw';
