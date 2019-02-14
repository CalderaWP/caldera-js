const fetch = require("isomorphic-unfetch");
const {Router} = require( 'express')
const Message = require( './sendgrid/Message' );
module.exports = (Sendgrid, router = new Router()) => {
	router.post('/', async (req, res) => {
		const {layoutId,formId,entryId} = req.body;
		if( layoutId ){
			try {
				process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
				const layoutRequest = await fetch(`http://localhost:3000/message?layoutId=${layoutId}&entryId=${entryId}&formId=${formId}`, {
					headers: {Accept: 'application/json'}
				});
				const html = await layoutRequest.text();
				req.body.message = html;
			} catch (e) {
				return res.send({message: e, error: true});
			}
		}

		try {
			const message = new Message(req.body);
			//return res.send( message );
			//https://sendgrid.com/docs/API_Reference/Web_API_v3/Mail/index.html
			const request = Sendgrid.emptyRequest(message);
			Sendgrid.API(request, function(error, response) {
				if (error) {
					res.setStatus = 502;
					return res.send({message: error, error: true});
				} else {
					res.status = 201;
					return res.send({message: 'Message Sent', error: false});
				}
			});
		} catch (e) {
			res.status = 501;
			return res.send({message: e, error: true});
		}










	})

	return router;


};
