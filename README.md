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
* `name` (string) - name to use for UMD exports (required if `type` is `umd`)
* `useFilename` (boolean) - if `name` is not supplied for UMD exports and this is true, the UMD name will be set to the filename without the extension
* `strict` (boolean) - whether to use [strict mode](https://github.com/Rich-Harris/esperanto/wiki/Strict-mode)
* `sourceMap` (`true` or `'inline'`) - whether to create a sourcemap

## License

MIT. Copyright 2014 Rich Harris
