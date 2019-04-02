import React, {useState, useEffect} from 'react';
import {Message} from "@calderajs/components";
import './App.css';
import {
	CalderaForm,
	getCf2Token,
	submitFormCf2
} from "@calderajs/forms";

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


const useCfFormTokens = (initialFormId) => {
	const [tokensFetched, setTokensFetched] = useState(false);
	const [formId, setFormId] = useState(initialFormId);
	const [tokens, setTokens] = useState({
		_cf_verify: '',
		_sessionPublicKey: ''
	});

	const updateTokens = ({_cf_verify, _sessionPublicKey}) => {
		setTokens({
			_cf_verify,
			_sessionPublicKey
		})
	};
	return [
		tokens,
		updateTokens,
		tokensFetched,
		setTokensFetched
	]

};


const App = ({apiRootUri, formId}) => {
	const [
		tokens,
		updateTokens,
		tokensFetched,
		setTokensFetched
	] = useCfFormTokens(formId);
	const [formLoaded, setFormLoaded] = useState(false);
	const [message, updateMessage] = useState('Effect has not run yet');
	const [form, setForm] = useState({
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
	});


	useEffect(() => {
		updateMessage('Effect has run');
		getCf2Token(
			'http://dev-futurecapable.pantheonsite.io/wp-json/cf-api',
			'CF5c9f869f3faf1',
			window.fetch
		).then(r => {
			updateTokens(r);
			setTokensFetched(true);
		})
	}, [tokensFetched]);

	return (
		<div className="App">
			<header className="App-header">
				<Message
					message={{message}}
					error={false}
				/>
			</header>
			<div>
				{tokensFetched ?
					<CalderaForm
						form={form}
						fields={form.fields}
						onChange={newValues => {
							console.log(newValues);
						}}
						onSubmit={(values, actions) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								actions.setSubmitting(false);
							}, 1000);

						}}
					/>
					:
					<div>Loading Spinner</div>

				}


			</div>
		</div>
	);

}

export default App;
