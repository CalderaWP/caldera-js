import React from 'react';
import { render, fireEvent, getByTestId} from "react-testing-library";

import MailChimpForm from "./MailChimpForm";

import {mailChimpTestForm} from "./mailChimpTestForm.fixture";


describe( 'MailChimp mailChimpTestForm', () => {
	let onSubmit, onBlur,onChange;
	beforeEach( () => {
		onSubmit = jest.fn();
		onBlur = jest.fn();
		onChange = jest.fn();
	});

	it('Shows spinner if mailChimpTestForm does not have fields', () => {

		expect(render(
			<MailChimpForm
				form={{
					ID: 'mc-test-1'
				}}
				onBlur={onBlur}
				onChange={onChange}
				onSubmit={onSubmit}
			/>
		)).toMatchSnapshot();


	});

	it('Loads if it has proper mailChimpTestForm', () => {

		expect(render(
			<MailChimpForm
				form={mailChimpTestForm}
				onBlur={onBlur}
				onChange={onChange}
				onSubmit={onSubmit}
			/>
		)).toMatchSnapshot();


	});
});



