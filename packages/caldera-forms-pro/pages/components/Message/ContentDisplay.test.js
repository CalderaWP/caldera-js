import {ContentDisplay} from "./ContentDisplay";
import React, {Fragment} from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
describe( 'ContentDisplay', () => {
	it( 'Renders the html',  () =>{
		const content = {
			renderer: '<div>Hi Roy</div>'
		};
		const component = renderer.create(
			<ContentDisplay content={content}/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
})
