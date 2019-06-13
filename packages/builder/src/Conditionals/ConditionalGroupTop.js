import React from 'react';
import {
	InputField,
	SelectField,
	ButtonField,
	Row,
	Column,
} from '@calderajs/components';

export const ConditionalGroupTop = ({
	onChangeName,
	onChangeType,
	id,
	type,
	name,
	addRule,
}) => {
	return (
		<div
			className={
				'caldera-condition-group caldera-condition-lines caldera-condition-lines-${id}`'
			}
		>
			<Row>
				<Column width={1} columnId={`condition-point-${id}-top-name`}>
					<InputField
						label={'Name'}
						html5type={'text'}
						onChange={onChangeName}
						value={name}
						fieldId={`condition-group-name-${id}`}
					/>
				</Column>
			</Row>
			<Row>
				<Column width={0.5} columnId={`condition-point-${id}-top-type`}>
					<SelectField
						label={'Type'}
						onChange={onChangeType}
						value={type}
						fieldId={`condition-group-type-${id}`}
						options={[
							{
								value: 'show',
								label: 'Show',
							},
							{
								value: 'hide',
								label: 'Hide',
							},
							{
								value: 'disable',
								label: 'Disable',
							},
						]}
					/>
				</Column>
				<Column width={0.5} columnId={`condition-point-${id}-top-add`}>
					{type && (
						<ButtonField
							onClick={addRule}
							className="pull-right button button-small"
						>
							Add Rule Group
						</ButtonField>
					)}
				</Column>
			</Row>
		</div>
	);
};
