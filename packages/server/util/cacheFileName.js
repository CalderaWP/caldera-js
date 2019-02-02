const fs = require('fs');

module.exports = function (serverRoot, pageSlug){
	return `${serverRoot}/content/pages/${pageSlug}.json`;
}
