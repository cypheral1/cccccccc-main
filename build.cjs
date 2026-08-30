const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');

// Create dist if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

const copyRecursiveSync = (src, dest) => {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

// Directories to copy
const dirsToCopy = ['images', 'fonts', 'css'];
dirsToCopy.forEach(dir => {
  const src = path.join(__dirname, dir);
  const dest = path.join(distDir, dir);
  if (fs.existsSync(src)) {
    copyRecursiveSync(src, dest);
  }
});

// Files to copy
const filesToCopy = ['index.html', 'ciccada_injection.js'];
filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    if (file === 'index.html') {
      let html = fs.readFileSync(src, 'utf8');
      
      // Remove Promo Card
      const promoStart = html.indexOf('<div class="framer-1hlgjw7"');
      const promoEnd = html.indexOf('<div id="template-overlay"></div>', promoStart);
      if (promoStart !== -1 && promoEnd !== -1) {
        html = html.substring(0, promoStart) + html.substring(promoEnd);
      }

      // Replace title, meta tags, founder photo, and bio text
      html = html.replace(/<title>[^<]*<\/title>/g, '<title>Ciccada Tech — Cybersecurity Platform</title>');
      html = html.replace(/content="Lumora AI[^"]*"/g, 'content="Ciccada Tech — Cybersecurity Platform"');
      html = html.replace(/Launch a premium AI automation agency website with Lumora AI[^"]*/g, 'Enterprise cybersecurity visibility and detection platform by Ciccada Technology');
      html = html.replace(/https:\/\/framerusercontent\.com\/images\/19VQ8lou0fXJZWptw2sdg9sw\.png[^\"]*/g, 'images/sameer_chavan.png');
      html = html.replace(/https:\/\/framerusercontent\.com\/images\/iecljx2VuDSHgMWYnaVAorc4\.svg[^\"]*/g, 'images/ciccada_logo.svg');
      html = html.replace(/8 yrs/g, 'Young Founder');
      html = html.replace(/Shipping production AI and automation systems/g, 'Building mission-critical cybersecurity systems');
      html = html.replace(/I've spent the last decade shipping AI inside startups and agencies — long before LLMs were a buzzword\. I work directly with founders, no junior team, no SOW theatre\./g, 'As a young founder and security engineer, I build high-throughput threat detection and real-time security pipelines.');
      html = html.replace(/LUMORA AI/g, 'CICCADA TECH');
      html = html.replace(/Lumora AI/g, 'Ciccada Tech');
      html = html.replace(/LUMORA/g, 'CICCADA');
      html = html.replace(/Lumora/g, 'Ciccada');
      
      fs.writeFileSync(dest, html);
    } else {
      fs.copyFileSync(src, dest);
    }
  }
});

console.log('Build completed successfully. Files copied to dist/ directory.');
