const route = require( '../routers/sendgrid');

describe( 'sendgrid router', () =>{
	let res = jest.fn();
	beforeEach( () => {
		res = jest.fn();
	});

	const body = {
		to: {email: 'to@1.com', name: 'To Name'},
		subject: 'Welcome To Step 7',
		message: 'The Message'

	};

	const req = {
		body
	};

	test( '')

});
