import { execSync } from 'node:child_process';

console.log('Tests : From CLI : Use cli.mjs\n');
const nums = [...Array(3)].map((_, i) => ++i);
const total = nums.length;

const { passed, failed } = nums.reduce((result, num) => {
  try {
    const outputShort = execSync(`node ./cli.mjs -i ./tests/input-${num}.js.txt`).toString().trim();
    const outputLong  = execSync(`node ./cli.mjs --input ./tests/input-${num}.js.txt`).toString().trim();
    if(outputShort.startsWith('javascript:') && outputLong.startsWith('javascript:') && outputShort === outputLong) {
      console.log(`[${num}] OK : ${outputLong}`);
      ++result.passed;
    }
    else {
      console.error(`[${num}] NG : ${outputLong}`);
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
