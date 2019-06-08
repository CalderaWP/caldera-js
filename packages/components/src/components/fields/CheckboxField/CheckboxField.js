import PropTypes from "prop-types";
import React from "react";
import { FieldWrapper } from "..";
import { RadioOrCheckboxControl } from "../RadioOrCheckboxControl";

export const CheckboxField = props => {
	const fieldProps = { ...props, fieldType: "checkbox" };
	return (
		<FieldWrapper {...fieldProps}>
			<RadioOrCheckboxControl {...fieldProps} />
		</FieldWrapper>
	);
};

CheckboxField.propTypes = {
	label: PropTypes.string,
	description: PropTypes.string,
	fieldId: PropTypes.string,
	required: PropTypes.bool,
	multiple: PropTypes.bool,
	options: PropTypes.array,
};

CheckboxField.defaultProps = {
	required: false,
	multiple: false,
	options: [],
};
