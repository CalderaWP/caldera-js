
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').load();

const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const roy = require( './routers/roy' );
const pages = require( './routers/wp-pages' );

app.use(`/caldera-api/v2/roy`,roy());
app.get('/', function(req, res) {
	res.json( {hi:'roy'});
});

app.listen(port, () => {
	console.log(`http://localhost:${port}`)
	console.log(`Listening on port ${port}`)
});
