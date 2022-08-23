# @neos21/bookmarkletify : Bookmarkletify

[![NPM Version](https://img.shields.io/npm/v/@neos21/bookmarkletify.svg)](https://www.npmjs.com/package/@neos21/bookmarkletify) [![GPR Version](https://img.shields.io/github/package-json/v/neos21/bookmarkletify?label=github)](https://github.com/Neos21/bookmarkletify/pkgs/npm/bookmarkletify)

JavaScript コードを Bookmarklet 形式に圧縮・変換します。


## CLI Usage

```bash
$ npm install -g @neos21/bookmarkletify

# Input From File
$ bookmarkletify -i ./my-file.js
$ bookmarkletify --input ./my-file.js

# Input From Arguments
$ bookmarkletify "console.log('Test');"
javascript:(()=>{console.log("Test")})();
# Example Output
```


## API Usage

```javascript
// CJS
const bookmarkletify = require('@neos21/bookmarkletify');
// ESM
import { bookmarkletify } from '@neos21/bookmarkletify';

const input = `javascript:
  ((doc) => {
    let elem = doc.querySelector('#test');
    if(elem) {
      console.log(elem.value);
    }
  })(document);
`;

try {
  const uglified = bookmarkletify(input);
  console.log(uglified);
}
catch(error) {
  console.error(error);
}
```


## Links

- [Neo's World](https://neos21.net/)
- [GitHub - Neos21](https://github.com/Neos21/)
- [GitHub - bookmarkletify](https://github.com/Neos21/bookmarkletify)
- [GitHub Pages - @neos21/bookmarkletify : Bookmarkletify](https://neos21.github.io/bookmarkletify)
- [npm - @neos21/bookmarkletify](https://www.npmjs.com/package/@neos21/bookmarkletify)
