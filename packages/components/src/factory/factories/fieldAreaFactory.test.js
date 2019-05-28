import { fieldAreaFactory } from './fieldAreaFactory';
import React from 'react';
import {cleanup, render} from 'react-testing-library';
import { mount } from 'enzyme';
import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField, textAreaField, toggleField, autoCompleteField
} from '../fields.fixtures';

textField.fieldId = 'textFieldId';


describe('fieldAreaFactory', () => {
	afterEach(cleanup);

	let onChange;
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});
	it('Creates a text field', () => {
		const component = render(
			fieldAreaFactory(textField, onChange, onBlur)
		);
		expect(component).toMatchSnapshot();
	});

	it('Creates an select field', () => {
		const component = render(
			fieldAreaFactory(selectField, onChange, onBlur)
		);
		expect(component).toMatchSnapshot();
	});

	it('should create textarea', () => {
		const component = render(
			fieldAreaFactory(textAreaField, onChange, onBlur)
		);
		expect(component).toMatchSnapshot();
	});




});

describe('change handlers', () => {
	let onChange;
	let onBlur;
	afterEach(cleanup);
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it.skip('Changes calls change handler', () => {
		const component = mount(fieldAreaFactory(textField, onChange, onBlur));
		component.find('input').first().simulate('change');
		expect(onChange.mock.calls.length).toBe(1);
	});
});

describe('Showing errors', () => {
	//fieldErrors, fieldsTouch
	let onChange;
	let onBlur;
	afterEach( () => cleanup() );
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});
	it.skip('Does not display error class on field wrapper if field has not been touched', () => {
		const errorMessage = 'Fails!';
		const fieldErrors = {
			[textField.fieldId]: errorMessage
		};
		const component = mount(
			fieldAreaFactory(textField, onChange, onBlur, fieldErrors, {})
		);


		expect(
			component.find('.caldera-field-wrapper').hasClass('has-error')
		).toBe(false);
	});
	it.skip('Does  display error class on field wrapper if field has  been touched', () => {
		const errorMessage = 'Fails!';

		const fieldErrors = {
			[textField.fieldId]: errorMessage
		};
		const fieldTouched = {
			[textField.fieldId]: true
		};
		const component = mount(
			fieldAreaFactory(
				textField,
				onChange,
				onBlur,
				fieldErrors,
				fieldTouched
			)
		);

		expect(
			component
				.find('.caldera-field-wrapper')
				.first()
				.hasClass('has-error')
		).toBe(true);
	});

	it.skip('Does not display Message component if field has not been touched', () => {
		const errorMessage = 'Fails!';
		const fieldErrors = {
			[textField.fieldId]: errorMessage
		};
		const fieldTouched = {};
		const component = mount(
			fieldAreaFactory(
				textField,
				onChange,
				onBlur,
				fieldErrors,
				fieldTouched
			)
		);

		expect(component.find('.caldera-components-error').length).toBe(0);
	});

	it.skip('Does display Message component if field has been touched', () => {
		const errorMessage = 'Fails!';
		const fieldErrors = {
			[textField.fieldId]: errorMessage
		};
		const fieldTouched = {
			[textField.fieldId]: true
		};
		const component = mount(
			fieldAreaFactory(
				textField,
				onChange,
				onBlur,
				fieldErrors,
				fieldTouched
			)
		);
		expect(
			component.find('.caldera-components-error').hasClass('has-error')
		).toBe(true);
		expect(component.find('.caldera-components-error').text()).toBe(
			errorMessage
		);
	});

	it('Does not display Message component if field has no errors field has been touched', () => {
		const errorMessage = 'Fails!';
		const fieldErrors = {
			[textField.fieldId]: false
		};
		const fieldTouched = {
			[textField.fieldId]: true
		};
		const component = mount(
			fieldAreaFactory(
				textField,
				onChange,
				onBlur,
				fieldErrors,
				fieldTouched
			)
		);
		expect(component.find('.caldera-components-error').length).toBe(0);
	});

	test('Field can be a component using render prop', () => {
		const _Field = ({ fieldId }) => (
			<input id={fieldId} type={'number'} key={88} />
		);
		const field = {
			...selectField,
			render: _Field
		};
		const component = mount(
			fieldAreaFactory(field, onChange, onBlur, {}, {})
		);
		expect(component.find('#selectFieldId').length).toEqual(1);
		expect(component.find('#selectFieldId').prop('type')).toEqual('number');
	});
});
