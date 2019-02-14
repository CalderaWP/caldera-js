const express = require('express')
const next = require('next')
const api = require('./operations/getItem')
require('dotenv').load();

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler();

const proxies = require('../server/proxies');
const {wpApp, wpCss} = proxies;
const {routers, appServer} = require('../server');


app.prepare().then(() => {
	const server = express();

	// Set up home page as a simple render of the page.
	server.get('/', (req, res) => {
		return app.render(req, res, '/', req.query)
	});

	server.use(appServer);

	// Serve the item webpage with next.js as the renderer
	server.get('/message', (req, res) => {
		app.render(req, res, '/message')
	});

	server.use(wpApp.path, wpApp.proxy);
	server.use(wpCss.path, wpCss.proxy);

	// Fall-back on other next.js assets.
	server.get('*', (req, res) => {
		return handle(req, res)
	})
	server.listen(3000, err => {
		if (err) throw err
		console.log('> Ready on http://localhost:3000')
	})


})
