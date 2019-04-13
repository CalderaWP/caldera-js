import {
	parseAttributes,
	fieldClassNames,
	isValidHtml5type,
	toBoolean
} from '../util';

import PropTypes from 'prop-types';
import React from 'react';
import CheckboxControl from "../../Controls/CheckboxControl";
import TextControl from "../../Controls/TextControl";
export const InputField = ({
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
	children
}) => {
	const fieldType = isValidHtml5type(html5type) ? html5type : 'text';
	const _attributes = parseAttributes(attributes, fieldType);
	if ('checkbox' === fieldType) {
		const checked = value ? true : false;
		return (
			<CheckboxControl
				id={fieldId}
				checked={checked}
				help={description}
				{..._attributes}
				onChange={onChange}
				label={label}
				onBlur={onBlur}
			/>
		);
	} else {
		return (
			<TextControl
				label={label}
				className={fieldClassNames(fieldType)}
				id={fieldId}
				value={value}
				placeholder={placeholder}
				type={fieldType}
				onChange={onChange}
				onBlur={onBlur}
				help={description}
				{..._attributes}
			/>
		);
	}
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
		PropTypes.bool
	]),
	onChange: PropTypes.func,
	onBlur: PropTypes.func
};

InputField.defaultProps = {
	onBlur: () => {},
	required: false,
	html5type: 'text'
};
