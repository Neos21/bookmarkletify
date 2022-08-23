import { minify } from 'uglify-js';

/**
 * Bookmarkletify
 * 
 * @param {string} input JavaScript Code
 * @return {string} Uglified JavaScript Code
 */
const bookmarkletify = (input = '') => {
  if(Object.prototype.toString.call(input) !== '[object String]') throw new Error('Input is not a string');
  input = input.trim().replace((/^javascript:/), '');  // Remove `javascript:` Protocol
  const { code, error } = minify(input);
  if(error) throw error;
  return code.startsWith('(') && code.endsWith(');')  // IIFE
    ? `javascript:${code}`
    : `javascript:(()=>{${code.replace((/;$/), '')}})();`;
};

export { bookmarkletify };  // Named Export
