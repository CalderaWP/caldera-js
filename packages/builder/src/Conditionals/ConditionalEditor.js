import React, { useState, useEffect, Fragment } from 'react';
import useHover from 'react-use';
import { MagicField } from '../MagicField/MagicField';
import { SelectField, ButtonField, Row, Column } from '@calderajs/components';
import { ConditionalRule } from './ConditionalRule';
import { ConditionalGroupTop } from './ConditionalGroupTop';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';

export const ConditionalEditor = ({ condition, onChange, fields, magics }) => {
	const { name, group, id, type } = condition;

	const onChangeName = name => onChange({ ...condition, name });
	const onChangeType = type => onChange({ ...condition, type });

	const groupRulesIds = Object.keys(group);
	const onEditLines = lines => {
		onChange({ ...condition, group: lines, felds });
	};

	function randomString(prefix) {
		function getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max));
		}

		return (
			prefix +
			[
				getRandomInt(10),
				getRandomInt(getRandomInt(10)),
				getRandomInt(10),
				getRandomInt(10),
				getRandomInt(10),
			].join('')
		);
	}

	function addLine(lines, parent = null) {
		const lineId = randomString('cl');

		return {
			...lines,
			[lineId]: {
				parent,
				field: '',
				compare: '',
				value: '',
			},
		};
	}

	function addRuleGroup() {
		const groupId = randomString('rw');
		return setGroup(groupId, addLine({}, groupId));
	}

	function setGroup(groupId, group) {
		return {
			...condition,
			group: {
				...condition.group,
				[groupId]: group,
			},
		};
	}

	const onAddLine = groupId => {
		const lineId = randomString('cl');
		let group = condition.group[groupId];
		group[lineId] = {
			parent: groupId,
			field: '',
			compare: 'is',
			value: '',
		};
		const update = {
			...condition,
			group: {
				...condition.group,
				[groupId]: group,
			},
		};
		onChange(update);
	};

	const onRemoveLine = (groupId, lineId) => {
		let group = condition.group[groupId];
		delete group[lineId];
		onChange({
			...condition,
			group: {
				...condition.group,
				[groupId]: { ...group },
			},
		});
	};
	const onAddGroup = () => onChange(addRuleGroup());

	const onRemoveGroup = groupId => {
		const update = condition;
		delete update.group[groupId];
		onChange({ ...update });
	};

	const topProps = {
		onChangeName,
		onChangeType,
		id,
		type,
		name,
		addRule: onAddGroup,
	};

	return (
		<Panel
			header="Condition"
			className="caldera-editor-condition-config caldera-forms-condition-edit"
		>
			<div className={`condition-point-${id}`}>
				<PanelBody
					title={`Group Settings`}
					icon="plugins"
					initialOpen={true}
				>
					<PanelRow>
						<ConditionalGroupTop {...topProps} />
					</PanelRow>
				</PanelBody>

				{groupRulesIds.map(groupId => {
					const isLast =
						groupRulesIds.indexOf(groupId) ===
						groupRulesIds.length - 1
							? true
							: false;
					const ruleProps = {
						removeGroup: () => {
							onRemoveGroup(groupId);
						},
						onChange: group => {
							const update = setGroup(groupId, group);

							const fields = {};
							Object.keys(update.group).forEach(groupId => {
								Object.keys(update.group[groupId]).forEach(
									lineId => {
										fields[lineId] =
											update.group[groupId][lineId].field;
									}
								);
							});
							onChange({
								...update,
								fields,
							});
						},
						addLine() {
							onAddLine(groupId);
						},
						fields,
						magics,
						isLast,
					};

					return (
						<PanelBody
							title={`Rule`}
							icon="plugins-checked"
							initialOpen={true}
						>
							<PanelRow>
								<ConditionalRule
									addLine={() => onAddLine(groupId)}
									removeLine={onRemoveLine}
									key={groupId}
									group={group[groupId]}
									groupId={groupId}
									{...ruleProps}
								/>
							</PanelRow>
						</PanelBody>
					);
				})}
			</div>
		</Panel>
	);
};
