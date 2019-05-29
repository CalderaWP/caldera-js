import React from 'react';
import {mount} from 'enzyme/build';
import { render, fireEvent, getByTestId} from "react-testing-library";
import {AddApiKey} from "./AddApiKey";

const field = [{"fieldType":"select","required":true,"fieldId":"mc-select-field","options":[{"value":"45907f0c59","label":"Future Capable"}]}];
it( 'Shows list', () => {
	expect( render(
		<AddApiKey
			listFieldConfig={field}
			listId={'45907f0c59'}
			setList={()=>{}}
			instanceId={'a'}
		/>
	) ).toMatchSnapshot();
});

it( 'Changes list', () => {
	const onChange = jest.fn();
	const component =  mount(
		<AddApiKey
			listFieldConfig={field[0]}
			listId={''}
			onChange={onChange}
			instanceId={'test'}
		/>
	);

	component.find( '#caldera-mc-select-test' ).first().simulate(
		'change',
		{target: {value:'45907f0c59'}}
	);
	expect( onChange.mock.calls.length).toBe(1)

});
