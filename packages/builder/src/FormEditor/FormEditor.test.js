import React from 'react';
import { render } from 'react-testing-library';
import { FormEditor } from './FormEditor';
import { processorsCollection } from './Processors/processors.fixtures';
const form = {
	id: 'a-form',
	name: 'Form Name',
	processors: processorsCollection,
};

const processorTypes = [
	{
		type: 'apiRequest',
	},
	{
		type: 'redirect',
	},
];

let updateForm = jest.fn();

describe('FormEditor', () => {
	beforeEach(() => {
		updateForm = jest.fn();
	});

	it('should match snapshot', () => {
		const component = render(
			<FormEditor
				processorTypes={processorTypes}
				updateForm={updateForm}
				form={form}
			/>
		);
		expect(component).toMatchSnapshot();
	});
});
