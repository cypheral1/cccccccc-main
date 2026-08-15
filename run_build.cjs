const { execSync } = require('child_process');
execSync('node build.cjs', { stdio: 'inherit' });
console.log('Build executed cleanly.');
