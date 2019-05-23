import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { HiddenField } from './HiddenField';

describe('HiddenField ', () => {
	let onChange;

	beforeEach(() => {
		onChange = jest.fn();
	});

	it('matches snapshot with all props', () => {
		const component = renderer.create(
			<HiddenField
				fieldId={'i11'}
				value={'Roy'}
				onChange={onChange}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});


	it('Changes calls change handler', () => {
		const component = mount(
			<HiddenField
				fieldId={'i11'}
				value={'Roy'}
				onChange={onChange}
			/>
		);

		expect( component.find('input').prop('value')).toEqual( 'Roy');
		component.find('input').simulate('change');
		expect(onChange.mock.calls.length).toBe(1);
	});
});
