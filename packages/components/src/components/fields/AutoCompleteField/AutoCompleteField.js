import { BaseControl,TextControl } from '../../Controls';
import React from "react";
import {fieldClassNames} from "../util";
import {SelectField} from '../SelectField/SelectField';
export const AutoCompleteField = (props) => {
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
			label={label}
			help={description}
		>
			<TextControl
				className={fieldClassNames('autocomplete')}
				id={fieldId}
				value={ value }
				suggestions={ options }
				onChange={ tokens => onChange(tokens) }
				placeholder={placeholder}
			/>
		</BaseControl>
	);
}

AutoCompleteField.propTypes = SelectField.propTypes;
AutoCompleteField.defaultProps = SelectField.defaultProps;
