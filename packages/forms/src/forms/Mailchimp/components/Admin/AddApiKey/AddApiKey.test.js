import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { AddApiKey } from './AddApiKey';

const field = [
	{
		fieldType: 'select',
		required: true,
		fieldId: 'mc-select-field',
		options: [{ value: '45907f0c59', label: 'Future Capable' }],
	},
];
describe('AddApiKey Mailchimp', () => {
	afterEach(cleanup);
	it('Shows list', () => {
		expect(
			render(
				<AddApiKey
					onChange={jest.fn()}
					instanceId={'test'}
					label={'The Label'}
				/>
			)
		).toMatchSnapshot();
	});

	it('Changes list', () => {
		const onChange = jest.fn();
		const label = 'The Label';
		const { container, getByLabelText } = render(
			<AddApiKey onChange={onChange} instanceId={'test'} label={label} />
		);

		const select = container.querySelector('#caldera-mc-api-key');
		const event = { target: { value: '45907f0c59' } };
		fireEvent.change(select, event);
		expect(onChange).toHaveBeenCalledTimes(1);

		expect(onChange).toHaveBeenCalledWith('45907f0c59');
	});
});
