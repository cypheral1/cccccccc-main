const fs = require('fs');
const path = require('path');

const srcFile = '/home/sairaj-s-den/.gemini/antigravity/brain/a66fd4e6-a126-40c7-8388-b3c003c96e2e/media__1786792043756.png';
const dest1 = path.join(__dirname, 'images', 'sameer_chavan.png');
const dest2 = path.join(__dirname, 'images', '19VQ8lou0fXJZWptw2sdg9sw.png');

fs.copyFileSync(srcFile, dest1);
fs.copyFileSync(srcFile, dest2);

console.log('Successfully copied Sameer Chavan photo to images/sameer_chavan.png and images/19VQ8lou0fXJZWptw2sdg9sw.png');
