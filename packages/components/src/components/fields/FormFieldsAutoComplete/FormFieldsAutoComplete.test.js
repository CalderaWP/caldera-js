import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { FormFieldsAutoComplete } from './FormFieldsAutoComplete';

import {
	autoCompleteField,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField
} from '../../../factory';

describe('FormFieldsAutoComplete', () => {
	let onClose;
	let onChange;
	let onBlur;

	const form = {
		fields: [
			selectField,checkboxField
		]
	};
	beforeEach(() => {
		onClose = jest.fn();
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	const {
		label,
		fieldId,
		description,
		value
	} = autoCompleteField;

	it( 'Matches snapshot', () => {
		const component = renderer.create(
			<FormFieldsAutoComplete
				label={label}
				fieldId={fieldId}
				description={description}
				value={value}
				form={form}
			/>
		);

		expect(component.toJSON()).toMatchSnapshot();

	});

	it( 'Additional options merged in', () => {
		const component = renderer.create(
			<FormFieldsAutoComplete
				label={label}
				fieldId={fieldId}
				description={description}
				value={value}
				form={form}
				additionalOptions={['f', 'y']}
			/>
		);

		expect(component.toJSON()).toMatchSnapshot();

	})

});
