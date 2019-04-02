import React, {useState, useEffect} from 'react';
import {Message} from "@calderajs/components";
import './App.css';
import {
	CalderaForm,
} from "@calderajs/forms";
import axios from 'axios';

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


async function submitForm(
	{
		apiRootUri,
		formId,
		entryValues,
		tokens
	}) {
	try {
		const response = await axios.request({
			url: `${apiRootUri}/v3/process/submission/${formId}`,
			method: 'POST',
			data: {
				formId,
				_sessionPublicKey:
				tokens._sessionPublicKey,
				_cf_verify:
				tokens._cf_verify,
				entryValues
			}
		}).then(response => {
			console.log(response)
		})

	} catch (error) {
		console.error(error);
	}
}

const App = ({apiRootUri, formId}) => {

	const [formLoaded, setFormLoaded] = useState(false);
	const [message, updateMessage] = useState('Effect has not run yet');
	const [tokensFetched, setTokensFetched] = useState(false);
	const [tokens, setTokens] = useState({
		_cf_verify: '',
		_sessionPublicKey: ''
	});
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
		async function getToken() {
			try {
				const response = await axios.post(`${apiRootUri}/v3/process/submission/${formId}/token?axios=yas`);
				setTokens(response.data);
			} catch (error) {
				console.error(error);
			}
		}

		getToken().then(() => {
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
							actions.setSubmitting(false);
							submitForm({
								entryValues: values,
								tokens,
								apiRootUri,
								formId,
							})

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
