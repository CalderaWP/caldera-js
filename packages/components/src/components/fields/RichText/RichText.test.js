import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import {RichText} from "./RichText";

describe('RichText', () => {
	let setValue = jest.fn();
	let value;
	beforeEach(() => {
		setValue = jest.fn();
		value = ''
	});

	it.skip( 'Should match snapshot', () => {
		const component = renderer.create(
			<RichText
				label={'Rich Text Example'}
				onChange={setValue}
				description={'Rich Text description'}
				fieldId={'rich text'}
				placeholder={'--- Type Words === '}
				value={value}
			/>

		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it.skip( 'Should call change area', () => {
		const component = mount(
			<RichText
				label={'Rich Text Example'}
				onChange={setValue}
				description={'Rich Text description'}
				fieldId={'rich text'}
				placeholder={'--- Type Words === '}
				value={value}
			/>

		);
		const event = { target: { value: '<p>Pink Candle</p>' } };
		component.find('textarea').simulate('change', event);
		expect(onChange.mock.calls.length).toBe(1);
		expect(onChange.mock.calls[0][0]).toBe('<p>Pink Candle</p>');	});
});
