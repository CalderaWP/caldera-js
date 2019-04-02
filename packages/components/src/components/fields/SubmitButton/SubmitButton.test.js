import * as React from 'react';
import renderer from 'react-test-renderer';

import { SubmitButton } from './SubmitButton';

describe('Select Field component', () => {
	let onChange;
	beforeEach(() => {
		onChange = jest.fn();
	});
	it('matches snapshot', () => {
		const component = renderer.create(
			<SubmitButton
				label={'Send Message'}
				description={'Click to sendu'}
				fieldId={'button'}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});


});
