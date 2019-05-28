import * as React from 'react';
import {mount} from 'enzyme';
import { SubmitButton } from './SubmitButton';
import {render} from "react-testing-library";

describe('Select Field component', () => {
	let onChange;
	beforeEach(() => {
		onChange = jest.fn();
	});
	it('matches snapshot', () => {
		const component = render(
			<SubmitButton
				label={'Send Message'}
				description={'Click to sendu'}
				fieldId={'button'}
			/>
		);
		expect(component).toMatchSnapshot();
	});

	it('Passes disabled attribute when set to true', () => {
		const component = mount(
			<SubmitButton
				label={'Send Message'}
				description={'Click to sendu'}
				attributes={{
					disabled: true
				}}
				fieldId={'button'}
			/>
		);
		expect(component.find('input').props().disabled ).toBe(true);
	});

	it('Does not disabled attribute when set to false', () => {
		const component = mount(
			<SubmitButton
				label={'Send Message'}
				description={'Click to sendu'}
				attributes={{
					disabled: false
				}}
				fieldId={'button'}
			/>
		);
		expect(component.find('input').props().disabled ).toBe(false);
	});

	it('Does not disabled attribute when not supplied', () => {
		const component = mount(
			<SubmitButton
				label={'Send Message'}
				description={'Click to sendu'}
				fieldId={'button'}
			/>
		);
		expect(component.find('input').props().disabled ).toBe(false);
	});

});
