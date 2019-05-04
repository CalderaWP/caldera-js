import {BaseControl} from '../Controls';
import React from "react";
import {fieldClassNames, parseAttributes} from "../util";

export const SubmitButton = (props) => {
	const {
		label,
		description,
		fieldId,
		placeholder,
		required,
		value,
		onChange,
		onBlur,
		options,
		attributes
	} = props;
	const _attributes = {
		disabled: 'object' === typeof  attributes
			&& attributes.hasOwnProperty('disabled')
			&& true == attributes.disabled,
	}
	const {disabled} = _attributes;
	return (
		<BaseControl
			label={''}
			id={fieldId}
			help={description}
			fieldType={'submit'}
		>
			<input
				className={fieldClassNames('text')}
				type={'submit'}
				id={fieldId}
				value={label}
				disabled={disabled}
			/>
		</BaseControl>
	);
};

