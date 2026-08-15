const fs = require('fs');
const https = require('https');

https.get('https://dynamic-code-579091.framer.app/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Extract ALL <script> tags from the end of the body
    const scriptRegex = /<script type="module" data-framer-ssr-hydrate="" src="[^"]+"><\/script>/i;
    const match = data.match(scriptRegex);
    if (match) {
      let html = fs.readFileSync('index.html', 'utf8');
      if (!html.includes('data-framer-ssr-hydrate')) {
        html = html.replace('</body>', match[0] + '\n</body>');
        fs.writeFileSync('index.html', html);
        console.log('Restored: ' + match[0]);
      } else {
        console.log('Hydration scripts already present.');
      }
    } else {
      console.log('No match found for hydration script!');
      // Let's just find anything ending in .mjs
      const mjsRegex = /<script type="module" src="[^"]+\.mjs"><\/script>/g;
      const mjsMatch = data.match(mjsRegex);
      if (mjsMatch) {
          console.log('Found generic .mjs: ' + mjsMatch[0]);
      }
    }
  });
});
