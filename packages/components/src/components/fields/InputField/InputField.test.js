import * as React from 'react';
import {render} from 'react-testing-library';
import { mount } from 'enzyme';

import { InputField } from './InputField';

describe('InputField ', () => {
	let onChange;
	let onBlur;

	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it('matches snapshot with all props', () => {
		const component = render(
			<InputField
				fieldId={'i11'}
				label={'Hi Roy'}
				description={'Say Hi'}
				placeholder={'Hello'}
				html5type={'text'}
				value={'Roy'}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);
		expect(component).toMatchSnapshot();
	});

	it('Uses text when html5type is not valid', () => {
		const component = mount(
			<InputField
				fieldId={'i11'}
				label={'Hi Roy'}
				description={'Say Hi'}
				placeholder={'Hello'}
				html5type={'unreal'}
				value={'Roy'}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);

		expect(component.find('input').prop('type')).toEqual('text');
	});

	it('Uses html5type as type when html5type is valid', () => {
		const component = mount(
			<InputField
				fieldId={'i11'}
				label={'Hi Roy'}
				description={'Say Hi'}
				placeholder={'Hello'}
				html5type={'email'}
				value={'Roy'}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);

		expect(component.find('input').prop('type')).toEqual('email');
	});

	it('Changes calls change handler', () => {
		const component = mount(
			<InputField
				fieldId={'i11'}
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
