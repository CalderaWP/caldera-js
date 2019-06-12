import React, { Fragment } from 'react';

import { TextInput, SelectField } from '@calderajs/components';

const NewConditionalGroup = ({ placeholder, name, onChange }) => {
	return (
		<TextInput
			label={'New Group'}
			value={name}
			onChange={onChange}
			placeholder={placeholder}
			style={{ width: '100%' }}
		/>
	);
};

NewConditionalGroup.defaultProps = { placeholder: 'New Group Name' };
const ConditionalsListItem = ({ name, id, _open_condition, onChooseGroup }) => {
	const className = `caldera-condition-nav  ${
		id === _open_condition ? 'active' : ''
	}  caldera-forms-condition-group condition-point-${id}`;
	return (
		<li className={className}>
			<ButtonField onClick={onChooseGroup} variant={'secondary'}>
				{name}
			</ButtonField>
		</li>
	);
};
const ConditionalsList = ({ conditions }) => {
	const panelStyle = { marginBottom: '32px' };
	return (
		<div className="caldera-editor-conditions-panel" style={panelStyle}>
			<ul className="active-conditions-list">
				{conditions.map(condition => (
					<ConditionalsListItem
						key={condition.id}
						condition={condition}
					/>
				))}
			</ul>
		</div>
	);
};

export const Conditionals = ({
	_open_condition,
	conditions,
	onChange,
	magics,
	fields,
}) => {
	const marginBottom32 = { marginBottom: '32px' };
	return (
		<div id="caldera-forms-conditions-panel">
			<input
				type="hidden"
				name="_open_condition"
				value={_open_condition}
			/>
			<ConditionalsList conditions={conditions} />
			<ConditionalEditors
				conditions={conditions}
				onChange={onChange}
				magics={magics}
				fields={fields}
			/>
		</div>
	);
};
