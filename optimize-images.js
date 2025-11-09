const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  '3200a.png',
  '800a mcc.png',
  'PCI panel.png'
];

async function optimizeImages() {
  // Create optimized directory if it doesn't exist
  const optimizedDir = path.join(__dirname, 'public', 'optimized');
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  for (const image of images) {
    try {
      const inputPath = path.join(__dirname, 'public', image);
      const outputPath = path.join(optimizedDir, image);
      
      await sharp(inputPath)
        .jpeg({ quality: 70, mozjpeg: true })
        .resize(800, 600, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .toFile(outputPath);
      
      console.log(`Optimized ${image}`);
    } catch (error) {
      console.error(`Error optimizing ${image}:`, error);
    }
  }
}

optimizeImages();
