const Message = require( './sendgrid/Message' );

module.exports = (Sendgrid = null, router = new Router()) => {
	router.post('/', (req, res) => {
		try{
			const message = new Message(req.body);
		}catch (e) {
			res.status = 500;
			res.send({message: e, error: true});
		}
		const request = Sendgrid.emptyRequest(message);
		Sendgrid.API(request, function(error, response) {
			if (error) {
				res.status = 500;
				res.send({message: e, error: true});
			} else {
				res.status = 201;
				res.send({message: 'Message Sent', error: false});
			}
		});
	})



};
