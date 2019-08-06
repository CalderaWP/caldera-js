import { FORM_FIELDS_AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER } from '@calderajs/components';
const s = {
	conditionals: (conditionalState, form) => {
		if (conditionalState.getValue('showOther')) {
			conditionalState.showField('otherField');
		} else {
			conditionalState.hideField('otherField');
		}
		//@todo delete this once fixed upstream
		return conditionalState;
	},
};

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
};
export const stripeSubscription = {
	type: 'stripeSubscription',
	typeLabel: 'Stripe One Time Payment',
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
	],
};
