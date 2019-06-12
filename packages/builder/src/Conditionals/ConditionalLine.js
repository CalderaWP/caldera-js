import React, { useState, useEffect, Fragment } from 'react';
import useHover from 'react-use';
import { MagicField } from '../MagicField/MagicField';
import { SelectField, ButtonField } from '@calderajs/components';
const SelectFormField = ({ fields, value, onChange, label }) => {
	const options = fields.map(field => {
		return { value: field.ID, label: field.label };
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

const OptionSelector = ({value,field,label,onChange,style,fieldId}) => {
	const fieldOptions = field.config.option;
	const options = Object.keys(fieldOptions).map(optId => { return { value: optId, label: fieldOptions[optId].label }} );
	return <SelectField
		onChange={onChange}
		style={style}
		options={ options }
		value={value}
		label={label}
		fieldId={fieldId}
	/>
}

export const ConditionalLine = ({
	isFirst,
	line,
	onChange,
	fields,
	magics,
	id
}) => {
	const displayInline = { display: 'inline' };
	const { compare, value, parent, field } = line;
	const getCurrentField = () => fields.find( f => f.ID === field );
	const currentFieldType = 'object' === typeof  getCurrentField() ?  getCurrentField().type : null;
	const setCompareType = compare => onChange({ ...line, compare });
	const comparisonValueLabel = 'Comparison Value';
	const comparisonValueId = `compare-value-${id}`;
	const onChangeValue = value => onChange({ ...line, value });
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
				{currentFieldType && ['radio', 'select', 'checkbox'].includes(currentFieldType) ? (
						<OptionSelector {...{
							fieldId:comparisonValueId,
							value,
							field:getCurrentField(),
							label:comparisonValueLabel,
							onChange:onChangeValue,
							style:displayInline
						}
					} />
				) : (
					<MagicField
						style={displayInline}
						magics={magics}
						value={value}
						onChange={onChangeValue}
						label={comparisonValueLabel}
						fieldId={comparisonValueId}
					/>
				)}
				
				
			</div>
		</div>
	);
};
