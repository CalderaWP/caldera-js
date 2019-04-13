import {
	parseAttributes,
	fieldClassNames,
	isValidHtml5type,
	toBoolean
} from '../util';

import PropTypes from 'prop-types';
import React from 'react';
import { BaseControl, ToggleControl } from '../../Controls';
export const ToggleField = ({
	label,
	description,
	fieldId,
	placeholder,
	required,
	html5type,
	onChange,
	onBlur,

								checked,
}) => {

	return(
		<BaseControl
			id={fieldId}
			label={label}
			help={description}
		>
			<ToggleControl
				onBlur={onBlur}
				checked={ checked }
				onChange={ onChange }
			/>
		</BaseControl>

	)
};

ToggleField.propTypes = {
	label: PropTypes.string,
	description: PropTypes.string,
	fieldId: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
	onBlur: PropTypes.func
};

ToggleField.defaultProps = {
	onBlur: () => {},
	required: false,
};
