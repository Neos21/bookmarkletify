#!/usr/bin/env node

import fs from 'node:fs';

import { bookmarkletify } from './esm.mjs';

(() => {
  if(process.argv.length <= 2) return console.warn('Please input a JavaScript code or file path by \'-i\' (\'--input\') option.');
  try {
    const input = process.argv.length === 4 && ['-i', '--input'].includes(process.argv[2])
      ? fs.readFileSync(process.argv[3], 'utf-8')  // From File
      : process.argv.slice(2).join(' ');           // From Arguments
    console.log(bookmarkletify(input));
  }
  catch(error) {
    console.error(error);
    process.exit(1);
  }
})();
