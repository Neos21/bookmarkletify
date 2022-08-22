import uglifyJs from 'uglify-js';

/**
 * Bookmarkletify
 * 
 * @param {string} input JavaScript Code
 * @return {string} Uglified JavaScript Code
 */
export function bookmarkletify(input = '') {
  // Remove `javascript:` Protocol
  input = input.trim().replace((/^javascript:/), '');
  
  // Uglify
  const result = uglifyJs.minify(input);
  if(result.error) throw result.error;
  
  const minified = result.code;
  if(minified.startsWith('(') && minified.endsWith(');')) {
    // 即時関数で囲まれている場合は `javascript:` プロトコルを付与する
    return `javascript:${minified}`;
  }
  else {
    // 即時関数で囲まれていなければ末尾のセミコロンを除去し即時関数でラップする
    return `javascript:(()=>{${minified.replace((/;$/), '')}})();`;
  }
}
