import * as React from 'react';
import {render} from 'react-testing-library';
import { mount } from 'enzyme';

import { RadioField } from './RadioField';

describe('RadioField Field component', () => {
	let onChange;
	beforeEach(() => {
		onChange = jest.fn();
	});
	it('matches snapshot', () => {
		const component = render(
			<RadioField
				fieldId={'r1'}
				label={'Select A Hat!'}
				description={'selection of hats'}
				fieldId={'selection-hats'}
				options={[
					{ value: 100, label: 'Hat One' },
					{ value: 200, label: 'Hat Two' }
				]}
			/>
		);
		expect(component).toMatchSnapshot();
	});

	it('Fires on change event', () => {
		const component = mount(
			<RadioField
				fieldId={'r1'}
				label={'Select A Hat'}
				onChange={onChange}
				description={'selection of hats'}
				fieldId={'selection-hats'}
				required={true}
				multiple={true}
				options={[
					{ value: 100, label: 'One' },
					{ value: 200, label: 'Two' }
				]}
			/>
		);

		const event = { target: { value: 200 } };
		component
			.find('input')
			.first()
			.simulate('change', event);
		expect(onChange.mock.calls.length).toBe(1);
		expect(onChange.mock.calls[0][0]).toBe(200);
	});
});
