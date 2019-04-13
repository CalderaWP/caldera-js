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
	const {fields} = form;

	return (
		<AutoCompleteField
			label={label}
			fieldId={fieldId}
			description={description}
			value={value}
			options={[]}
		/>
	);
};

FormFieldsAutoComplete.IDENTIFIER  = 'fields-autocomplete';

/**
FormFieldsAutoComplete.propTypes = {
	...AutoCompleteField.propTypes,
	additionalOptions: PropTypes.array,
};

FormFieldsAutoComplete.defaultProps = {
	additionalOptions: [],
};**/
