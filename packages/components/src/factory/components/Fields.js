import React, { Fragment } from 'react';
import { Field } from './Field';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { collectFieldValues } from './collectFieldValues';
export const Fields = ({ fields, onChange, onBlur, className }) => (
	<div className={classNames('caldera-fields-wrapper', className)}>
		{fields.map(field => (
			<Field
				key={field.fieldId}
				field={field}
				onChange={newValue => {
					onChange({
						...collectFieldValues(fields),
						[field.fieldId]: newValue
					});
				}}
				onBlur={onBlur}
			/>
		))}
	</div>
);

Fields.propTypes = {
	field: PropTypes.shape({
		fieldId: PropTypes.string.isRequired
		//input propTypes?
	}),
	onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func,
	className: PropTypes.string
};
