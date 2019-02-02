const fs = require('fs');
const cacheFileName = require( './cacheFileName');
module.exports = function cachePage(dirName, page) {
	const {slug} = page;
	const fileName = cacheFileName(dirName, slug);
	fs.writeFileSync(fileName, JSON.stringify(page));
	return fileName;
};
