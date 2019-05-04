import { fieldAreaFactory } from './fieldAreaFactory';
import React from 'react';
import renderer from 'react-test-renderer';
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

import { fieldWrapperClassNames } from '@calderajs/components';
import { fieldFactory } from './fieldFactory';

describe('fieldAreaFactory', () => {
	let onChange;
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});
	it('Creates a text field', () => {
		const component = renderer.create(
			fieldAreaFactory(textField, onChange, onBlur)
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Creates an select field', () => {
		const component = renderer.create(
			fieldAreaFactory(selectField, onChange, onBlur)
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('should create textarea', () => {
		const component = renderer.create(
			fieldAreaFactory(textAreaField, onChange, onBlur)
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('should create toggle', () => {
		const component = renderer.create(
			fieldAreaFactory(toggleField, onChange, onBlur)
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Should create an autocomplete field', () => {
		const component = renderer.create(
			fieldAreaFactory(autoCompleteField, onChange, onBlur)
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});

describe('change handlers', () => {
	let onChange;
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it('Changes calls change handler', () => {
		const component = mount(fieldAreaFactory(textField, onChange, onBlur));
		component.find('input').simulate('change');
		expect(onChange.mock.calls.length).toBe(1);
	});
});

describe('Showing errors', () => {
	//fieldErrors, fieldsTouch
	let onChange;
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});
	it('Does not display error class on field wrapper if field has not been touched', () => {
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
	it.only('Does  display error class on field wrapper if field has  been touched', () => {
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

	it('Does not display Message component if field has not been touched', () => {
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

	it('Does display Message component if field has been touched', () => {
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
