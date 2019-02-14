const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').load();

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sendgridRouter = require( './routers/sendgrid');
const roy = require( './routers/roy' );
const pages = require( './routers/wp-pages' );
const sendgridApiClient = require('sendgrid')(
	process.env.SENDGRID_API_KEY
);
app.use(`/caldera-api/v2/roy`,roy());
app.use(`/caldera-api/v2/send`,sendgridRouter(sendgridApiClient));
app.get('/', function(req, res) {
	res.json( {hi:'roy'});
});

module.exports = app;
