import {CF2Form} from "./CF2Form";
import React from 'react';
import renderer from 'react-test-renderer';

describe( 'CF2Form', () => {
	let axios = {
		post: jest.fn((config) => Promise.resolve({data: {}})),
		request: jest.fn((config) => Promise.resolve({data: {}}))
	};

	beforeEach(() => {
		axios = {
			post: jest.fn((config) => Promise.resolve({data: {}})),
			request: jest.fn((config) => Promise.resolve({data: {}}))
		};
	});

	const submitButton = {
		fieldId: 'fld_7908577',
		label: 'Click Me',
		fieldType: 'submit',
	};

	const formConfig = {
		ID: 'cf222',
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
		expect(renderer.create(<CF2Form formConfig={formConfig} axios={axios}/>)).toMatchSnapshot();
	});

	it( 'Uses injected _tokens when possible',async (done) => {
		expect(renderer.create(
			<CF2Form
				apiRootUri={'https://localhost/'}
				formConfig={formConfig}
				axios={axios}
				_tokens={{
					_cf_verify: 'a',
					_sessionPublicKey: 'b'
				}}
			/>).props
		).toBe({sivan:true})
	});
});
