import {CalderaForm} from "../CalderaForm";
import getCf2Token from "../Http/handlers/getCf2Token";
import handleFormSubmitCf2 from "../Http/handlers/handleFormSubmitCf2";
import React,{useState,useEffect,Fragment} from 'react';
export const CF2Form =(
	{
		apiRootUri,
		formConfig,
		axios,
		_tokens
	}
) => {

	const [formLoaded, setFormLoaded] = useState(false);
	const [tokensFetched, setTokensFetched] = useState(false);
	const [tokens, setTokens] = useState(_tokens||{
		_cf_verify: '',
		_sessionPublicKey: ''
	});
	const [form, setForm] = useState(formConfig);
	const formId = form.ID;
		/**
	 * Get tokens if not passed.
	 */
	useEffect(() => {
		async function getToken() {
			getCf2Token(apiRootUri,formId,axios)
				.then(r => {
					setTokens(r);
					setTokensFetched(true)
				})
		}

		if( tokens._cf_verify && tokens._sessionPublicKey ){
			setTokensFetched(true);
			return;
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
