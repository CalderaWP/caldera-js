module.exports = function(serverRoot){
	const pagesDir = `${serverRoot}/content/pages/`;

	const fs = require('fs');
	const cachedPages = [];
	fs.readdirSync(pagesDir).forEach(file => {
		const filePath = pagesDir + file;
		if (fs.existsSync(filePath)) {
			cachedPages.push(require(filePath));
		}
	})

	return cachedPages;
}
