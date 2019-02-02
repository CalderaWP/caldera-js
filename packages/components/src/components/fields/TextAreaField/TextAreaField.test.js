import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { TextAreaField } from './TextAreaField';

describe('TextAreaField ', () => {
	let onChange;
	let onBlur;

	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it('matches snapshot with all props', () => {
		const component = renderer.create(
			<TextAreaField
				label={'Hi Roy'}
				description={'Say Hi'}
				value={'Roy'}
				onChange={onChange}
				onBlur={onBlur}
				attributes={{
					maxlength: 5, minlength: 1,cols:8,rows:5
				}}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Passes rows and cols props', () => {
		const component = mount(
			<TextAreaField
				label={'Hi Roy'}
				description={'Say Hi'}
				placeholder={'Hello'}
				html5type={'email'}
				value={'Roy'}
				onChange={onChange}
				onBlur={onBlur}
				attributes={{
					cols:8,rows:5
				}}
			/>
		);

		component.find('textarea').simulate('change');
		expect(component.find('textarea').props().cols ).toBe(8);
		expect(component.find('textarea').props().rows ).toBe(5);
	});


	it('Changes calls change handler', () => {
		const component = mount(
			<TextAreaField
				label={'Hi Roy'}
				description={'Say Hi'}
				placeholder={'Hello'}
				html5type={'email'}
				value={'Roy'}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);

		component.find('textarea').simulate('change');
		expect(onChange.mock.calls.length).toBe(1);
	});
});
