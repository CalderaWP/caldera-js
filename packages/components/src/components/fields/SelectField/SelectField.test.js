import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import { mount } from 'enzyme';

import { SelectField } from './SelectField';

describe('Select Field component', () => {
	let onChange;
	beforeEach(() => {
		onChange = jest.fn();
	});
	afterEach(cleanup);

	it('matches snapshot, not multiple', () => {
		const component = render(
			<SelectField
				fieldId={'s1'}
				label={'Select A Hat!'}
				description={'selection of hats'}
				fieldId={'selection-hats'}
				required={false}
				multiple={false}
			/>
		);
		expect(component).toMatchSnapshot();
	});

	it.skip('Fires on change event', () => {
		const component = mount(
			<SelectField
				label={'Select A Hat'}
				onChange={onChange}
				description={'selection of hats'}
				fieldId={'selection-hats'}
				required={true}
				multiple={true}
				options={[
					{ value: 1, label: 'One' },
					{ value: 2, label: 'Two' },
				]}
			/>
		);

		const event = { target: { value: 2 } };
		component.find('select').simulate('change', event);
		expect(onChange.mock.calls.length).toBe(1);
		expect(onChange.mock.calls[0][0]).toBe(2);
	});

	it('With no value selected and placeholder', () => {
		const placeholder = '---';
		const component = mount(
			<SelectField
				label={'Select A Hat'}
				onChange={onChange}
				description={'selection of hats'}
				fieldId={'selection-hats'}
				placeholder={placeholder}
				required={true}
				options={[
					{ value: 1, label: 'One' },
					{ value: 2, label: 'Two' },
				]}
			/>
		);
		expect(
			component
				.find('select')
				.find('option')
				.first()
				.props()
		).toEqual({ children: '--', value: null });
	});
});
