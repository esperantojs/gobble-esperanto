# gobble-esperanto

Convert ES6 modules to AMD and CommonJS with gobble and [esperanto](https://github.com/rich-harris/esperanto).

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-esperanto
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'js' ).map( 'esperanto', options );
```

The `options` object can have the following properties:

* `type` (string) - 'amd', 'cjs' or 'umd'. Default to 'amd'
* `strict` - see the [esperanto documentation](https://github.com/rich-harris/esperanto/wiki/Strict-mode) for more info


## License

MIT. Copyright 2014 Rich Harris
