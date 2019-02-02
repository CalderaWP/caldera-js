var validator = require("email-validator");

const isEmail = (email) => validator.validate(email);

module.exports = function EmailAddress(email) {
	if( 'string' === typeof email && isEmail(email)){
		return {email,name:''};
	}
	if( 'object' === typeof email
		&& email.hasOwnProperty('email')
		&& isEmail(email.email)
	){
		return {email:email.email, name: email.name || '' }
	}
	throw  'Invalid email';
};
