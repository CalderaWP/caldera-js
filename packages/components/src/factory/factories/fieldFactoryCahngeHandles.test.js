import {fieldFactory} from './fieldFactory';
import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField,
	toggleField,
	textAreaField,
	autoCompleteField
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

});
