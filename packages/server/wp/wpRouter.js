const express = require( 'express' );
const router = express.Router()
const fs = require('fs');


/**
 * Get a promise that can discover a WordPress site's REST API
 * @return {Promise<*>}
 */
async function getSite() {
	//const config = require('../config' );
	const config = {API_URL: 'https://calderaforms.com'};
	const site = await require('wpapi').discover('http://localhost:8118/');
	return site;
}



/**
 * Not found response
 * @type {{code: string, message: string, data: {status: number}}}
 */
const notFound = {
	code: "rest_post_invalid_id",
	message: "Invalid post ID.",
	data: {
		status: 404
	}
};

let reqTime = '';

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
	reqTime = Date.now();
	next()
});


// define the home page route
router.get('/', function (req, res) {
	res.send({api:true})
});


/**
 * Post Route
 */
router.get("/posts",async (req, res) => {
	try{
		const site = await require('wpapi').discover('http://localhost:8118/');
		const {page} = req.query;
		try{
			const posts = await site.posts().page(page || 1);
			posts.forEach( post => {

			});
			res.send(posts);

		}catch (e) {
			res.status(500);
			return res.json(e);
		}
	}catch (e) {
		res.status(500);
		return res.json(e);
	}

});

router.get("/posts/:postName",async (req, res) => {
	const {postName} = req.params;
	const path = require('path');
	const cachePath = path.join(__dirname, '../../..', `/wp-json-content/post/${postName}`);
	const exists = fs.existsSync(cachePath);
	if (exists) {
		const post = require(cachePath);
		res.json(post);
	} else {
		try{
			const site = await require('wpapi').discover('http://localhost:8118/');
			try{
				const post = await site.posts().slug(postName);
				if( post.length ){
					await fs.writeFileSync(cachePath,JSON.stringify(post[0]));
					return res.json(post[0]);
				}
				res.status(404);
				res.json(notFound);
			}catch (e) {

				res.status(500);
				return res.json(e);
			}
		}catch (e) {
			res.status(500);
			return res.json(e);
		}
	}

});

router.get("/pages/:pageName",async (req, res) => {

	const {pageName} = req.params;
	res.send(pageName);
	const path = require('path');
	const cachePath = path.join(__dirname, '../../..', `/wp-json-content/page/${pageName}`);
	const exists = fs.existsSync(cachePath);
	if (exists) {
		const post = require(cachePath);
		res.json(post);
	} else {
		try{
			const site = await require('wpapi').discover('http://localhost:8118/');
			try{
				const pages = site.pages().path( pageName );
				if( pages.length ){
					await fs.writeFileSync(cachePath,JSON.stringify(pages[0]));
					return res.json(pages[0]);
				}
				res.status(404);
				res.json(notFound);
			}catch (e) {

				res.status(500);
				return res.json(e);
			}
		}catch (e) {
			res.status(500);
			return res.json(e);
		}
	}

});

router.get("/",async (req, res) => {
	const routes = [];
	res.json(router.stack);

});





module.exports = router



