import { existsSync, mkdirSync, createWriteStream, unlink } from 'fs';
import { join, extname } from 'path';
import { get } from 'https';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create logos directory if it doesn't exist
const logosDir = join(__dirname, '../public/logos');
if (!existsSync(logosDir)) {
  mkdirSync(logosDir, { recursive: true });
}

// Company logo URLs (from official sources where possible)
const companyLogos = {
  'huawei': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Huawei_logo_%282019%29.svg/1200px-Huawei_logo_%282019%29.svg.png',
  'powergen': 'https://www.powergen-re.com/wp-content/uploads/2021/02/PowerGen-Logo-Color.png',
  'frieslandcampina': 'https://www.frieslandcampina.com/app/themes/frieslandcampina/dist/images/logo.svg',
  'cadbury': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Cadbury_logo.svg/1200px-Cadbury_logo.svg.png',
  'promasidor': 'https://www.promasidor.com/wp-content/uploads/2020/06/Promasidor-Logo-1.png',
  'daystar': 'https://daystar-power.com/wp-content/uploads/2021/06/DAYSTAR-POWER-LOGO-1.png',
  'rensource': 'https://rensource.energy/wp-content/uploads/2020/11/logo-rensource.png',
  'westa': 'https://www.westasolar.com/wp-content/uploads/2021/05/logo-westa-solar.png'
};

// Function to download and save images
async function downloadImage(url, filename) {
  const filePath = join(logosDir, filename);
  
  // Skip if file already exists
  if (existsSync(filePath)) {
    console.log(`Skipping ${filename} - already exists`);
    return;
  }

  console.log(`Downloading ${url} to ${filePath}`);
  
  return new Promise((resolve, reject) => {
    const file = createWriteStream(filePath);
    get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve(filePath);
      });
    }).on('error', error => {
      unlink(filePath, () => {
        console.error(`Error downloading ${url}:`, error.message);
        reject(error);
      });
    });  
  });
}

// Download all logos
async function downloadAllLogos() {
  try {
    for (const [company, url] of Object.entries(companyLogos)) {
      const extension = extname(url) || '.png';
      const filename = `${company}-logo${extension}`;
      await downloadImage(url, filename);
    }
    console.log('All logos downloaded successfully!');
  } catch (error) {
    console.error('Error downloading logos:', error);
  }
}

downloadAllLogos();
