const fs = require('fs');
const original = fs.readFileSync('original.html', 'utf8');
const index = fs.readFileSync('index.html', 'utf8');

// Find the start of the style tag
const styleStart = original.indexOf('<style data-framer-css-ssr-minified');
const styleEndStr = '</style>';
const styleEnd = original.indexOf(styleEndStr, styleStart);

if (styleStart !== -1 && styleEnd !== -1) {
    const styleTag = original.substring(styleStart, styleEnd + styleEndStr.length);
    console.log('Found style tag of length: ' + styleTag.length);
    
    // Inject into index.html if not already present
    if (!index.includes('data-framer-css-ssr-minified')) {
        const injectedIndex = index.replace('</head>', `\n${styleTag}\n</head>`);
        fs.writeFileSync('index.html', injectedIndex);
        console.log('Successfully injected Framer CSS back into index.html');
    } else {
        console.log('Framer CSS already present in index.html');
    }
} else {
    console.log('Could not find style tag in original.html');
}
