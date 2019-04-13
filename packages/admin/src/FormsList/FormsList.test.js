import * as React from 'react';
import renderer from 'react-test-renderer';

import { FormsList } from './FormsList';

describe('FormsList', () => {
	const forms = [
		{
			id: 'contact-form',
			name: 'Contact Form'
		},
		{
			id: 'other-form',
			name: 'Other Form'
		}
	];
	let onFormAction;
	beforeEach(() => {
		onFormAction = jest.fn();
	});

	it('Matches snapshot ', () => {
		const component = renderer.create(
			<FormsList
				forms={forms}
				panelTitle={'Panel Title'}
				noFormsMessage={'Custom No Forms Found'}
				onFormAction={() => {}}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
