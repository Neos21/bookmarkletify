# Bookmarkletify : @neos21/bookmarkletify

[![NPM Version](https://img.shields.io/npm/v/@neos21/bookmarkletify.svg)](https://www.npmjs.com/package/@neos21/bookmarkletify)

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


## Author

[Neo](http://neo.s21.xrea.com/) ([@Neos21](https://twitter.com/Neos21))

- [GitHub - bookmarkletify](https://github.com/Neos21/bookmarkletify)
- [npm - @neos21/bookmarkletify](https://www.npmjs.com/package/@neos21/bookmarkletify)


## Links

- [Neo's World](http://neo.s21.xrea.com/)
- [Corredor](http://neos21.hatenablog.com/)
- [Murga](http://neos21.hatenablog.jp/)
- [El Mylar](http://neos21.hateblo.jp/)
- [Neo's GitHub Pages](https://neos21.github.io/)
- [GitHub - Neos21](https://github.com/Neos21/)
