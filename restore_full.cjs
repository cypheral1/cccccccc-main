const fs = require('fs');

let html = fs.readFileSync('original.html', 'utf8');

// Inject the observer script into the head
if (!html.includes('ciccada_injection.js')) {
    html = html.replace('</head>', `    <script src="ciccada_injection.js"></script>\n</head>`);
}

// Write it to index.html
fs.writeFileSync('index.html', html);
console.log('Restored index.html from original.html and injected ciccada_injection.js');
