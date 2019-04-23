import {fieldFactory} from './fieldFactory';
import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import {
	checkboxFieldset,
	textField,
	radioField,
	toggleField,
} from '../fields.fixtures';



describe('change handlers', () => {
	let onChange;
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it('Changes calls change handler of text field', () => {
		const component = mount(fieldFactory(textField, onChange, onBlur));
		component.find('input').simulate('change');
		expect(onChange.mock.calls.length).toBe(1);
	});

	it('Updates fieldset state', () => {
		let updateValue = null;
		let called = false;
		const onChange = (update) => {
			called = true;
			updateValue = update;
		};
		const component = mount(fieldFactory({
			...checkboxFieldset,
			value: ['opt-1']
		}, onChange, onBlur));
		expect( component.find('input#opt-1').length ).toBe(1);
		expect( component.find('input#opt-2').length ).toBe(1);
		expect( component.find('input#opt-3').length ).toBe(1);
		component.find('input#opt-2').find('input[type="checkbox"]').simulate('change',{ target: { checked: true } })
		expect(called).toBe(true);
		expect(updateValue).toEqual(['opt-1', 'opt-2']);

		component.find('input#opt-2').find('input[type="checkbox"]').simulate('change',{ target: { checked: false } })
		expect(called).toBe(true);
		expect(updateValue).toEqual(['opt-1']);

		component.find('input#opt-2').find('input[type="checkbox"]').simulate('change',{ target: { checked: true } })
		component.find('input#opt-3').find('input[type="checkbox"]').simulate('change',{ target: { checked: true } })
		expect(updateValue).toEqual(['opt-1', 'opt-2', 'opt-3']);

		component.find('input#opt-2').find('input[type="checkbox"]').simulate('change',{ target: { checked: false } })
		expect(updateValue).toEqual(['opt-1', 'opt-3']);

	});
});
