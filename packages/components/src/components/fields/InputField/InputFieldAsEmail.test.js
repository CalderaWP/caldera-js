import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { InputField } from './InputField';

describe('InputField  as email field', () => {
	let onChange;
	let onBlur;

	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	const attributes = {
		maxlength: 77,
		multiple: true,
		spellcheck: false
	};

	it('Allows email attributes', () => {
		const component = mount(
			<InputField
				label={'Email addresses'}
				html5type={'email'}
				value={'roy@hiroy.club'}
				onChange={onChange}
				onBlur={onBlur}
				attributes={attributes}
			/>
		);

		expect(component.find('input').prop('type')).toEqual('email');
		expect(component.find('input').prop('maxLength')).toEqual(
			attributes.maxlength
		);
		expect(component.find('input').prop('multiple')).toEqual(
			attributes.multiple
		);
		expect(component.find('input').prop('value')).toEqual('roy@hiroy.club');
		expect(component.find('input').prop('spellCheck')).toEqual(false);
	});
});
