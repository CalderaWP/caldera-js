import {
	parseAttributes,
	fieldClassNames,
	isValidHtml5type,
	toBoolean
} from '../util';

import PropTypes from 'prop-types';
import React from 'react';
import BaseControl from "../../Controls/BaseControl";

export const InputField = (
	{
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
	}
) => {
	const onChangeValue = (event) => onChange(event.target.value);

	const fieldType = isValidHtml5type(html5type) ? html5type : 'text';
	const _attributes = parseAttributes(attributes, fieldType);
	if ('checkbox' === fieldType) {
		const checked = value ? true : false;
		return (
			<BaseControl
				label={label}
				id={fieldId}
				help={description}
				className={''}>
				<input
					id={fieldId}
					className={fieldClassNames(fieldType)}
					type="checkbox"
					value="1"
					onChange={onChangeValue}
					checked={checked}
					aria-describedby={!!description ? fieldId + '__help' : undefined}
					{..._attributes}
				/>
				<label className="components-checkbox-control__label" htmlFor={fieldId}>
					{label}
				</label>
			</BaseControl>
		);
	} else {
		return (
			<BaseControl label={label} id={fieldId} help={description} className={''}>
				<input
					className={fieldClassNames(fieldType)}
					type={fieldType}
					id={fieldId}
					value={value}
					onChange={onChangeValue}
					aria-describedby={!!description ? fieldId + '__help' : undefined}
					placeholder={placeholder}
					onBlur={onBlur}
					{..._attributes}
				/>
			</BaseControl>
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
	onBlur: () => {
	},
	required: false,
	html5type: 'text'
};
