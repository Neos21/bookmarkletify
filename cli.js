#!/usr/bin/env node

const fs = require('fs');
const commander = require('commander');

const packageJson   = require('./package.json');
const bookmarkletify = require('./main');

/**
 * bookmarkletify を実行し正常終了させる
 * 
 * @param {string} input JavaScript コード文字列
 */
function execBookmarkletify(input) {
  const result = bookmarkletify(input);
  console.log(`\n${result}\n`);
  return process.exit();
}

/**
 * エラー時の処理
 * 
 * @param {*} error エラーオブジェクト
 */
function onError(error) {
  console.error(error);
  return process.exit(1);
}

commander.description('bookmarkletify');
commander.version(packageJson.version, '-v, --version');

// ファイルを読み込んで実行してみる
commander.option('-i, --input <inputFilePath>', 'From JavaScript file', (inputFilePath) => {
  try {
    const input = fs.readFileSync(inputFilePath, 'utf-8');
    execBookmarkletify(input);
  }
  catch(error) {
    onError(error);
  }
});

commander.parse(process.argv);

if(commander.args.length === 0) {
  commander.help();
  return;
}

// 引数を全て結合して実行してみる
try {
  const input = commander.args.join(' ');
  execBookmarkletify(input);
}
catch(error) {
  onError(error);
}
