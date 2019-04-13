import React from 'react';
import SelectControl from "../../Controls/SelectControl";

export const Select = ({
	fieldId,
	value,
	label,
	multiple,
	onChange,
	onBlur,
	attributes,
	description,
	required,
	options
}) => (
	<SelectControl
		label={label}
		help={description}
		value={value}
		required={required}
		options={options}
		onChange={onChange}
		onBlur={onBlur}
	/>
);
