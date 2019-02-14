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

	let data = [
		{to:[to]},
		{subject: subject}
	];

	return data;

	if( cc ){
		try{
			cc = new EmailAddress(cc);
			data = {
				...data,
				cc
			}
		}catch (e) {
			console.log(e)
		}
	}

	if( bcc ){
		try{
			bcc = new EmailAddress(bcc);
			data = {
				...data,
				bcc
			}
		}catch (e) {
			console.log(e)
		}
	}


	return data;
}
