import React from 'react';
import { storiesOf } from '@storybook/react';
import { formRows } from '../CalderaForm/columns.fixtures';

import {collectFieldValues} from '@calderajs/components';
import {createFieldRule} from '../CalderaForm/state/createFieldRule';
import {emailField, textField, checkboxFieldset} from "../CalderaForm/fields.fixtures";
import {CF2Form} from "./CF2Form";
import axios from "axios";
import {render} from "react-testing-library";



const form = {
	ID: 'cf2',
	rows: [
		{
			rowId: 'r1',
			columns: [
				{
					fields: [emailField.fieldId],
					width: '1/2',
					columnId: '1a'
				},
				{
					fields: [textField.fieldId],
					width: '1/4',
					columnId: '1b'
				},
				{
					fields: [checkboxFieldset.fieldId],
					width: '1/4',
					columnId: '1c'
				}
			]
		}
	],
	fields: [
		emailField,
		textField,
		{
			...checkboxFieldset,
			value: [],
		}
	],
	conditionals: [
		{
			type: 'hide',
			rule: createFieldRule('is', emailField.fieldId, 'hide'),
			fields: [
				textField.fieldId
			]
		},

	]
};

storiesOf('CF2 Form').add('Forms', () => (
	<div>
		<p>Works with the cf2 API in Caldera Forms</p>
		<p>Not setup to submit properly here though :)</p>
		<CF2Form
			formConfig={form}
			axios={axios}
			_tokens={{
				_cf_verify: 'a',
				_sessionPublicKey: 'b'
			}}
		/>
	</div>

));

storiesOf('CF2 Form').add('With CF1 class names', () => (
	<div>
		<CF2Form
			formConfig={form}
			axios={axios}
			_tokens={{
				_cf_verify: 'a',
				_sessionPublicKey: 'b'
			}}
			useCf1ClassNames={true}
		/>
	</div>

));




storiesOf('CF2 Form').add('Resolves promise onReady', () => {
	const onReady = new Promise((resolve) => {
		console.log('loaded');
		resolve();
	});
	return(
		<CF2Form
			formConfig={formConfig}
			axios={axios}
			onReady={onReady}
			_tokens={{
				_cf_verify: 'a',
				_sessionPublicKey: 'b'
			}}
		/>
	);
});




