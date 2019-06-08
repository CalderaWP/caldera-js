import PropTypes from "prop-types";
import React from "react";
import { isValidHtml5type } from "../util";
import { FieldWrapper } from "..";
import { Control } from "../Control";

export const InputField = props => {
	const { html5type } = props;
	const fieldType = isValidHtml5type(html5type) ? html5type : "text";
	const fieldProps = {
		...props,
		fieldType,
	};
	return (
		<FieldWrapper {...fieldProps}>
			<Control {...fieldProps} as={"input"} />
		</FieldWrapper>
	);
};

InputField.propTypes = {
	label: PropTypes.string,
	description: PropTypes.string,
	fieldId: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	html5type: PropTypes.string,
	attributes: PropTypes.object,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.array,
		PropTypes.bool,
	]),
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
};

InputField.defaultProps = {
	onBlur: () => {},
	required: false,
	html5type: "text",
};
