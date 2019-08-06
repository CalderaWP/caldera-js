import { FORM_FIELDS_AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER } from '@calderajs/components';

const getAccount = async ({ publicKey, secretKey }) => {
	const account = await fetch(
		'http://127.0.0.1:8080/stripe/account.json'
	).then(r => r.json());
	console.log(account);
	return account;
};
const conditionals = async conditionalState => {
	let keys = false;
	if (
		conditionalState.getValue('stripePublicKey') &&
		conditionalState.getValue('stripeSecretKey')
	) {
		keys = {
			publicKey: conditionalState.getValue('stripePublicKey'),
			secretKey: conditionalState.getValue('stripeSecretKey'),
		};
		conditionalState.showField('stripeAccountName');
	} else {
		conditionalState.setValue('stripeAccountName', null);
		conditionalState.hideField('stripeAccountName');
	}

	const fields = ['price', 'email', 'firstName', 'lastName'];
	//has keys and has account name
	if (keys && conditionalState.getValue('stripeAccountName')) {
		fields.forEach(field => conditionalState.showField(field));
	} else {
		fields.forEach(field => conditionalState.hideField(field));
		//has keys, not account name
		if (keys) {
			try {
				const account = await getAccount(keys);
				console.log(account);
				conditionalState.setValue('stripeAccountName', account.id);
			} catch {
				e => console.log(e);
			}
		}
	}
};
``;
const stripeKeys = [
	{
		fieldId: 'stripePublicKey',
		fieldType: 'text',
		label: 'Stripe API Public Key',
	},
	{
		fieldId: 'stripeSecretKey',
		fieldType: 'text',
		label: 'Stripe API Secret Key',
	},
	{
		fieldId: 'stripeAccountName',
		fieldType: 'text',
		label: 'Stripe Account Name',
	},
];
export const stripeSingle = {
	type: 'stripeSingle',
	typeLabel: 'Stripe One Time Payment',
	description: 'Make a one time payment with stripe',
	fields: [
		...stripeKeys,
		{
			fieldId: 'price',
			fieldType: FORM_FIELDS_AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER,
			label: 'price',
			allowedTypes: ['number', 'calculation'],
		},
		{
			fieldId: 'email',
			fieldType: FORM_FIELDS_AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER,
			label: 'Email',
			allowedTypes: ['email'],
		},
	],
	conditionals,
};
export const stripeSubscription = {
	type: 'stripeSubscription',
	typeLabel: 'Stripe Subscription',
	description: 'Make a one time payment with stripe',
	fields: [
		...stripeKeys,
		{
			fieldId: 'email',
			fieldType: FORM_FIELDS_AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER,
			label: 'Email',
			allowedTypes: ['email'],
		},
		{
			fieldId: 'firstName',
			fieldType: FORM_FIELDS_AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER,
			label: 'First Name',
			allowedTypes: ['text'],
		},
		{
			fieldId: 'lastName',
			fieldType: FORM_FIELDS_AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER,
			label: 'Last Name',
			allowedTypes: ['text'],
		},
		{
			fieldId: 'stripePlan',
			fieldType: 'select',
			label: 'Plan',
			options: [],
		},
	],
	conditionals,
};
