import React from 'react';
import { storiesOf } from '@storybook/react';
import { CalderaForm } from './CalderaForm';
import { formRows } from './columns.fixtures';

import {collectFieldValues} from '@calderajs/components';
import {createFieldRule} from './state/createFieldRule';
import { getValuesFromFormLayout } from './util/getValuesFromFormLayout';
import {
	emailField,
	textField,
	submitButton} from "./fields.fixtures";
import { FormTokenField } from '@wordpress/components';
import { withState } from '@wordpress/compose';


const form = {
	rows: [
		{
			rowId: 'r1',
			columns: [
				{
					fields: [emailField.fieldId],
					width: '1/2',
					columnId: '1aaaaa'
				},
				{
					fields: [textField.fieldId],
					width: '1/4',
					columnId: '1b'
				}
			]
		},
		{
			rowId: 'r2',
			columns: [
				{
					fields: [submitButton.fieldId],
					width: '1',
					columnId: '1r2'
				}
			]
		}
	],
	fields: [
		emailField,
		textField,
		submitButton
	],
	conditionals :[
		{
			type: 'hide',
			rule: createFieldRule('is', emailField.fieldId, 'hide' ),
			fields: [
				textField.fieldId
			]
		},
		{
			type: 'disable',
			rule: createFieldRule('is', emailField.fieldId, '' ),
			fields: [
				submitButton.fieldId
			]
		},
		{
			type: 'disable',
			rule: createFieldRule('is', textField.fieldId, '' ),
			fields: [
				submitButton.fieldId
			]
		}

	]
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
