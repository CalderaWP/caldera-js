import React from "react";
import PropTypes from 'prop-types';

export const FieldLabel = ({fieldId, children,required,className,requiredIndicator}) => {
	return (
		<label htmlFor={fieldId} className={className}>
			{children} {required && <span>{requiredIndicator}</span>}
		</label>
	);
}

FieldLabel.defaultProps = {
	requiredIndicator: '*'
};

FieldLabel.propTypes = {
	fieldId: PropTypes.string.isRequired,
	required: PropTypes.bool,
	className: PropTypes.string,
};
