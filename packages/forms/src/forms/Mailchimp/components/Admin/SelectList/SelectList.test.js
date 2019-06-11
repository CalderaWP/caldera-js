import React from 'react';
import { mount } from 'enzyme/build';
import { render, fireEvent, getByTestId } from 'react-testing-library';
import { SelectList } from './SelectList';

const field = [
	{
		fieldType: 'select',
		required: true,
		fieldId: 'mc-select-field',
		options: [{ value: '45907f0c59', label: 'Future Capable' }],
	},
];
it('Shows list', () => {
	expect(
		render(
			<SelectList
				listFieldConfig={field}
				listId={'45907f0c59'}
				setList={() => {}}
				instanceId={'a'}
			/>
		)
	).toMatchSnapshot();
});

it('Changes list', () => {
	const onChange = jest.fn();
	const component = mount(
		<SelectList
			listFieldConfig={field[0]}
			listId={''}
			setListId={onChange}
			instanceId={'1'}
		/>
	);

	component
		.find('select')
		.first()
		.simulate('change', { target: { value: '45907f0c59' } });
	expect(onChange.mock.calls.length).toBe(1);
});
