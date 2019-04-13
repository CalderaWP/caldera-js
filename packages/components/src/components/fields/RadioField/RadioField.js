import PropTypes from 'prop-types';
import React from 'react';
import { parseAttributes, fieldClassNames, isValidHtml5type } from '../util';
import {isEmpty} from "lodash";
import BaseControl from "../../Controls/BaseControl";
import classnames from "classnames";
export const RadioField = ({
	attributes,
	label,
	fieldId,
	onChange,
	value,
	options,
	multiple,
	description,
	placeholder,
							   className
}) => {
	attributes = parseAttributes(attributes, 'radio');
	const onChangeValue = (event) => onChange(event.target.value);


	return !isEmpty(options) && (
		<BaseControl label={label} id={fieldId} help={description} className={classnames(className, 'components-radio-control')}>
			{options.map((option, index) =>
				<div
					key={`${ fieldId }-${ index }`}
					className="components-radio-control__option"
				>
					<input
						id={`${ fieldId }-${ index }`}
						className={fieldClassNames('radio')}
						type="radio"
						name={fieldId}
						value={option.value}
						onChange={onChangeValue}
						checked={option.value === value}
						aria-describedby={!!description ? `${ fieldId }__help` : undefined}
					/>
					<label htmlFor={`${ fieldId }-${ index }`}>
						{option.label}
					</label>
				</div>
			)}
		</BaseControl>
	);
};

RadioField.propTypes = {
	label: PropTypes.string,
	description: PropTypes.string,
	fieldId: PropTypes.string,
	required: PropTypes.bool,
	multiple: PropTypes.bool,
	options: PropTypes.array
};

RadioField.defaultProps = {
	required: false,
	multiple: false
};
