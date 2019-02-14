var validator = require("email-validator");

const isEmail = (email) => validator.validate(email);

module.exports = function EmailAddress(email) {
	if( 'string' === typeof email && isEmail(email)){
		return {email,name:''};
	}
	if( Array.isArray(email)){
		const formatted = [];
		email.forEach( e => {
			formatted.push(new EmailAddress(e));
		});
		return formatted;
	}


	if( 'object' === typeof email
		&& email.hasOwnProperty('email')
		&& isEmail(email.email)
	){
		return {email:email.email, name: email.name || '' }
	}

	throw  `Invalid email - ${email}`;
};
