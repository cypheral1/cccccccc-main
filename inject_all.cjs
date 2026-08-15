const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const injectionScript = '<script src="ciccada_injection.js"></script>';
const framerMainScript = '<script type="module" async data-framer-bundle="main" fetchPriority="low" src="https://framerusercontent.com/sites/ErtF1QoKVPXI50jOIsWXr/script_main.BbnaUvok.mjs"></script>';

let modified = false;

if (!html.includes('ciccada_injection.js')) {
    html = html.replace('</head>', `    ${injectionScript}\n</head>`);
    modified = true;
}

if (!html.includes('data-framer-bundle="main"')) {
    html = html.replace('</body>', `    ${framerMainScript}\n</body>`);
    modified = true;
}

if (modified) {
    fs.writeFileSync('index.html', html);
    console.log('Successfully injected animations and branding observer into index.html');
} else {
    console.log('Scripts already present.');
}
