import React, { useState, useMemo } from 'react';
import { storiesOf } from '@storybook/react';
import { FormFieldsAutoComplete } from './FormFieldsAutoComplete';
import {
	textField,
	checkboxField,
	selectField,
	emailField,
} from '../../../factory';

const onChange = newValue => {
	console.log(newValue);
};
const onBlur = event => {};

const STORY_NAME = 'Form Fields Auto Complete field';

function Wrapped({ form }) {
	const [value, onChange] = useState('');
	return (
		<FormFieldsAutoComplete
			label={'Setting Field'}
			onChange={onChange}
			fieldId={'selection-hats'}
			value={value}
			form={form}
		/>
	);
}

const form = {
	id: 'test',
	fields: [checkboxField, textField, selectField, emailField],
};

storiesOf(STORY_NAME, module).add('Selects fields ', () => (
	<Wrapped form={form} />
));

function WithAllowedTypes({ form }) {
	const [value, onChange] = useState('');
	return (
		<FormFieldsAutoComplete
			label={'Setting Field'}
			onChange={onChange}
			fieldId={'selection-hats'}
			value={value}
			form={form}
			allowedTypes={['email', 'text']}
		/>
	);
}

storiesOf(STORY_NAME, module).add(
	'Allowed types of email and text only. Should not show select ',
	() => <WithAllowedTypes form={form} />
);
