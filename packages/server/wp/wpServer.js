const express = require('express')
const wpServer = require( './wpServer');
const dev = process.env.NODE_ENV !== 'production'
const wpRouter = require( './wpRouter');

const port = process.env.PORT || 8001
const ROOT_URL = `http://localhost:${port}`;

const app = express();

app.use( '/api',wpRouter);
app.listen(port, err => {
	if (err) throw err
	console.log(`> Ready on ${ROOT_URL}`) // eslint-disable-line no-console
})

