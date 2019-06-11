import * as React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import { HiddenField } from './HiddenField';

describe('HiddenField ', () => {
	let onChange;
	afterEach(cleanup);

	beforeEach(() => {
		onChange = jest.fn();
	});

	it('matches snapshot with all props', () => {
		const component = render(
			<HiddenField fieldId={'i11'} value={'Roy'} onChange={onChange} />
		);
		expect(component).toMatchSnapshot();
	});

	it('Changes calls change handler', () => {
		const { container } = render(
			<HiddenField fieldId={'i11'} value={'Roy'} onChange={onChange} />
		);

		const input = container.querySelector('input');
		const event = { target: { value: 200 } };
		fireEvent.change(input, event);
		expect(input.value).toBe('200');
	});
});
