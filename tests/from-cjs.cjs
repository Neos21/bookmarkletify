const fs = require('node:fs');

const bookmarkletify = require('../cjs.cjs');

console.log('Tests : From CJS : Use cjs.cjs\n');
const nums = [...Array(3)].map((_, i) => ++i);
const total = nums.length;

const { passed, failed } = nums.reduce((result, num) => {
  try {
    const input = fs.readFileSync(`./tests/input-${num}.js.txt`, 'utf-8');
    const output = bookmarkletify(input);
    if(output.startsWith('javascript:')) {
      console.log(`[${num}] OK : ${output}`);
      ++result.passed;
    }
    else {
      console.error(`[${num}] NG : ${output}`);
      ++result.failed;
    }
  }
  catch(error) {
    console.error(`[${num}] NG : Error : `, error);
    ++result.failed;
  }
  return result;
}, { passed: 0, failed: 0 });

console.log(`
Total  : [${total}]
Passed : [${passed}]
Failed : [${failed}]
`);
if(passed === total) {
  console.log('All Passed!');
}
else {
  console.error('Some Tests Failed...');
  process.exit(1);
}
