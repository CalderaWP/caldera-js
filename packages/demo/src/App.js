import React, {useState, useEffect} from 'react';
import {Message} from "@calderajs/components";
import './App.css';
import {
	CalderaForm,
} from "@calderajs/forms";
import axios from 'axios';


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


const App = ({apiRootUri, formId,formConfig}) => {

	const [formLoaded, setFormLoaded] = useState(false);
	const [message, updateMessage] = useState('Effect has not run yet');
	const [tokensFetched, setTokensFetched] = useState(false);
	const [tokens, setTokens] = useState({
		_cf_verify: '',
		_sessionPublicKey: ''
	});
	const [form, setForm] = useState(formConfig);


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
