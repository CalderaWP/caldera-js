import { decorateObjectLiteralWithMethods } from './decoratorFactory/decoratorFactory';

/**
 *
 * @param form
 * @param {{submitFormCaldera:function({object},{string},{fetch})}} options
 * @return {Proxy}
 * @constructor
 */
export default function FormClient(form, options) {
	this.fieldValues = form.fieldValues;
	let { apiRootUri, fetch } = options;

	this.eventOpts = () => {
		return {
			apiRootUri,
			formId: form.id
		};
	};

	this.setFieldValues = fieldValues => {
		this.fieldValues = fieldValues;
	};

	this.getFieldValues = () => {
		return this.fieldValues;
	};

	/**
	 * Create arguments to provide to each event
	 * @return {*[]}
	 */
	this.createEventBag = () => {
		return [this.fieldValues, this.eventOpts(), fetch];
	};

	/**
	 * Handle form submission
	 *
	 * @return {*}
	 */
	this.submitForm = () => {
		if ('function' === typeof options.submitForm) {
			return options.submitForm(...this.createEventBag());
		}
	};

	/**
	 * @return {{
	 *     submitFormCaldera:function({object})}}
	 * }}
	 */
	return decorateObjectLiteralWithMethods(this.fieldValues, {
		setFieldValues: this.setFieldValues,
		getFieldValues: this.getFieldValues,
		submitForm: this.submitForm
	});
}
