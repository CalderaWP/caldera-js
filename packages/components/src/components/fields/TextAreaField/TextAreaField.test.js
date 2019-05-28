import * as React from 'react';
import { mount } from 'enzyme';
import {cleanup, render} from "react-testing-library";
import { TextAreaField } from './TextAreaField';

describe('TextAreaField ', () => {
	let onChange;
	let onBlur;

	afterEach(cleanup);


	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it('matches snapshot with all props', () => {
		const component = render(
			<TextAreaField
				fieldId={'ta1'}
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
		expect(component).toMatchSnapshot();
	});

	it.skip('Passes rows and cols props', () => {
		const component = mount(
			<TextAreaField
				fieldId={'ta1'}
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


	it.skip('Changes calls change handler', () => {
		const component = mount(
			<TextAreaField
				fieldId={'ta1'}
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
