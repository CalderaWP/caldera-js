const hiRoy = require( './routers/roy' );
const wpPages = require( './routers/wp-pages' );
const sendgrid = require( './routers/sendgrid');
const routers = {
	hiRoy,wpPages,
	sendgrid
};
const appServer = require('./app');
module.exports = {
	routers,
	appServer
};
