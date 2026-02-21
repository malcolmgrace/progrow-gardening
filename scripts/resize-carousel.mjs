import sharp from 'sharp';

// The 3 carousel hero images — full resolution originals
const files = [
  { input: 'img/gallery-pic-4.jpeg', ext: 'jpeg' },
  { input: 'img/gallery-pic-6.jpeg', ext: 'jpeg' },
  { input: 'img/gallery-pic-7.jpeg', ext: 'jpeg' },
];

const sizes = [800, 1400];

for (const file of files) {
  const base = file.input.replace(`.${file.ext}`, '');

  for (const width of sizes) {
    const outputPath = `${base}-${width}w.webp`;

    await sharp(file.input)
      .resize(width)           // resize to this width, height auto
      .webp({ quality: 82 })
      .toFile(outputPath);

    console.log(`✅ Created ${outputPath}`);
  }
}

console.log('\nDone. 6 resized WebP files written to /img');