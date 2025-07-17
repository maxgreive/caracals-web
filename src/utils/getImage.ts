export function getImageFromFrontmatter(filename: string) {
  const images = import.meta.glob('../assets/images/*', { eager: true, import: 'default' });
  return images[`../assets/images/${filename.split('/').pop()}`];
}