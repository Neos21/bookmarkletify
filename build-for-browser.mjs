import fs from 'node:fs';

console.log('Build For Browser (GitHub Pages)\n');
const srcLib = './node_modules/uglify-js/lib';
const dstLib = './docs/lib';

try {
  fs.statSync(dstLib);
  fs.rmSync(dstLib, { recursive: true });
} catch(_error) { /* Do Nothing */ }
fs.mkdirSync(dstLib, { recursive: true });

fs.readdirSync(srcLib)
  .filter(fileName => !['mozilla-ast.js', 'sourcemap.js'].includes(fileName))
  .forEach(fileName => {
    fs.copyFileSync(`${srcLib}/${fileName}`, `${dstLib}/${fileName}`);
    console.log(`<script src="./lib/${fileName}"></script>`);
  });

console.log(`
Copied!

<!-- Keep These Orders -->
<script src="./lib/minify.js"></script>
<script src="./lib/utils.js"></script>
<script src="./lib/ast.js"></script>
<script src="./lib/parse.js"></script>
<script src="./lib/transform.js"></script>
<script src="./lib/scope.js"></script>
<script src="./lib/output.js"></script>
<script src="./lib/compress.js"></script>
<script src="./lib/propmangle.js"></script>`);
