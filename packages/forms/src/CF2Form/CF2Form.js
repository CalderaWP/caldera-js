import {CalderaForm} from "../CalderaForm";
import getCf2Token from "../Http/handlers/getCf2Token";
import handleFormSubmitCf2 from "../Http/handlers/handleFormSubmitCf2";
import React, {useState, useEffect, Fragment} from 'react';
import { RingLoader, PacmanLoader } from 'react-spinners';

import PropTypes from "prop-types";
import setCf1ClassNames from "./setCf1ClassNames";

/**
 * A Caldera Form designed to be processed against Caldera Forms' cf2 REST API.
 * @param apiRootUri
 * @param formConfig
 * @param axios
 * @param _tokens
 * @param onChange
 * @param onBlur
 * @param useCf1ClassNames
 * @return {*}
 * @constructor
 */
export const CF2Form = (
	{
		apiRootUri,
		formConfig,
		axios,
		_tokens,
		onChange,
		onBlur,
		useCf1ClassNames
	}
) => {

	const [formLoaded, setFormLoaded] = useState(false);
	const [tokensFetched, setTokensFetched] = useState(false);
	const [message, setMessage] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [hideForm, setHideForm] = useState(false);
	const [tokens, setTokens] = useState(_tokens || {
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
			getCf2Token(apiRootUri, formId, axios)
				.then(r => {
					setTokens(r);
					setTimeout(() => setTokensFetched(true), 500);
				});
		}

		if (tokens._cf_verify && tokens._sessionPublicKey) {
			setTokensFetched(true);
			return;
		}

		getToken();


	}, [tokensFetched]);

	/**
	 * Setup class service when mounting, if needed
	 */
	useEffect(() => {

		if (useCf1ClassNames) {
			setCf1ClassNames();
		}

	}, [useCf1ClassNames]);

	if (hideForm) {
		return (
			<div className={'error'}>{message}</div>

		);
	}

	const FormOrLoading = () => {
		if (isSubmitting) {
			return (
				<div><PacmanLoader/></div>
			);
		}
		return (
			<CalderaForm
				form={form}
				fields={form.fields}
				onChange={newValues => {
					onChange(onChange);
				}}
				onBlur={onBlur}
				onSubmit={(values, actions) => {
					setIsSubmitting(true);
					actions.setSubmitting(false);
					handleFormSubmitCf2({
						entryValues: values,
						tokens,
						apiRootUri,
						formId,
						axios
					}).then(r => {
						setTimeout(() => setIsSubmitting(false), 500);
						setHideForm(true);
						setMessage(r.data.message);
						actions.resetForm();
					}).catch(e => {
						setTimeout(() => setIsSubmitting(false), 500);
						console.log(e);
					});

				}}
			/>
		);

	};


	return (
		<Fragment>
			{tokensFetched ?
				<FormOrLoading/>
				: <div><RingLoader /></div>
			}
		</Fragment>
	);

};

CF2Form.propTypes = {
	...CalderaForm.propTypes,
	useCf1ClassNames: PropTypes.bool
};

const noop = () => {
};
CF2Form.defaultProps = {...CalderaForm.defaultProps, useCf1ClassNames: false};
