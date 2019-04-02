import React, {useState, useEffect} from 'react';
import {Message} from "@calderajs/components";
import './App.css';
import {
	CalderaForm,
	handleFormSubmitCf2,
	getCf2Token
} from "@calderajs/forms";
import axios from 'axios';





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
			getCf2Token(apiRootUri,formId,axios)
				.then(r => {
					setTokens(r);
					setTokensFetched(true)
				})
		}

		getToken();

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
							handleFormSubmitCf2({
								entryValues: values,
								tokens,
								apiRootUri,
								formId,
								axios
							}).then(r => {
								actions.resetForm();
							}).catch( e => {
								console.log(e);
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
