import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { HorizontalForm } from './HorizontalForm';

import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField
} from '@calderajs/components';

describe('HorizontalForm', () => {
	let onClose;
	let onChange;
	let onBlur;

	beforeEach(() => {
		onClose = jest.fn();
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it('Matches snapshot', () => {
		const component = renderer.create(
			<HorizontalForm
				fields={[checkboxFieldset, selectField, checkboxField]}
				initialValues={{}}
				onClose={onClose}
				onChange={onChange}
				onBlur={onBlur}
				instanceId={'test-1'}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Calls on change', () => {
		const component = mount(
			<HorizontalForm
				fields={[checkboxFieldset, selectField, checkboxField]}
				initialValues={{}}
				onClose={onClose}
				onChange={onChange}
				onBlur={onBlur}
				instanceId={'test-2'}
			/>
		);
		const event = { target: { value: 2 } };
		component
			.find('select')
			.first()
			.simulate('change', event);
		expect(onChange.mock.calls.length).toBe(1);
	});
});
