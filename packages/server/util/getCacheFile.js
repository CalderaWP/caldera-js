const fs = require('fs');
const cacheFileName = require( './cacheFileName');
module.exports = function (serverRoot, pageSlug ){
	return require(cacheFileName(serverRoot, pageSlug));
}
