import { fieldFactory } from './fieldFactory';
import React from 'react';
import { mount } from 'enzyme';

describe.only('change handlers', () => {
	let onChange;
	let onBlur;

	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it.skip('Updates fieldset state', () => {
		let updateValue = null;
		let called = false;
		const onChange = update => {
			called = true;
			updateValue = update;
		};
		const field = {
			fieldType: 'checkboxes',
			label: 'Checkbox Field Set Label',
			fieldId: 'checkboxFieldSetLabel',
			description: 'Checkbox field set description',
			required: true,
			value: ['opt-1'],
			options: [
				{
					value: 1,
					label: 'One',
					id: 'opt-1',
				},
				{
					value: 2,
					label: 'Two',
					id: 'opt-2',
					description: 'The Second Option',
					attributes: {
						checked: true,
					},
				},
				{
					value: 3,
					label: 'Three',
					id: 'opt-3',
				},
			],
		};
		const component = mount(fieldFactory(field, onChange, onBlur));
		expect(component.find('input#opt-1').length).toBe(1);
		expect(component.find('input#opt-2').length).toBe(1);
		expect(component.find('input#opt-3').length).toBe(1);
		component
			.find('input#opt-2')
			.find('input[type="checkbox"]')
			.simulate('change', { target: { checked: true } });
		expect(called).toBe(true);
		expect(updateValue).toEqual(['opt-1', 'opt-2']);

		component
			.find('input#opt-2')
			.find('input[type="checkbox"]')
			.simulate('change', { target: { checked: false } });
		expect(called).toBe(true);
		expect(updateValue).toEqual(['opt-1']);

		component
			.find('input#opt-2')
			.find('input[type="checkbox"]')
			.simulate('change', { target: { checked: true } });
		component
			.find('input#opt-3')
			.find('input[type="checkbox"]')
			.simulate('change', { target: { checked: true } });
		expect(updateValue).toEqual(['opt-1', 'opt-2', 'opt-3']);

		component
			.find('input#opt-2')
			.find('input[type="checkbox"]')
			.simulate('change', { target: { checked: false } });
		expect(updateValue).toEqual(['opt-1', 'opt-3']);
	});
});
