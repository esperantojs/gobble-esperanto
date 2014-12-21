module.exports = esperanto;

var path = require( 'path' );

var methods = {
	amd: 'toAmd',
	cjs: 'toCjs',
	umd: 'toUmd'
};

function esperanto ( es6, options ) {
	var method = methods[ options.type || 'amd' ];

	if ( !method ) {
		throw new Error( 'The gobble-esperanto plugin supports the following types: ' + Object.keys( methods ).join( ', ' ) );
	}

	if ( !!options.sourceMap ) {
		options.sourceMapSource = this.src;
		options.sourceMapFile = this.dest;
	}

	if ( options.type === 'umd' && !options.name && options.useFilename ) {
		options.name = path.basename( this.filename, '.js' );
	}

	return require( 'esperanto' )[ method ]( es6, options );
}

esperanto.defaults = {
	accept: '.js'
};
