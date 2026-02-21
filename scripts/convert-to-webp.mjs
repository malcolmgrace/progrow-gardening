import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { extname, basename, join } from 'path';

const INPUT_DIR = './img';
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

const files = readdirSync(INPUT_DIR).filter(f =>
  EXTENSIONS.includes(extname(f).toLowerCase())
);

console.log('\n📐 Image Dimensions + WebP Conversion Report\n');
console.log('File'.padEnd(40), 'Width', 'Height', 'WebP Output');
console.log('-'.repeat(75));

for (const file of files) {
  const inputPath = join(INPUT_DIR, file);
  const outputName = basename(file, extname(file)) + '.webp';
  const outputPath = join(INPUT_DIR, outputName);

  const image = sharp(inputPath);
  const meta = await image.metadata();

  await image
    .webp({ quality: 82 })
    .toFile(outputPath);

  console.log(
    file.padEnd(40),
    String(meta.width).padEnd(6),
    String(meta.height).padEnd(7),
    outputName
  );
}

console.log('\n✅ Done. WebP files written to /img\n');