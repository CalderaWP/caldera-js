import PropTypes from 'prop-types';
import React from 'react';
import { parseAttributes, fieldClassNames, isValidHtml5type } from '../util';
import {isEmpty} from "lodash";
import BaseControl from "../../Controls/BaseControl";
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

	const onChangeValue = (event) => {
		onChange(event.target.value);
	};

	// Disable reason: A select with an onchange throws a warning

	/* eslint-disable jsx-a11y/no-onchange */
	return !isEmpty(options) && (
		<BaseControl label={label} id={fieldId} help={description} className={''}>
			<select
				id={fieldId}
				className="components-select-control__input"
				onChange={onChangeValue}
				aria-describedby={!!description ? `${ fieldId }__help` : undefined}
				multiple={multiple}
				{...attributes}
			>
				{options.map((option, index) =>
					<option
						key={`${ option.label }-${ option.value }-${ index }`}
						value={option.value}
					>
						{option.label}
					</option>
				)}
			</select>
		</BaseControl>
	);
	/* eslint-enable jsx-a11y/no-onchange */

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
