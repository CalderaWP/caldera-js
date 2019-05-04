import React from "react";
import PropTypes from 'prop-types';

export const FieldLabel = ({fieldId, children,required,className}) => {
	return (
		<label htmlFor={fieldId} className={className}>
			{children} {required && <span>*</span>}
		</label>
	);
}

FieldLabel.propTypes = {
	fieldId: PropTypes.string.isRequired,
	required: PropTypes.bool,
	className: PropTypes.string,
};
