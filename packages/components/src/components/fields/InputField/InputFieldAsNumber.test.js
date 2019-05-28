import * as React from 'react';
import { mount } from 'enzyme';

import { InputField } from './InputField';
import {render} from "react-testing-library";

describe('InputField  as number', () => {
	let onChange;
	let onBlur;

	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	const attributes = {
		min: 5,
		max: 10,
		step: 0.1
	};

	it('Allows min, max and step attributes', () => {

		const {container} = render(
			<InputField
				fieldId={'i11'}
				label={'Number of Roys'}
				html5type={'number'}
				value={5}
				onChange={onChange}
				onBlur={onBlur}
				attributes={attributes}
			/>
		);
		const input = container.querySelector('input')



		expect(input.prop('type')).toEqual('number');
		expect(component.find('input').prop('min')).toEqual(attributes.min);
		expect(component.find('input').prop('max')).toEqual(attributes.max);
		expect(component.find('input').prop('step')).toEqual(attributes.step);
		expect(component.find('input').prop('value')).toEqual(5);
	});
});
