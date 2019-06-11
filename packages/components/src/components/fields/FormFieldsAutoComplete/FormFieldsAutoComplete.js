import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { AutoCompleteField } from '../AutoCompleteField/AutoCompleteField';

export const FORM_FIELDS_AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER =
	'form-fields-auto-complete';

const RenderItem = (item, highlighted) => (
	<li
		className={'tag'}
		key={item.id ? item.id : item.value}
		style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
		title={item.description}
	>
		{item.label}
	</li>
);
export const FormFieldsAutoComplete = props => {
	const {
		form,
		required,
		onChange,
		onBlur,
		value,
		label,
		description,
		fieldId,
	} = props;

	const options = useMemo(
		() =>
			form.fields.map(field => {
				const tag = `%${field.fieldId}%`;
				return {
					label: `${tag}`,
					value: `${tag}`,
					type: 'field',
					description: `Use the value of the field ${field.label}`,
				};
			}),
		[form]
	);
	return (
		<AutoCompleteField
			label={label}
			onChange={onChange}
			description={description}
			fieldId={fieldId}
			value={value}
			onBlur={onBlur}
			required={required}
			options={options}
			RenderItem={RenderItem}
		/>
	);
};

FormFieldsAutoComplete.propTypes = {
	...AutoCompleteField.propTypes,
	form: PropTypes.shape({
		id: PropTypes.string,
		fields: PropTypes.arrayOf(
			PropTypes.shape({
				label: PropTypes.string.isRequired,
				value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
					.isRequired,
			})
		),
	}),
};

FormFieldsAutoComplete.defaultProps = {
	...AutoCompleteField.defaultProps,
};
