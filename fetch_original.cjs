const fs = require('fs');
fetch('https://dynamic-code-579091.framer.app/')
  .then(res => res.text())
  .then(text => {
    fs.writeFileSync('original.html', text);
    console.log('Saved to original.html');
  })
  .catch(err => console.error(err));
