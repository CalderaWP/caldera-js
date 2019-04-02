import {CalderaForm} from "../CalderaForm";
import {getCf2Token} from "../Http/handlers/getCf2Token";
import {handleFormSubmitCf2} from "../Http/handlers/handleFormSubmitCf2";

import {Message} from "@calderajs/components";
import {useState,useEffect,Fragment} from 'react';
export const CF2Form =({apiRootUri, formId,formConfig,axios}) => {

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
		<Fragment>
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
		</Fragment>
	);

}
