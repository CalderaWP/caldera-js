import {AutoCompleteField} from '../../fields/AutoCompleteField/AutoCompleteField';

import React from 'react';
import PropTypes from "prop-types";

export const FormFieldsAutoComplete = ({
	label,
	fieldId,
	form,
	description,
	value,
	additionalOptions
								}) => {
	const options = [...additionalOptions];
	const {fields} = form;
	fields.forEach(field => {
		options.push(`%${field.fieldId}%`);
		options.push(field.label);
	});

	return (
		<AutoCompleteField
			label={label}
			fieldId={fieldId}
			description={description}
			value={value}
			options={options}
		/>
	);
};

FormFieldsAutoComplete.IDENTIFIER  = 'fields-autocomplete';


FormFieldsAutoComplete.propTypes = {
	...AutoCompleteField.propTypes,
	additionalOptions: PropTypes.array,
};

FormFieldsAutoComplete.defaultProps = {
	additionalOptions: [],
};
