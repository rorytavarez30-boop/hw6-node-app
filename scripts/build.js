// Copies the app into dist/ and writes build info - the "final artifact".
const fs = require('node:fs');
const path = require('node:path');
const dist = path.join(__dirname, '..', 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.cpSync(path.join(__dirname, '..', 'src'), path.join(dist, 'src'), { recursive: true });
fs.copyFileSync(path.join(__dirname, '..', 'package.json'), path.join(dist, 'package.json'));
fs.writeFileSync(path.join(dist, 'BUILD_INFO.txt'),
  `build=${process.env.BUILD_NUMBER || 'local'}\ncommit=${process.env.GIT_COMMIT || 'n/a'}\ndate=${new Date().toISOString()}\n`);
console.log('Build complete -> dist/');
