import * as React from 'react';
import { mount } from 'enzyme';
import {render,findByLabelText} from "react-testing-library";
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

	it.skip('Allows checkbox attributes', () => {

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
		const label = 'Can Do';

		const {container} = render(
			<InputField
				fieldId={'i11'}
				label={'Can do thing'}
				html5type={'checkbox'}
				value={true}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);
		const input = container.querySelector('input')
		const event = {target: {value: 200}};
		fireEvent.click(input, event);
		expect(input.value).toBe('200')


	});
});
