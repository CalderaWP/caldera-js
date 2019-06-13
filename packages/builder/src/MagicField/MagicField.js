import {
	AutoCompleteField,
	SelectField,
	Row,
	Column,
} from '@calderajs/components';
import React, { useState, useEffect, Fragment } from 'react';

function compileTags({ magic, includeTypes, excludeTypes }) {
	const { wrap, tags } = magic;
	const wrapper = value => `${wrap[0]}${value}${wrap[1]}`;
	const compiled = [];
	const useIncluesOnly = includeTypes.length;
	const useNotExludedOnly = !useIncluesOnly && excludeTypes.length;
	const useAll = !useIncluesOnly && !useNotExludedOnly;

	Object.keys(tags).forEach(tagType => {
		if (tags[tagType].length) {
			if (
				useAll ||
				(useIncluesOnly && includeTypes.includes(tagType)) ||
				(useNotExludedOnly && !excludeTypes.includes(tagType))
			) {
				tags[tagType].forEach(value => {
					compiled.push({
						value: wrapper(value),
						label: value,
					});
				});
			}
		}
	});
	return compiled;
}

export const MagicField = ({
	magics,
	onChange,
	value,
	includeTypes,
	excludeTypes,
	fieldId,
	toggleBelow,
	toggleInline,
	label,
}) => {
	const [currentMagicType, setCurrentMagic] = useState('field');
	const [options, setOptions] = useState([]);

	const magicTypes = [
		{
			value: 'field',
			label: 'Field',
		},
	];

	if (!excludeTypes.includes('system')) {
		magicTypes.push({
			value: 'system',
			label: 'System',
		});
	}
	useEffect(() => {
		setOptions(
			compileTags({
				magic: magics[currentMagicType],
				includeTypes,
				excludeTypes,
			})
		);
	}, [currentMagicType, includeTypes, excludeTypes, magics]);

	const Toggle = () => (
		<SelectField
			label={'Magic Type'}
			onChange={setCurrentMagic}
			options={magicTypes}
			value={currentMagicType}
			fieldId={`magic-type-${fieldId}`}
		/>
	);
	const Field = () => (
		<AutoCompleteField
			label={label}
			onChange={onChange}
			options={options}
			value={value}
			fieldId={fieldId}
		/>
	);

	if (toggleInline) {
		return (
			<Row>
				<Column width={0.5}>
					<Field />
				</Column>

				<Column width={0.5}>
					<Toggle />
				</Column>
			</Row>
		);
	}
	if (toggleBelow) {
		return (
			<Fragment>
				<Field />
				<Toggle />
			</Fragment>
		);
	}

	return (
		<Fragment>
			<Field />
			<Toggle />
		</Fragment>
	);
};

MagicField.defaultProps = {
	includeTypes: [],
	excludeTypes: [],
	toggleBelow: false,
};
