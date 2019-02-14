const EmailAddress = require('../routers/sendgrid/EmailAddress');
const Personalizations = require('../routers/sendgrid/Personalizations');
const Message = require('../routers/sendgrid/Message');
describe('email address formatter', () => {
	it('should format a string as email if its valid', () => {
		const email = new EmailAddress('roy@hiroy.club');
		expect(email).toEqual({email: 'roy@hiroy.club', name: ''});
	});

	it('should work with objects that are missing name', () => {
		const email = new EmailAddress({email: 'roy@hiroy.club'});
		expect(email).toEqual({email: 'roy@hiroy.club', name: ''});
	});

	it('should work with objects that include  name', () => {
		const email = new EmailAddress({email: 'roy@hiroy.club', name: 'Roy Sivan'});
		expect(email).toEqual({email: 'roy@hiroy.club', name: 'Roy Sivan'});
	});

	it('should throw exception if passed string without a valid email', () => {
		try {
			const email = new EmailAddress('Harry Potter');
			expect(1).toBe(2);
		} catch (e) {
			expect(typeof e).toBe('string');
		}
	});

	it('should throw exception if passed an object without a valid email', () => {
		try {
			const email = new EmailAddress({email: 'Harry Potter'});
			expect(1).toBe(2);
		} catch (e) {
			expect(typeof e).toBe('string');
		}
	});

	it( 'handles 2 strings in an array', () => {
		const email = new EmailAddress([ 'cc1@email.com', 'cc2@email.com' ]);
		expect(email.length).toBe(2);
		expect(email[0].email).toBe( 'cc1@email.com' );
		expect(email[1].email).toBe( 'cc2@email.com' );
	});

	it( 'handles mixed types', () => {
		const email = new EmailAddress([
			{email:'cc1@email.com'},
			{email: 'cc2@email.com', name: 'Name 2'},
			'cc3@email.com'
		]);
		expect(email.length).toBe(3);
		expect(email[0].email).toBe( 'cc1@email.com' );
		expect(email[1].email).toBe( 'cc2@email.com' );
		expect(email[2].email).toBe( 'cc3@email.com' );
		expect(email[0].name).toBe( '' );
		expect(email[1].name).toBe( 'Name 2' );
		expect(email[2].name).toBe( '' );
	})
});
describe('Personalization', () => {
	test('Prepares to', () => {
		const data = {
			to: 'to@one.com',
			subject: 'Welcome To Step 7',
			cc: ['cc1@e.com', 'cc2@e.com'],
			bcc: ['bcc1@e.com', 'bcc2@e.com'],
		}
		const p = new Personalizations(data);
		const to = p[0].to;
		expect(Array.isArray(to)).toBe(true);

	});

	test('Prepares subject', () => {
		const subject =  'Welcome To Step 7';
		const data = {
			to: 'to@one.com',
			subject,
			cc: ['cc1@e.com', 'cc2@e.com'],
			bcc: ['bcc1@e.com', 'bcc2@e.com'],
		}
		const p = new Personalizations(data);
		const preparedSubject = p[1];
		expect(typeof preparedSubject).toBe('object');
		expect( preparedSubject.subject ).toEqual(subject);

	});

	test.only('emails from string with array of ccs and bccs', () => {
		const data = {
			to: 'to@one.com',
			subject: 'Welcome To Step 7',
			cc: ['cc1@e.com', 'cc2@e.com'],
			bcc: ['bcc1@e.com', 'bcc2@e.com'],
		}
		const p = new Personalizations(data);
		console.log(p);
		expect(typeof subject).toBe('string');
		expect(p.cc[0].email).toBe('cc1@e.com');
		expect(p.cc[1].email).toBe('cc2@e.com');
		expect(p.bcc[0].email).toBe('bcc1@e.com');
		expect(p.bcc[1].email).toBe('bcc2@e.com');
	});

	test('emails from objects with array of ccs and bccs', () => {
		const data = {
			to: {email: 'to@1.com', name: 'To Name'},
			subject: 'Welcome To Step 7',
			cc: [
				{email: 'cc1@e.com', name: 'CC1'},
				{email: 'cc2@e.com'},
			],
			bcc: [
				{email: 'bc1@e.com'},
				{email: 'bc2@e.com', name: 'BC2'},
			],
		}
		const p = new Personalizations(data)
		expect(typeof p.to).toBe('object');
		expect(typeof p.subject).toBe('string');
		expect(p.cc[0].name).toBe('CC1');
		expect(p.cc[1].name).toBe('');
		expect(p.bcc[1].name).toBe('BC2');
		expect(p.bcc[0].email).toBe('bc1@e.com');

	});

	it('Handles missing CC', () => {
		const data = {
			to: {email: 'to@1.com', name: 'To Name'},
			subject: 'Welcome To Step 7',
			bcc: [
				{email: 'bc1@e.com'},
				{email: 'bc2@e.com', name: 'BC2'},
			],
		}
		const p = new Personalizations(data)
		expect(typeof p.to).toBe('object');
		expect(typeof p.subject).toBe('string');
		expect(typeof p.cc).toBe('undefined');
		expect(p.bcc[1].name).toBe('BC2');
		expect(p.bcc[0].email).toBe('bc1@e.com');

	});

	test('Handles missing BCC', () => {
		const data = {
			to: {email: 'to@1.com', name: 'To Name'},
			subject: 'Welcome To Step 7',
			cc: [
				{email: 'cc1@e.com', name: 'CC1'},
				{email: 'cc2@e.com'},
			],

		};
		const p = new Personalizations(data)
		expect(typeof p.to).toBe('object');
		expect(typeof p.subject).toBe('string');
		expect(p.cc[0].name).toBe('CC1');
		expect(p.cc[1].name).toBe('');
		expect(typeof p.bcc).toBe('undefined');


	});

	test('Error if bad to', () => {
		const data = {
			to: 'sdfjfds',
			subject: 'Welcome To Step 7',
			cc: [
				{email: 'cc1@e.com', name: 'CC1'},
				{email: 'cc2@e.com'},
			],

		};
		try {
			new Personalizations(data);
			expect('1').toBe('error should be thrown')
		} catch (e) {
			expect(typeof e).toBe('string');
		}

	});
});


describe('Message object', () => {
	const data = {
		replyTo: {email: 'reply@one.com', name: 'Reply Name'},
		message: '<div>Hello!</div>',
		attatchments: [],
		to: 'to@one.com',
		subject: 'Welcome To Step 7',
		cc: ['cc1@e.com', 'cc2@e.com'],
		bcc: ['bcc1@e.com', 'bcc2@e.com'],
	};

	test('Method is post', () => {
		const m = new Message(data);
		const {method} = m;
		expect(method).toBe('POST');
	});
	test('path is correct', () => {
		const m = new Message(data);
		const {path} = m;
		expect(path).toBe('/v3/mail/send');
	});
	test('body is correct type', () => {
		const m = new Message(data);
		const {body} = m;
		expect(typeof body).toBe('object');
	});
	test('body has the right parts', () => {
		const m = new Message(data);
		const {body} = m;
		expect(typeof body.reply_to).toBe('object');
		expect(typeof body.personalizations).toBe('object');
		expect(typeof body.from).toBe('object');
		expect(Array.isArray( body.content)).toEqual(true);
	});

	test('body content has the right parts', () => {
		const m = new Message(data);
		const {content} = m.body;
		expect( content[0].type ).toBe('text/html');
		expect( content[0].value ).toBe(data.message);

	});

	test('body content can be set to plain', () => {
		let thisData = Object.assign({}, data );
		thisData.contentType = 'text/plain';
		expect(thisData.contentType).toBe( 'text/plain');
		const m = new Message(thisData);
		const {content} = m.body;
		expect( content[0].type ).toBe('text/plain');
	});

	test('body content can only be set to plain or html', () => {
		let thisData = Object.assign({}, data );
		thisData.contentType = 'application/javascript';
		expect(thisData.contentType).toBe( 'application/javascript');
		const m = new Message(thisData);
		const {content} = m.body;
		expect( content[0].type ).toBe('text/html');
	});
});


