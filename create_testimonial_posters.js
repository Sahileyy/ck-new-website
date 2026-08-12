const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const outputDir = path.join(__dirname, 'public', 'images', 'testimonials');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const testimonials = [
  {
    id: '01',
    name: 'ARJUN MEHTA',
    role: 'FOUNDER, D2C BRAND',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    filename: 'testimonial-01.jpg'
  },
  {
    id: '02',
    name: 'SARAH THOMAS',
    role: 'MARKETING MANAGER, RETAIL BRAND',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    filename: 'testimonial-02.jpg'
  },
  {
    id: '03',
    name: 'RAHUL NAIR',
    role: 'FOUNDER, E-COMMERCE BRAND',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    filename: 'testimonial-03.jpg'
  },
  {
    id: '04',
    name: 'MEERA KRISHNAN',
    role: 'GROWTH LEAD, SAAS COMPANY',
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    filename: 'testimonial-04.jpg'
  },
  {
    id: '05',
    name: 'DANIEL MATHEW',
    role: 'DIRECTOR, LIFESTYLE BRAND',
    url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    filename: 'testimonial-05.jpg'
  },
  {
    id: '06',
    name: 'ANANYA MENON',
    role: 'FOUNDER, CONSUMER BRAND',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    filename: 'testimonial-06.jpg'
  },
  {
    id: '07',
    name: 'VIVEK SHARMA',
    role: 'BUSINESS HEAD, RETAIL COMPANY',
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    filename: 'testimonial-07.jpg'
  }
];

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function createPoster(item) {
  const tempPortrait = path.join('/tmp', `portrait_${item.id}.jpg`);
  await downloadImage(item.url, tempPortrait);

  // Resize portrait to 680x850 (left ~42.5% of 1600x850 canvas)
  const portraitBuffer = await sharp(tempPortrait)
    .resize(680, 850, { fit: 'cover', position: 'top' })
    .toBuffer();

  // Create SVG text overlay for the right side (x: 680 to 1600)
  const svgTextOverlay = `
    <svg width="1600" height="850" xmlns="http://www.w3.org/2000/svg">
      <style>
        .num { font-family: 'Inter', system-ui, sans-serif; font-weight: 500; font-size: 28px; fill: #94A3B8; letter-spacing: 2px; }
        .name { font-family: 'Inter', system-ui, sans-serif; font-weight: 600; font-size: 52px; fill: #0F172A; letter-spacing: -1.5px; }
        .role { font-family: 'Inter', system-ui, sans-serif; font-weight: 500; font-size: 22px; fill: #64748B; letter-spacing: 0.5px; }
      </style>
      <!-- Pure white background for poster -->
      <rect width="1600" height="850" fill="#FFFFFF" />

      <!-- Minimal clean text composition on right side -->
      <g transform="translate(760, 370)">
        <text x="0" y="0" class="num">${item.id}</text>
        <text x="0" y="55" class="name">${item.name}</text>
        <text x="0" y="100" class="role">${item.role}</text>
      </g>
    </svg>
  `;

  const svgBuffer = Buffer.from(svgTextOverlay);

  const outputPath = path.join(outputDir, item.filename);

  // Composite the base white SVG canvas + left portrait photo into final poster image
  await sharp(svgBuffer)
    .composite([
      {
        input: portraitBuffer,
        top: 0,
        left: 0
      }
    ])
    .jpeg({ quality: 95 })
    .toFile(outputPath);

  console.log(`Created poster: ${outputPath}`);
}

async function run() {
  for (const item of testimonials) {
    await createPoster(item);
  }
  console.log('All 7 testimonial posters created successfully!');
}

run().catch(console.error);
