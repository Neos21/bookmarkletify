#!/usr/bin/env node

import fs from 'node:fs';

import { Command } from 'commander';

///import packageJson from './package.json' assert { type: 'json' };
import { bookmarkletify } from './index.js';

const program = new Command();
program
  .requiredOption('-i, --input <inputFilePath>', 'Input JavaScript file path')
  .version('0.0.5', '-v, --version', 'Print the current version')
  .parse();
console.log(program.args);


/**
 * bookmarkletify を実行し正常終了させる
 * 
 * @param {string} input JavaScript コード文字列
 */
const execBookmarkletify = (input = '') => {
  const result = bookmarkletify(input);
  console.log(result);
};

/**
 * エラー時の処理
 * 
 * @param {*} error エラーオブジェクト
 */
const onError = error => {
  console.error(error);
  return process.exit(1);
};

//commander.description('bookmarkletify');
//commander.version(packageJson.version, '-v, --version');

// ファイルを読み込んで実行する
//commander.option('-i, --input <inputFilePath>', 'From JavaScript file', inputFilePath => {
//  try {
//    const input = fs.readFileSync(inputFilePath, 'utf-8');
//    execBookmarkletify(input);
//  }
//  catch(error) {
//    onError(error);
//  }
//});
//
//commander.parse(process.argv);
//if(!commander.args.length) {
//  commander.help();
//}
//else {
//  // 引数を全て結合して実行する
//  try {
//    const input = commander.args.join(' ');
//    execBookmarkletify(input);
//  }
//  catch(error) {
//    onError(error);
//  }
//}
//