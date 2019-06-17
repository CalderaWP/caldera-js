import React from 'react';
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
	
	
	const { findByLabelText } = render(
		<SelectList
			listFieldConfig={field[0]}
			listId={''}
			instanceId={'foo'}
			setListId={onChange}
			instanceId={'1'}
		/>
	);

fireEvent.change(findByLabelText( field[0].label), {
	target: { value: "New Value" }
  });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith("New Value");

});
