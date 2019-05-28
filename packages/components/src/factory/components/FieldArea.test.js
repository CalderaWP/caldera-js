import React from 'react';
import {render} from 'react-testing-library';
import { mount } from 'enzyme';
import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	radioField,
	emailField
} from '../fields.fixtures';

import { FieldArea } from './FieldArea';

describe('FieldArea component', () => {
	let onChange;
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it('Creates a text field', () => {
		const component = render(
			<FieldArea field={textField} onChange={onChange} onBlur={onBlur} />
		);
		expect(component).toMatchSnapshot();
	});
	it('Shows errors', () => {
		const fieldErrors = {
			[textField.fieldId]: 'Fail Cake!'
		};
		const fieldsTouched = {
			[textField.fieldId]: true
		};

		const component = render(
			<FieldArea
				field={textField}
				onChange={onChange}
				onBlur={onBlur}
				fieldErrors={fieldErrors}
				fieldsTouch={fieldsTouched}
			/>
		);
		expect(component).toMatchSnapshot();
	});

	it('Creates an select field', () => {
		const component = render(
			<FieldArea
				field={selectField}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);
		expect(component).toMatchSnapshot();
	});

	it('Changes calls change handler of radio field', () => {
		const component = mount(
			<FieldArea field={radioField} onChange={onChange} onBlur={onBlur} />
		);

		component
			.find('input')
			.first()
			.simulate('change');
		expect(onChange.mock.calls.length).toBe(1);
	});
	it('Changes calls change handler of checkbox field', () => {
		const component = mount(
			<FieldArea
				field={checkboxField}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);

		component.find('input').simulate('change');
		expect(onChange.mock.calls.length).toBe(1);
	});
});
