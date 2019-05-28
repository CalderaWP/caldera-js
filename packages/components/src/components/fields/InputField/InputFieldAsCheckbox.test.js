import * as React from 'react';
import { mount } from 'enzyme';

import { InputField } from './InputField';

describe('InputField  as checkbox field', () => {
	let onChange;
	let onBlur;

	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	const attributes = {
		checked: true,
		value: 1
	};

	it('Allows checkbox attributes', () => {
		const component = mount(
			<InputField
				fieldId={'i11'}
				label={'Can do thing'}
				html5type={'checkbox'}
				onChange={onChange}
				onBlur={onBlur}
				attributes={attributes}
			/>
		);

		expect(component.find('input').prop('type')).toEqual('checkbox');
		expect(component.find('input').prop('checked')).toEqual(true);
		expect(component.find('input').prop('value')).toEqual(attributes.value);
	});

	it('Sets checked based on value prop', () => {
		const component = mount(
			<InputField
				fieldId={'i11'}
				label={'Can do thing'}
				html5type={'checkbox'}
				value={true}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);

		expect(component.find('input').prop('type')).toEqual('checkbox');
		expect(component.find('input').prop('checked')).toEqual(true);
	});
});
