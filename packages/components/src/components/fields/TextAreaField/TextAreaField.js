import {
	parseAttributes,
	fieldClassNames,
	isValidHtml5type,
	toBoolean
} from '../util';

import PropTypes from 'prop-types';
import React from 'react';
import { TextareaControl } from '@wordpress/components';
export const TextAreaField = ({
	label,
	description,
	fieldId,
	placeholder,
	required,
	html5type,
	value,
	onChange,
	onBlur,
	attributes,
}) => {
	const fieldType = isValidHtml5type(html5type) ? html5type : 'text';
	const _attributes = parseAttributes(attributes, 'textarea');
	const rows = _attributes.hasOwnProperty('rows') ? _attributes.rows : 6;
	return(
		<TextareaControl
			rows={rows }
			label={label}
			id={fieldId}
			required={required}
			value={value}
			help={description}
			onChange={onChange}
			onBlur={onBlur}
			{..._attributes}
		/>
	)
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
		PropTypes.bool
	]),
	onChange: PropTypes.func,
	onBlur: PropTypes.func
};

TextAreaField.defaultProps = {
	onBlur: () => {},
	required: false,
};
