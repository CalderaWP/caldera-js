const _ = require( 'lodash' );

module.exports = function( request ) {
	return request.then(function( response ) {
		if ( ! response._paging || ! response._paging.next ) {
			return response;
		}
		// Request the next page and return both responses as one collection
		return Promise.all([
			response,
			getAll( response._paging.next )
		]).then(function( responses ) {
			return _.flatten( responses );
		});
	});
}
