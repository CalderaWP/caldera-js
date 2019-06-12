import React, { useState, useEffect, Fragment } from 'react';
import useHover from 'react-use';
import { MagicField } from '../MagicField/MagicField';
import { SelectField, ButtonField } from '@calderajs/components';
const SelectFormField = ({ fields, value, onChange, label }) => {
	const options = fields.map(field => {
		return { value: field.id, label: field.label };
	});
	return (
		<SelectField
			options={options}
			hideLabel
			label={label}
			value={value}
			onChange={onChange}
		/>
	);
};
const comparisonOptions = [
	{ value: 'is', label: 'Is' },
	{ value: 'isnot', label: 'Is Not' },
	{ value: 'greater', label: 'More Than' },
	{ value: 'smaller', label: 'Smaller Than' },
	{ value: 'startswith', label: 'Begins With' },
	{ value: 'endswith', label: 'Ends With' },
	{ value: 'contains', label: 'Contains' },
];

export const ConditionalLine = ({
	isFirst,
	line,
	onChange,
	fields,
	magics,
}) => {
	const displayInline = { display: 'inline' };
	const { compare, value, parent, field, id } = line;
	const setCompareType = compare => onChange({ ...line, compare });
	return (
		<div className={`caldera-condition-line condition-line-${id}`}>
			<span style={{ display: 'inline-block' }}>
				{isFirst ? 'if' : 'and'}
			</span>
			<div>
				<SelectFormField
					onChange={field => onChange({ ...line, field })}
					style={displayInline}
					fields={fields}
					value={field}
					label={'Comparison Field'}
					fieldId={`compare-field-${id}`}
				/>
				<SelectField
					onChange={compare => onChange({ ...line, compare })}
					style={displayInline}
					options={comparisonOptions}
					value={compare}
					label={'Comparison Type'}
					fieldId={`compare-type-${id}`}
				/>
				<MagicField
					style={displayInline}
					magics={magics}
					value={value}
					onChange={value => onChange({ ...line, value })}
					label={'Comparison Value'}
					fieldId={`compare-value-${id}`}
				/>
			</div>
		</div>
	);
};
