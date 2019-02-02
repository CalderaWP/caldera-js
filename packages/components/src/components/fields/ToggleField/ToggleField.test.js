import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { ToggleField } from './ToggleField';

describe('ToggleField ', () => {
	let onChange;
	let onBlur;

	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it('matches snapshot with all props', () => {
		const component = renderer.create(
			<ToggleField
				label={'Hi Roy'}
				description={'Say Hi'}
				value={'Roy'}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Changes calls change handler', () => {
		const component = mount(
			<ToggleField
				label={'Hi Roy'}
				description={'Say Hi'}
				placeholder={'Hello'}
				html5type={'email'}
				value={'Roy'}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);

		component.find('input').simulate('change');
		expect(onChange.mock.calls.length).toBe(1);
	});
});
