import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firstNameField = {
	fieldType: 'text',
	value: '',
	label: 'First Name',
	fieldId: 'fld_8768091',
	description: 'Your first name',
	required: true
};

const lastNameField = {
	fieldType: 'text',
	value: '',
	label: 'Last Name',
	fieldId: 'fld_9970286',
	description: 'Your last name',
	required: true
};
const emailField = {
	fieldType: 'email',
	value: '',
	label: 'Email',
	fieldId: 'fld_6009157',
	description: 'Your email',
	required: true,
	attributes: {
		multiple: false
	}
};

const submitButton = {
	fieldId: 'fld_7908577',
	label: 'Click Me',
	fieldType: 'submit',
};

const formConfig = {
	ID: 'cf21',
	rows: [
		{
			rowId: 'r1',
			columns: [
				{
					fields: [firstNameField.fieldId],
					width: '1/2',
					columnId: `r1-${firstNameField.fieldId}`
				},
				{
					fields: [lastNameField.fieldId],
					width: '1/4',
					columnId: `r1-${lastNameField.fieldId}`
				}
			]
		},
		{
			rowId: 'r2',
			columns: [
				{
					fields: [emailField.fieldId],
					width: '1',
					columnId: `r2-${emailField.fieldId}`
				},
			]
		},
		{
			rowId: 'r3',
			columns: [
				{
					fields: [submitButton.fieldId],
					width: '1',
					columnId: `r2-${emailField.fieldId}`
				},
			]
		}
	],
	fields: [
		emailField,
		firstNameField,
		lastNameField,
		submitButton
	],
	conditionals: []
};

ReactDOM.render(<App
	apiRootUri={'http://dev-futurecapable.pantheonsite.io/wp-json/cf-api'}
	formId={'CF5c9f86904e447'}
	formConfig={formConfig}
/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
