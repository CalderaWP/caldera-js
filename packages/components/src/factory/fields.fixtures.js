const checkboxFieldset = {
	fieldType: 'checkboxes',
	label: 'Checkbox Field Set Label',
	fieldId: 'checkboxFieldSetLabel',
	description: 'Checkbox field set description',
	required: true,
	options: [
		{
			value: 1,
			label: 'One',
			id: 'opt-1',
		},
		{
			value: 2,
			label: 'Two',
			id: 'opt-2',
			description: 'The Second Option',
			attributes: {
				checked: true,
			},
		},
		{
			value: 3,
			label: 'Three',
			id: 'opt-3',
		},
	],
};

const selectField = {
	fieldType: 'select',
	value: 1,
	label: 'Select Field Label',
	fieldId: 'selectFieldId',
	description: 'Select field description',
	required: true,
	attributes: {
		multiple: false,
	},
	options: [
		{ value: 0, label: 'Zero' },
		{ value: 1, label: 'One' },
		{ value: 2, label: 'Two' },
	],
};

const radioField = {
	fieldType: 'radio',
	value: 1,
	label: 'Radio Field Label',
	fieldId: 'radioFieldLabel',
	description: 'Radio field description',
	required: true,
	attributes: {
		multiple: false,
	},
	options: [
		{ value: 0, label: 'Zero' },
		{ value: 1, label: 'One' },
		{ value: 2, label: 'Two' },
	],
};

const checkboxField = {
	fieldType: 'checkbox',
	label: 'Checkbox Labe',
	fieldId: 'checkboxFieldLabel',
	description: 'Checkbox field description',
	required: true,
	attributes: {
		checked: true,
	},
};

const toggleField = {
	fieldType: 'toggle',
	label: 'Toggle Label',
	fieldId: 'toggleFieldLabel',
	description: 'Toggle field description',
	required: true,
	checked: true,
};

const numberField = {
	fieldType: 'number',
	value: 3,
	label: 'Number Field Label',
	fieldId: 'numberFieldId',
	description: 'Number field description',
	required: true,
	attributes: {
		min: 1,
		max: 10,
	},
};

const textField = {
	fieldType: 'text',
	value: 'roy',
	label: 'First Name',
	fieldId: 'firstName',
	description: 'your first name',
	required: true,
};

const emailField = {
	fieldType: 'email',
	value: 'emai@email.com',
	label: 'Email Field Label',
	fieldId: 'emailFieldId',
	description: 'Email field description',
	required: true,
	attributes: {
		multiple: true,
	},
};

const textAreaField = {
	fieldType: 'textarea',
	value: 'The content of text area',
	label: 'Your message',
	fieldId: 'textArea1',
	description: 'your first name',
	required: true,
	attributes: {
		maxlength: 500,
		minlength: 10,
		cols: 8,
		rows: 5,
	},
};

const autoCompleteField = {
	fieldType: 'autocomplete',
	value: ['One', 'Three'],
	label: 'Options',
	fieldId: 'autoComplete1',
	description: 'Help text',
	options: ['One', 'Two', 'Three'],
};

export {
	autoCompleteField,
	toggleField,
	textAreaField,
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField,
};
