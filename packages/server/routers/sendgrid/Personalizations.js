const EmailAddress = require('./EmailAddress');
var validator = require("email-validator");

const isEmail = (email) => validator.validate(email);


const checkEmail = (email) => {
	const prepared = [];
	if (Array.isArray(email)) {
		email.forEach(em => {
			try {
				const obj = new EmailAddress(em);
				prepared.push(obj);
			} catch (e) {

			}

		});
		return prepared;
	}
	try {
		return [new EmailAddress(email)];
	} catch (e) {

	}
};


module.exports = function Personalizations(
	{
		to,
		subject,
		cc = null,
		bcc = null,
	}
) {

	to = new EmailAddress(to);

	let message = {
		to,
		subject
	};

	try {
		message.cc = checkEmail(cc);
	} catch (e) {

	}

	try {
		message.bcc = checkEmail(bcc);
	} catch (e) {
	}

	return message;
}
