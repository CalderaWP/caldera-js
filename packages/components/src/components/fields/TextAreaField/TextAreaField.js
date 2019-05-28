import PropTypes from 'prop-types';
import React from 'react';
import {FieldWrapper} from "..";
import {Form} from "react-bootstrap";

export const TextAreaField = props => {
	const {fieldId, onChange, onBlur} = props;
	let {attributes} = props;
	if( 'object' !== typeof  attributes ){
		attributes = {};
	}
	if ( !attributes.hasOwnProperty('rows')) {
		attributes.rows = 5;
	}
	return <FieldWrapper {...props}>
		<Form.Control
			as="textarea"
			rows={attributes.rows}
			id={fieldId}
			{...attributes}
			onChange={onChange}
			onBlur={onBlur}
		/>
	</FieldWrapper>
}

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
		PropTypes.bool
	]),
	onChange: PropTypes.func,
	onBlur: PropTypes.func
};

TextAreaField.defaultProps = {
	onBlur: () => {
	},
	required: false,
};
