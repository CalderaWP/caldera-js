import * as React from 'react';
import { render, fireEvent, getByTestId} from "react-testing-library";
import {FormAdmin} from "./FormAdmin";

describe( 'FormAdmin', () => {
	const suppliedForms = [{ID: 1}]
	it( 'passes forms to render', done => {
		let i = 0;
		render(
			<FormAdmin
				initialForms={suppliedForms}
				render={
					({forms}) => {
						expect(forms).toEqual(suppliedForms);
						done();

					}
				}
			/>
		)
		expect.assertions(1);
	});

	it( 'passes setForms to render', done => {
		render(
			<FormAdmin
				initialForms={suppliedForms}
				render={
					({setForms}) => {
						expect( typeof setForms  ).toEqual('function');
						done();
					}
				}
			/>
		)
		expect.assertions(1);
	});
	it( 'passes getFormById to render', done => {
		render(
			<FormAdmin
				initialForms={suppliedForms}
				render={
					({getFormById}) => {
						expect( typeof getFormById  ).toEqual('function');
						done();
					}
				}
			/>
		);
		expect.assertions(1);
	});

});
