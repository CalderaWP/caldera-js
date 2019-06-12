import React, { useState, useEffect, Fragment } from 'react';
import useHover from 'react-use';
import { MagicField } from '../MagicField/MagicField';
import { SelectField, ButtonField } from '@calderajs/components';
import { ConditionalRule } from './ConditionalRule';
import { ConditionalGroupTop } from './ConditionalGroupTop';

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

	function addRuleGroup(condition) {
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

	const onAddLine = () => console.log(addLine(condition.group));
	const onAddGroup = () => onChange(addRuleGroup(condition));

	const topProps = {
		onChangeName,
		onChangeType,
		id,
		type,
		name,
		addRule: onAddGroup,
	};

	return (
		<div className="caldera-editor-condition-config caldera-forms-condition-edit">
			<ConditionalGroupTop {...topProps} />
			{groupRulesIds.map(groupId => {
				const isLast =
					groupRulesIds.indexOf(groupId) === groupRulesIds.length - 1
						? true
						: false;
				const ruleProps = {
					onChange: group => {
						onChange(setGroup(groupId, group));
					},
					fields,
					magics,
					isLast,
				};
				return (
					<ConditionalRule
						key={groupId}
						group={group[groupId]}
						{...ruleProps}
					/>
				);
			})}
		</div>
	);
};
