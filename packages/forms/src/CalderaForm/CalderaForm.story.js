import React from 'react';
import { storiesOf } from '@storybook/react';
import { CalderaForm } from './CalderaForm';
import { formRows } from './columns.fixtures';

import { collectFieldValues } from '@calderajs/components';
import { createFieldRule } from './state/createFieldRule';
import { getValuesFromFormLayout } from './util/getValuesFromFormLayout';
import {
	emailField,
	textField,
	submitButton,
	checkboxFieldset,
} from './fields.fixtures';

const form = {
	rows: [
		{
			rowId: 'r1',
			columns: [
				{
					fields: [emailField.fieldId],
					width: '1/2',
					columnId: '1aaaaa',
				},
				{
					fields: [textField.fieldId],
					width: '1/4',
					columnId: '1b',
				},
			],
		},
		{
			rowId: 'r2',
			columns: [
				{
					fields: [submitButton.fieldId],
					width: '1',
					columnId: '1r2',
				},
			],
		},
	],
	fields: [emailField, textField, submitButton],
	conditionals: [
		{
			type: 'hide',
			rule: createFieldRule('is', emailField.fieldId, 'hide'),
			fields: [textField.fieldId],
		},
		{
			type: 'disable',
			rule: createFieldRule('empty', emailField.fieldId, null),
			fields: [submitButton.fieldId],
		},
		{
			type: 'disable',
			rule: createFieldRule('empty', textField.fieldId, null),
			fields: [submitButton.fieldId],
		},
	],
};

storiesOf('CalderaForm', module).add('Forms', () => (
	<CalderaForm
		form={form}
		onSubmit={(values, actions) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				actions.setSubmitting(false);
			}, 1000);
		}}
	/>
));

const field = {
	fieldType: 'checkboxes',
	label: 'Select One',
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
	value: ['opt-3'],
};
const form2 = {
	rows: [
		{
			rowId: 'r1',
			columns: [
				{
					fields: [field.fieldId],
					width: '1',
					columnId: 'a',
				},
			],
		},
	],
	fields: [field],
	conditionals: [],
};

storiesOf('CalderaForm', module).add('Checkbox fieldset', () => (
	<CalderaForm
		form={form2}
		onSubmit={(values, actions) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				actions.setSubmitting(false);
			}, 1000);
		}}
	/>
));
