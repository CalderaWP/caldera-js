import {FormTokenField} from '@wordpress/components';
import { BaseControl } from '@wordpress/components';
import React from "react";
import {fieldClassNames} from "../util";
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
		options
	} = props;
	return (
		<BaseControl
			id={fieldId}
			help={description}
		>
			<input
				type={'submit'}
				id={fieldId}
				value={label}
			/>
		</BaseControl>
	);
};

