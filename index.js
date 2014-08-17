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
