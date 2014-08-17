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

* `type` (string) - 'amd' or 'cjs'. Default to 'amd'
* `defaultOnly`, `indent`, `addUseStrict` - see the [esperanto documentation](https://github.com/rich-harris/esperanto#usage) for more info

## Source code

```js
module.exports = esperanto;

var methods = {
  amd: 'toAmd',
  cjs: 'toCjs'
};

function esperanto ( es6, options ) {
  var method = methods[ options.type || 'amd' ];

  if ( !method ) {
    throw new Error( 'The gobble-esperanto plugin supports the following types: amd, cjs' );
  }

  return require( 'esperanto' )[ method ]( es6, options );
}

esperanto.defaults = {
  accept: '.js'
};
```


## License

MIT. Copyright 2014 Rich Harris
