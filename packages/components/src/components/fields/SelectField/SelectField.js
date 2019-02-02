import PropTypes from 'prop-types';
import React from 'react';
import { SelectControl } from '@wordpress/components';
import { parseAttributes, fieldClassNames, isValidHtml5type } from '../util';
export const SelectField = ({
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
	attributes = parseAttributes(attributes, 'select');

	if (!value && placeholder) {
		options.unshift({
			label: placeholder
		});
	}
	return (
		<SelectControl
			className={fieldClassNames('select')}
			id={fieldId}
			value={value}
			options={options}
			onChange={onChange}
			label={label}
			help={description}
			{...attributes}
		/>
	);
};

SelectField.propTypes = {
	label: PropTypes.string,
	description: PropTypes.string,
	fieldId: PropTypes.string,
	required: PropTypes.bool,
	multiple: PropTypes.bool
};

SelectField.defaultProps = {
	required: false,
	multiple: false,
	description: ''
};
