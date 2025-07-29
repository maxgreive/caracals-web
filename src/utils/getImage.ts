export function getImageFromFrontmatter(filename: string) {
  if (!filename) return null;

  const images = import.meta.glob('../assets/images/*', {
    eager: true, import: 'default'
  }) as Record<string, ImageMetadata>;
  const key = `../assets/images/${filename.split('/').pop()}`;
  const image = images[key];

  if (!image) {
    throw new Error(`Image not found: ${key}`);
  }

  return image;
}