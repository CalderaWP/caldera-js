const proxy = require('http-proxy-middleware');

const wpApp = {
	path: '/wp-json',
	proxy: proxy({
		target: 'https://caldera.lndo.site',
		changeOrigin: true,
		secure: false
	})
};

const wpCss = {
	path:
		'/wp-admin/load-styles.php',
	proxy: proxy({
		target: 'https://caldera.lndo.site',
		changeOrigin: true,
		secure: false
	})
};

const serverPass = {
	path: '/caldera-api/v2',
	proxy: proxy({
		target: 'http://localhost:5000',
		changeOrigin: true,
		secure: false
	})
};

module.exports = {
	wpApp,
	wpCss,
	serverPass
}


