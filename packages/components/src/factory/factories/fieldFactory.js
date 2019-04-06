import {
	RemotePost,
	TextAreaField,
	ToggleField,
	RadioField,
	FieldWrapper,
	FieldSet,
	SelectField,
	InputField,
	RichText,
	MagicRichText,
	isValidHtml5type,
	AutoCompleteField,
	FormFieldsAutoComplete,
	SubmitButton
} from "../..";

import React from 'react';

/**
 * Create a field from an object describing it.
 *
 * Note: field.render is a render prop. If it is passed, field is passed to it.
 *
 * @param field
 * @param onChange
 * @param onBlur
 * @return {*}
 */
export const fieldFactory = (field, onChange, onBlur) => {
	const {
		fieldType,
		label,
		attributes,
		options,
		fieldId,
		messages,
		render
	} = field;

	if (render) {
		return React.createElement(render, field);
	}

	switch (fieldType) {
		case 'checkboxes':
			return (
				<FieldSet
					fieldType={fieldType}
					legend={label}
					attributes={attributes}
				>
					{options.map(option => {
						const {
							value,
							label,
							description,
							attributes
						} = option;
						const optionId = option.hasOwnProperty('id')
							? option.id
							: `opt-${fieldId}-${option.value}`;
						return (
							<InputField
								key={optionId}
								id={optionId}
								fieldId={optionId}
								value={value}
								label={label}
								description={description}
								html5type={'checkbox'}
								attributes={attributes}
								onChange={onChange}
							/>
						);
					})}
				</FieldSet>
			);
		case 'magic-richtext' :
			return <MagicRichText {...field} onChange={onChange}/>;
		case 'autocomplete' :
			return <AutoCompleteField {...field} onChange={onChange}/>;
		case'richtext' :
			return <RichText {...field} onChange={onChange}/>;
			case'fields-autocomplete' :
			return <FormFieldsAutoComplete {...field} onChange={onChange}/>;
		case 'textarea':
			return <TextAreaField {...field} onChange={onChange}/>;
		case 'toggle':
			return <ToggleField {...field} onChange={onChange}/>;
		case 'radio':
			return <RadioField {...field} onChange={onChange}/>;
		case 'select':
		case 'dropdown':
			return <SelectField {...field} onChange={onChange}/>;
		case 'submit':
			delete field.value;
			delete field.onBlur;
			delete field.onChange;
			return <SubmitButton {...field} />;
		case 'text':
		case 'email':
		case 'number':
		case 'input':
		default:
			if (isValidHtml5type(fieldType)) {
				if (field.html5type !== fieldType) {
					field = {...field, html5type: fieldType};
				}
			} else {
				field.html5type = 'text';
			}
			return <InputField {...field} onChange={onChange}/>;
	}
};
