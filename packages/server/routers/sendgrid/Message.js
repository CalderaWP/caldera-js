const EmailAddress = require( './EmailAddress');
const Personalizations = require( './Personalizations');
module.exports = function Message({
	to,
	subject,
	fromName,
	contentType = 'text/html',
	attatchments,
	message,
	replyTo,
	cc=null,
	bcc = null
				 }) {

	contentType = 'text/html'  === contentType || 'text/plain' === contentType
		? contentType
		: 'text/html';
	const personalizations = Personalizations({to, subject,cc,bcc});
	replyTo = new EmailAddress(replyTo);
	return {
		method: 'POST',
		path: '/v3/mail/send',
		body: {
			reply_to: replyTo,
			personalizations,
			from: {email: 'no-reply@calderaformspro.net', name: fromName},
			content: [
				{
					type: contentType,
					value: message
				},
			],
		},
	}
};
