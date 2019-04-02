import {CF2Form} from "./CF2Form";
import React from 'react';
import renderer from 'react-test-renderer';

describe( 'CF2Form', () => {
	let axios = {
		post: jest.fn((config) => Promise.resolve({data: {}}))
	};

	beforeEach(() => {
		axios = {
			post: jest.fn((config) => Promise.resolve({data: {}}))
		};
	});

	const submitButton = {
		fieldId: 'fld_7908577',
		label: 'Click Me',
		fieldType: 'submit',
	};

	const formConfig = {
		rows: [
			{
				rowId: 'r3',
				columns: [
					{
						fields: [submitButton.fieldId],
						width: '1',
						columnId: `r2-${submitButton.fieldId}`
					},
				]
			}
		],
		fields: [
			submitButton
		],
		conditionals: []
	};

	it( 'Matches snapshot',async (done) => {
		expect(renderer.create(<CF2Form formConfig={formConfig} formId={ 'cf1'} axios={axios}/>)).toMatchSnapshot();
	});
});
