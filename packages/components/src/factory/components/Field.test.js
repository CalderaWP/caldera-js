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

import { Field } from './Field';

describe('Field component', () => {
	let onChange = jest.fn();
	let onBlur = jest.fn();
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it('Creates a text field', () => {
		const component = render(
			<Field field={textField} onChange={onChange} onBlur={onBlur} />
		);
		expect(component).toMatchSnapshot();
	});
	it('Creates a number field', () => {
		const component = render(
			<Field field={numberField} onChange={onChange} onBlur={onBlur} />
		);
		expect(component).toMatchSnapshot();
	});

	it('Creates an email field', () => {
		const component = render(
			<Field field={emailField} onChange={onChange} onBlur={onBlur} />
		);
		expect(component).toMatchSnapshot();
	});

	it('Creates an checkbox field field', () => {
		const component = mount(
			<Field field={checkboxField} onChange={onChange} onBlur={onBlur} />
		);
		expect(component.find('input').prop('type')).toEqual('checkbox');
	});

	it('Creates an checkbox field set', () => {
		const component = render(
			<Field
				field={checkboxFieldset}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);
		expect(component).toMatchSnapshot();
	});

	it('Creates an select field', () => {
		const component = render(
			<Field field={selectField} onChange={onChange} onBlur={onBlur} />
		);
		expect(component).toMatchSnapshot();
	});

	it('Creates an select field identified as dropdown', () => {
		const component = render(
			<Field
				field={{
					...selectField,
					fieldType: 'dropdown'
				}}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);
		expect(component).toMatchSnapshot();
	});

	it('Changes calls change handler of text field', () => {
		const component = mount(
			<Field field={textField} onChange={onChange} onBlur={onBlur} />
		);

		console.log(component.debug());
		return;

		component.find('input').simulate('change');
		expect(onChange.mock.calls.length).toBe(1);
	});
	it('Changes calls change handler of select field', () => {
		const component = mount(
			<Field field={selectField} onChange={onChange} onBlur={onBlur} />
		);

		component.find('select').simulate('change');
		expect(onChange.mock.calls.length).toBe(1);
	});
	it('Changes calls change handler of radio field', () => {
		const component = mount(
			<Field field={radioField} onChange={onChange} onBlur={onBlur} />
		);

		component
			.find('input')
			.first()
			.simulate('change');
		expect(onChange.mock.calls.length).toBe(1);
	});
	it('Changes calls change handler of checkbox field', () => {
		const component = mount(
			<Field field={checkboxField} onChange={onChange} onBlur={onBlur} />
		);

		component.find('input').simulate('change');
		expect(onChange.mock.calls.length).toBe(1);
	});
});
