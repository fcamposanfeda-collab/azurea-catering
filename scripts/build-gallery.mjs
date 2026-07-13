import sharp from 'sharp';
import { mkdir, readdir, writeFile } from 'fs/promises';
import path from 'path';

const imagesDir = 'C:/Users/Fernando/OneDrive/DESARROLLO/azurea-catering/public/images';
const galleryDir = path.join(imagesDir, 'optimized', 'gallery');
await mkdir(galleryDir, { recursive: true });

const entries = (await readdir(imagesDir, { withFileTypes: true }))
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter((name) => /\.(jpe?g|png)$/i.test(name) && !/^logo_/i.test(name))
  .sort((a, b) => a.localeCompare(b, 'es'));

const gallery = [];

for (const [index, file] of entries.entries()) {
  const slug = `azurea-${String(index + 1).padStart(2, '0')}.webp`;
  const input = path.join(imagesDir, file);

  await sharp(input)
    .rotate()
    .resize(900, 900, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82 })
    .toFile(path.join(galleryDir, slug));

  gallery.push({
    src: `/images/optimized/gallery/${slug}`,
    alt: `Celebración Azurea Catering ${index + 1}`,
    wide: index % 5 === 0 || index % 7 === 0,
  });
}

const output = `export const galleryImages = ${JSON.stringify(gallery, null, 2)} as const;\n`;
await writeFile(
  'C:/Users/Fernando/OneDrive/DESARROLLO/azurea-catering/src/data/gallery.ts',
  output,
  'utf8',
);

console.log(`gallery ready: ${gallery.length} images`);
