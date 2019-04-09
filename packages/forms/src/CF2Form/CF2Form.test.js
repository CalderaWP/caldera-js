import {CF2Form} from "./CF2Form";
import React, { useEffect } from "react";
import renderer from 'react-test-renderer';
import { render, fireEvent, getByTestId} from "react-testing-library";
describe( 'CF2Form', () => {


	it("calls effect", () => {
		return new Promise(resolve => {
			render(<EffectfulComponent effect={resolve} />);
		});
	});

	function EffectfulComponent({ effect }) {
		useEffect(effect);

		return null;
	}


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


	it.skip( 'Matches snapshot', () => {
		expect(render(<CF2Form formConfig={formConfig} axios={axios}/>)).toMatchSnapshot();
	});

	it.skip( 'Snapshot with tokens',async () => {
		expect(render(
			<CF2Form
				apiRootUri={'https://localhost/'}
				formConfig={formConfig}
				axios={axios}
				_tokens={{
					_cf_verify: 'a',
					_sessionPublicKey: 'b'
				}}
			/>)

		).toMatchSnapshot()

	});
});
