/**
 * Get a promise that can discover a WordPress site's REST API
 * @return {Promise<*>}
 */
async function getWpSite(url) {
	//http://wp-api.org/node-wpapi/using-the-client/#self-signed-insecure-https-certificates
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
	const site = await require('wpapi').discover(url);
	return site;
}


module.exports = getWpSite;
