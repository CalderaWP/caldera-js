import PropTypes from 'prop-types';
import React from 'react';
import { RadioControl } from '@wordpress/components';
import { parseAttributes, fieldClassNames, isValidHtml5type } from '../util';
export const RadioField = ({
	attributes,
	label,
	fieldId,
	onChange,
	value,
	options,
	multiple,
	description,
	placeholder
}) => {
	attributes = parseAttributes(attributes, 'radio');

	return (
		<RadioControl
			className={fieldClassNames('radio')}
			id={fieldId}
			selected={value}
			options={options}
			onChange={onChange}
			label={label}
			help={description}
			{...attributes}
		/>
	);
};

RadioField.propTypes = {
	label: PropTypes.string,
	description: PropTypes.string,
	fieldId: PropTypes.string,
	required: PropTypes.bool,
	multiple: PropTypes.bool
};

RadioField.defaultProps = {
	required: false,
	multiple: false
};
