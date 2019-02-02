import React, {Component} from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';

import {Processors} from "./Processors/Processors";
import {FormEditor} from "./FormEditor";
import {processorsCollection} from './Processors/processors.fixtures';
const form = {
	id: 'a-form',
	name: 'Form Name',
	processors: processorsCollection,
};

const processorTypes = [
	{
		type: 'apiRequest'
	},
	{
		type: 'redirect'
	}
];

let updateForm = jest.fn();


describe('FormEditor', () => {

	beforeEach(() => {
		updateForm = jest.fn()
	});


	it('should match snapshot', () => {
		const component =
			renderer.create(<FormEditor
				processorTypes={processorTypes}
				updateForm={updateForm}
				form={ form }
			/>)
		expect(component.toJSON()).toMatchSnapshot();
	});
	it.skip('Can switch tabs', () => {
		const component =
			mount(<FormEditor
				processorTypes={processorTypes}
				updateForm={updateForm}
				form={ form }
			/>);
		expect(component.find('.caldera-forms-editor-settings').length).toEqual(0);
		component.find( '.caldera-forms-editor-settings-tab-btn').simulate( 'click' );

		component.setState({activeTab: 'settings'});
		expect(component.find('.caldera-forms-editor-settings').length).toEqual(1);

	});



});

describe('Form editor settings', () => {
	beforeEach(() => {
		updateForm = jest.fn()
	});
	it.skip('should update form name', () => {
		const component =
			mount(<FormEditor
				processorTypes={processorTypes}
				updateForm={updateForm}
				form={ form }
			/>);
		component.find( '.caldera-forms-editor-settings-tab-btn').simulate( 'click' );

		const expectedValue = 'Creatures';
		component.setState({activeTab:"conditionals"});

		component.find( '#formName').simulate( 'change', event );
		expect(component.state('form').name).toEqual(expectedValue);

	});
});
