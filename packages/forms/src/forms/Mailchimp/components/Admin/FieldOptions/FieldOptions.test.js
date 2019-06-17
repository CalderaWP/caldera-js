import React from 'react';
import { render } from 'react-testing-library';
import { FieldOptions } from './FieldOptions';

describe('FieldOptions', () => {
	const props = {
		getList: jest.fn(),
		accountId: 1,
		listId: 'fssd',
		instanceId: 'aads',
		setFieldsToHide: jest.fn(),
		fieldsToHide: jest.fn(),
	};
	it('Matches snapshot', () => {
		expect(render(<FieldOptions {...props} />)).toMatchSnapshot();
	});
});
