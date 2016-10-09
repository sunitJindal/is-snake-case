# Snake Case

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Verify given string follows snake case naming.

## Installation

```
npm install is-snake-case --save
```

## Usage

```javascript
var isSnakeCase = require('is-snake-case')

isSnakeCase('foo_bar')       //=> true
isSnakeCase('foobar')        //=> true
isSnakeCase('foo__bar')      //=> false
isSnakeCase('Foo_bar')       //=> false
```


## License

MIT

[npm-image]: https://img.shields.io/npm/v/is-snake-case.svg?style=flat
[npm-url]: https://npmjs.org/package/is-snake-case
[downloads-image]: https://img.shields.io/npm/dm/is-snake-case.svg?style=flat
[downloads-url]: https://npmjs.org/package/is-snake-case
[travis-image]: https://img.shields.io/travis/sunitJindal/is-snake-case.svg?style=flat
[travis-url]: https://travis-ci.org/sunitJindal/is-snake-case
[coveralls-image]: https://img.shields.io/coveralls/sunitJindal/is-snake-case.svg?style=flat
[coveralls-url]: https://coveralls.io/github/sunitJindal/is-snake-case?branch=master