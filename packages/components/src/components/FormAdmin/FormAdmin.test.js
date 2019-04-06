import * as React from 'react';
import renderer from 'react-test-renderer';
import {FormAdmin} from "./FormAdmin";

describe( 'FormAdmin', () => {
	const suppliedForms = [{ID: 1}]
	it( 'passes forms to render', done => {
		renderer.create(
			<FormAdmin
				initalForms={suppliedForms}
				render={
					(forms) => {
						expect( forms ).toEqual(suppliedForms);
						done();
					}
				}
			/>
		)
		expect.assertions(1);
	});
})
