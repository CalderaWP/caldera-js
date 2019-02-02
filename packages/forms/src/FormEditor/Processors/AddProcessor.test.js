import React, {Component} from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import {AddProcessor} from './AddProcessor'

describe('AddProcessor', () => {
	let setNewProcessorType = jest.fn();
	let onCreate = jest.fn();
	beforeEach(() => {
		setNewProcessorType = jest.fn();
		onCreate = jest.fn();
	});
	const processorTypes = [
		{
			type: 'apiRequest'
		},
		{
			type: 'redirect'
		}
	];

	it('Shows the choices', () => {
		const component = renderer.create(<AddProcessor
			setNewProcessorType={setNewProcessorType}
			processorTypes={processorTypes}
			value={''}
			onCreate={onCreate}
		/>);
		expect(component.toJSON()).toMatchSnapshot()
	});

	it('Activates the button', () => {
		const component = mount(<AddProcessor
			setNewProcessorType={setNewProcessorType}
			processorTypes={processorTypes}
			value={'redirect'}
			onCreate={onCreate}
		/>);
		expect(component.find( 'button').prop( 'disabled')).toBe(false)

	})

	it('Has the processor options', () => {
		const component = mount(<AddProcessor
			setNewProcessorType={setNewProcessorType}
			processorTypes={processorTypes}
			value={'redirect'}
			onCreate={onCreate}
		/>);
		expect(component.find( 'select').find( 'option').length ).toBe(processorTypes.length + 1 );

	})
});
