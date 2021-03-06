# @neos21/bookmarkletify : Bookmarkletify

[![NPM Version](https://img.shields.io/npm/v/@neos21/bookmarkletify.svg)](https://www.npmjs.com/package/@neos21/bookmarkletify) [![GPR Version](https://img.shields.io/github/package-json/v/neos21/bookmarkletify?label=github)](https://github.com/Neos21/bookmarkletify/packages/327391)

JavaScript コードを Bookmarklet 形式に圧縮・変換します。


## CLI Usage

```sh
$ npm install -g @neos21/bookmarkletify

$ bookmarkletify --input ./my-file.js
$ bookmarkletify "console.log('Test');"
```


## API Usage

```javascript
const bookmarkletify = require('@neos21/bookmarkletify');

const input = `javascript:
  ((doc) => {
    let elem = doc.querySelector('#test');
    if(elem) {
      console.log(elem.value);
    }
  })(document);
`;

try {
  const result = bookmarkletify(input);
}
catch(error) {
  console.error(error);
}
```


## Links

- [Neo's World](https://neos21.net/)
- [GitHub - Neos21](https://github.com/Neos21/)
- [GitHub - bookmarkletify](https://github.com/Neos21/bookmarkletify)
- [npm - @neos21/bookmarkletify](https://www.npmjs.com/package/@neos21/bookmarkletify)
