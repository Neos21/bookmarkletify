const uglifyEs = require('uglify-es');

/**
 * Bookmarkletify
 * 
 * @param {string} input JavaScript コード文字列
 */
function bookmarkletify(input) {
  let trimedImput = input.trim();
  
  // javascript: プロトコルが記述されている場合は除去する
  if(trimedImput.startsWith('javascript:')) {
    trimedImput = trimedImput.replace((/^javascript:/), '');
  }
  
  // Uglify
  const result = uglifyEs.minify(trimedImput);
  
  if(result.error) {
    throw result.error;
  }
  
  const minified = result.code;
  
  if(minified.startsWith('(') && minified.endsWith(');')) {
    // 即時関数で囲まれている場合は javascript: プロトコルを付与する
    return `javascript:${minified}`;
  }
  else {
    // 即時関数で囲まれていなければ末尾のセミコロンを除去し即時関数でラップする
    return `javascript:(()=>{${minified.replace((/;$/), '')}})();`;
  }
}

module.exports = bookmarkletify;
