import PropTypes from "prop-types";
import React from "react";
import { FieldWrapper } from "..";
import Button from "react-bootstrap/Button";
export const ButtonField = props => {
	const { variant, children } = props;
	const fieldProps = {
		...props,
		fieldType: "button",
		variant,
	};

	return (
		<FieldWrapper {...fieldProps}>
			<Button {...fieldProps}>{children}</Button>
		</FieldWrapper>
	);
};

ButtonField.propTypes = {
	variant: PropTypes.string,
};

ButtonField.defaultProps = {
	variant: "secondary",
};
