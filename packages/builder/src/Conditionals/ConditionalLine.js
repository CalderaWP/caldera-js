import React, { useState, useEffect, Fragment } from 'react';
import useHover from 'react-use';
import { MagicField } from '../MagicField/MagicField';
import { SelectField, ButtonField, Row, Column } from '@calderajs/components';
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

const OptionSelector = ({ value, field, label, onChange, fieldId }) => {
	const fieldOptions = field.config.option;
	const options = Object.keys(fieldOptions).map(optId => {
		return { value: optId, label: fieldOptions[optId].label };
	});
	return (
		<SelectField
			hideLabel
			onChange={onChange}
			options={options}
			value={value}
			label={label}
			fieldId={fieldId}
		/>
	);
};

export const ConditionalLine = ({
	isFirst,
	line,
	onChange,
	fields,
	magics,
	id,
	removeLine,
}) => {
	const { compare, value, parent, field } = line;
	const getCurrentField = () => fields.find(f => f.ID === field);
	const currentFieldType =
		'object' === typeof getCurrentField() ? getCurrentField().type : null;
	const setCompareType = compare => onChange({ ...line, compare });
	const comparisonValueLabel = 'Comparison Value';
	const comparisonValueId = `compare-value-${id}`;
	const onChangeValue = value => onChange({ ...line, value });
	return (
		<div className={`caldera-condition-line condition-line-${id}`}>
			<Row>
				<Column width={1} columnId={`condition-point-${id}-prefix`}>
					{isFirst ? 'if' : 'and'}
				</Column>
			</Row>
			<Row>
				<Column width={0.35} columnId={`compare-field-${id}-cl`}>
					<SelectFormField
						onChange={field => onChange({ ...line, field })}
						fields={fields}
						value={field}
						label={'Comparison Field'}
						fieldId={`compare-field-${id}`}
					/>
				</Column>
				<Column width={0.2} columnId={`compare-type-${id}-col`}>
					<SelectField
						hideLabel
						onChange={compare => onChange({ ...line, compare })}
						options={comparisonOptions}
						value={compare}
						label={'Comparison Type'}
						fieldId={`compare-type-${id}`}
					/>
				</Column>
				<Column width={0.4} columnId={`condition-point-${id}-top`}>
					{currentFieldType &&
					['radio', 'select', 'checkbox'].includes(
						currentFieldType
					) ? (
						<OptionSelector
							{...{
								fieldId: comparisonValueId,
								value,
								field: getCurrentField(),
								label: comparisonValueLabel,
								onChange: onChangeValue,
							}}
						/>
					) : (
						<MagicField
							toggleInline={true}
							magics={magics}
							value={value}
							onChange={onChangeValue}
							label={comparisonValueLabel}
							fieldId={comparisonValueId}
						/>
					)}
				</Column>
				{!isFirst && (
					<Column
						width={0.1}
						columnId={`compare-line-remove-${id}-col`}
					>
						<ButtonField onClick={removeLine}>-</ButtonField>
					</Column>
				)}
			</Row>
		</div>
	);
};
