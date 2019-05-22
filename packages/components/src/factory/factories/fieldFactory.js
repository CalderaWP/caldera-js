import {
	TextAreaField,
	ToggleField,
	RadioField,
	FieldSet,
	SelectField,
	InputField,
	MagicRichText,
	isValidHtml5type,
	AutoCompleteField,
	FormFieldsAutoComplete,
	SubmitButton,
	HiddenField
} from "../..";

import React from 'react';

/**
 * Special component for fieldset checkbox groups
 */
class CheckboxFieldSet extends React.Component {


	constructor(props) {
		super(props);
		const {value, options} = props.field;
		let checkboxValues = {};
		if (Array.isArray(value)) {
			options.map(option => {
				checkboxValues[this.findOptionId(option)] = -1 !== value.findIndex(v => v === this.findOptionId(option));
			});
		}
		this.state = {
			checkboxValues
		};
		this.onChange = this.onChange.bind(this);
	}

	onChange(optionId, checked) {
		let newValue = this.state.checkboxValues || {};
		if (checked) {
			newValue[optionId] = true;
		} else {
			newValue[optionId] = false;
		}
		this.setState({checkboxValues: newValue})
		const update = [];
		Object.keys(newValue).map(option => {
			if (this.state.checkboxValues[option]) {
				update.push(option);
			}
		});
		this.props.onChange(update);
	}

	findOptionId(option) {
		const {fieldId} = this.props.field;
		return option.hasOwnProperty('id')
			? option.id
			: `opt-${fieldId}-${option.value}`;
	}

	render() {
		const {field, onChange, wrapperClassNames} = this.props;
		const {fieldId, label, fieldType, attributes, options, value} = field;
		const {checkboxValues} = this.state;

		function remove(array, element) {
			return array.filter(el => el !== element);
		}

		return (
			<FieldSet
				fieldType={fieldType}
				legend={label}
				attributes={attributes}
			>
				{options.map(option => {
					const {
						label,
						description,
						attributes
					} = option;

					const optionId = this.findOptionId(option);
					const isChecked = Array.isArray(value) ? value.includes(optionId) : false;

					return (
						<InputField
							wrapperClassNames={wrapperClassNames}
							key={optionId}
							id={optionId}
							fieldId={optionId}
							value={isChecked}
							label={label}
							description={description}
							html5type={'checkbox'}
							attributes={attributes}
							onChange={(checked) => {
								this.onChange(optionId, checked);
							}}
						/>
					);
				})}
			</FieldSet>
		);

	}
}

CheckboxFieldSet.defaultProps = {
	wrapperClassNames: '',
}


/**
 * Create a field from an object describing it.
 *
 * Note: field.render is a render prop. If it is passed, field is passed to it.
 *
 * @param field
 * @param onChange
 * @param onBlur
 * @param wrapperClassNames
 * @param Message
 * @return {*}
 */
export const fieldFactory = (field, onChange, onBlur, wrapperClassNames, Message) => {
		const {
			fieldType,
			label,
			options,
			fieldId,
			messages,
			render,
			required,
			isRequired
		} = field;

		let {attributes} = field;

		function isFieldRequired() {
			return required || isRequired;
		}

		if (!attributes || undefined === typeof attributes) {
			attributes = {};
		}
		if (isFieldRequired()) {
			attributes.required = true;
		}


		if (render) {
			return React.createElement(render, field);
		}


		switch (fieldType) {
			case 'checkboxes':
				return <CheckboxFieldSet field={field} onChange={onChange} wrapperClassNames={wrapperClassNames} required={isFieldRequired()}/>
			case 'magic-richtext'
			:
				return <MagicRichText {...field} onChange={onChange} wrapperClassNames={wrapperClassNames} required={isFieldRequired()}/>;
			case
			'autocomplete'
			:
				return <AutoCompleteField {...field} onChange={onChange} wrapperClassNames={wrapperClassNames} required={isFieldRequired()} />;
			case
			'fields-autocomplete'
			:
				return <FormFieldsAutoComplete {...field} onChange={onChange} wrapperClassNames={wrapperClassNames} required={isFieldRequired()}/>;
			case
			'textarea'
			:
				return <TextAreaField {...field} onChange={onChange} wrapperClassNames={wrapperClassNames} required={isFieldRequired()}/>;
			case
			'toggle'
			:
				return <ToggleField {...field} onChange={onChange} wrapperClassNames={wrapperClassNames} required={isFieldRequired()}/>;
			case 'hidden':
				return  <HiddenField {...field} onChange={onChange} wrapperClassNames={wrapperClassNames} required={isFieldRequired()}/>;
			case
			'radio'
			:
				return <RadioField {...field} onChange={onChange} wrapperClassNames={wrapperClassNames} required={isFieldRequired()}/>;
			case
			'select'
			:
			case
			'dropdown'
			:
				return <SelectField {...field} onChange={onChange} wrapperClassNames={wrapperClassNames} required={isFieldRequired()}/>;
			case
			'submit'
			:
				delete field.value;
				delete field.onBlur;
				delete field.onChange;
				return <SubmitButton {...field} wrapperClassNames={wrapperClassNames} />;
			case
			'text'
			:
			case
			'email'
			:
			case
			'number'
			:
			case
			'input'
			:
			default:
				if (isValidHtml5type(fieldType)) {
					if (field.html5type !== fieldType) {
						field = {...field, html5type: fieldType};
					}
				} else {
					field.html5type = 'text';
				}
				return <InputField {...field} onChange={onChange} wrapperClassNames={wrapperClassNames} required={isFieldRequired()} />;
		}
	}
;
