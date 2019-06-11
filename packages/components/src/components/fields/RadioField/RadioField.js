import PropTypes from 'prop-types';
import React from 'react';
import { FieldWrapper } from '..';
import { RadioOrCheckboxControl } from '../RadioOrCheckboxControl';

export const RadioField = props => {
	const fieldProps = { ...props, fieldType: 'radio' };
	return (
		<FieldWrapper {...fieldProps}>
			<RadioOrCheckboxControl {...fieldProps} />
		</FieldWrapper>
	);
};

RadioField.propTypes = {
	label: PropTypes.string,
	description: PropTypes.string,
	fieldId: PropTypes.string,
	required: PropTypes.bool,
	multiple: PropTypes.bool,
	options: PropTypes.array,
};

RadioField.defaultProps = {
	required: false,
	multiple: false,
	options: [],
};
