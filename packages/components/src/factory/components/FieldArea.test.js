import React from 'react';
import {render, fireEvent, cleanup} from 'react-testing-library';
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
	afterEach(cleanup);
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




	it.skip('Changes calls change handler of text field', () => {
		const {container} = render(
			<FieldArea
				field={textField}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);

		const input = container.querySelector('input');
		const event = {target: {value: 200}};
		fireEvent(input, event)
		expect(input.value).toBe('200')
	});
});
