import PropTypes from "prop-types";
import React from "react";
import { FieldWrapper } from "..";
import { Form } from "react-bootstrap";
import classNames from "classnames";
import { fieldClassNames } from "../util";

export const TextAreaField = props => {
	const { fieldId, onChange, onBlur } = props;
	const fieldType = "textarea";
	let { attributes } = props;
	if ("object" !== typeof attributes) {
		attributes = {};
	}
	if (!attributes.hasOwnProperty("rows")) {
		attributes.rows = 5;
	}

	const wrapperProps = {
		...props,
		fieldType,
	};
	return (
		<FieldWrapper {...wrapperProps}>
			<Form.Control
				as="textarea"
				rows={attributes.rows}
				id={fieldId}
				{...attributes}
				onChange={onChange}
				onBlur={onBlur}
				className={classNames(fieldClassNames(fieldType))}
			/>
		</FieldWrapper>
	);
};

TextAreaField.propTypes = {
	label: PropTypes.string,
	description: PropTypes.string,
	fieldId: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
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

TextAreaField.defaultProps = {
	onBlur: () => {},
	required: false,
};
