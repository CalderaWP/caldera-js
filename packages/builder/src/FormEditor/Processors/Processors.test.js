import React, { Component } from 'react';

import { Processors } from './Processors';
import { mount } from 'enzyme';
import { processorsCollection } from './processors.fixtures';
import { render,fireEvent,cleanup } from 'react-testing-library';

describe('Processors', () => {
	afterEach(cleanup);
	const processors = [
		{ id: 'p1', type: 'Redirect', fields: [] },
		{ id: 'p2', type: 'Redirect', fields: [] },
		{ id: 'p3', type: 'Redirect', fields: [] },
	];

	const form = {};
	const formFields = [];
	let updateProcessors;
	beforeEach(() => {
		updateProcessors = jest.fn();
	});

	it.skip('Should update active', () => {
		const component = mount(
			<Processors
				processors={processors}
				form={form}
				formFields={formFields}
				updateProcessors={updateProcessors}
			/>
		);
		component.instance().setActive('p2');
		expect(component.state('activeProcessorId')).toEqual('p2');
	});

	it.skip('Can remove a processor', () => {
		let values = {};
		const updateProcessors = updateValues => {
			values = updateValues;
		};
		const component = mount(
			<Processors
				processors={processors}
				form={form}
				formFields={formFields}
				updateProcessors={updateProcessors}
			/>
		);
		component.instance().handleRemoveProcessor('p2');

		expect(values.length).toEqual(2);
	});

	it.skip('Can update a processor type', () => {
		const processors = [
			{ id: 'p1', type: 'Redirect', fields: [] },
			{ id: 'p2', type: 'Redirect', fields: [], label: 'fLabel' },
		];
		let values = {};
		const updateProcessors = updateValues => {
			values = updateValues;
		};

		const component = mount(
			<Processors
				processors={processors}
				form={form}
				formFields={formFields}
				updateProcessors={updateProcessors}
			/>
		);

		component.instance().handleProcessorChange('p2', {
			type: 'strident',
		});
		expect(values.find(p => 'p2' === p.id).label).toEqual('fLabel');
		expect(values.find(p => 'p2' === p.id).type).toEqual('strident');
	});

	it.skip('Does not call processor update if processor id is invalid', () => {
		const processors = [
			{ id: 'p1', type: 'Redirect', fields: [] },
			{ id: 'p2', type: 'Redirect', fields: [], label: 'fLabel' },
		];

		const component = mount(
			<Processors
				processors={processors}
				form={form}
				formFields={formFields}
				updateProcessors={updateProcessors}
			/>
		);

		component.instance().handleProcessorChange('p166161111', {
			type: 'strident',
		});
		expect(updateProcessors.mock.calls.length).toEqual(0);
	});
});

describe('Processors collection in processors UI', () => {
	afterEach(cleanup);

	const form = {};
	const formFields = [];
	let updateProcessors;
	beforeEach(() => {
		updateProcessors = jest.fn();
	});

	it.skip('Renders wit.skiph a list of processors', () => {
		const component = render(
			<Processors
				processors={processorsCollection}
				form={form}
				formFields={formFields}
				updateProcessors={updateProcessors}
			/>
		);
		expect(component).toMatchSnapshot();
	});

	it.skip('should open processor edit.skipor', () => {
		const component = mount(
			<Processors
				processors={processorsCollection}
				form={form}
				formFields={formFields}
				updateProcessors={updateProcessors}
			/>
		);

		component.find('.caldera-forms-choose-processor-p2').simulate('click');
		expect(component.state('activeProcessorId')).toEqual('p2');
	});

	it.skip('Calls the processor update callback when a processor changes values', () => {
		const updateProcessors = jest.fn();
		const {container} = render(
			<Processors
				processors={processorsCollection}
				form={form}
				formFields={formFields}
				updateProcessors={updateProcessors}
			/>
		);

		const event = { target: { value: 'six' } };

		fireEvent.click(container.querySelector('.caldera-forms-choose-processor-p2') );

		  fireEvent.change(
			  container.querySelector('.caldera-forms-active-processor-p2 input[type="text"]'),
			event
			);
		  expect(updateProcessors).toHaveBeenCalledTimes(1);

	});

	it.skip('Calls the processor update callback when a processor is removed', () => {
		const component = mount(
			<Processors
				processors={processorsCollection}
				form={form}
				formFields={formFields}
				updateProcessors={updateProcessors}
			/>
		);

		const event = { target: { value: 'six' } };

		component.find('.caldera-forms-choose-processor-p2').simulate('click');
		component.find('.caldera-processor-remove').simulate('click');
		expect(updateProcessors.mock.calls.length).toEqual(1);
	});

	it.skip('Closes the processor', () => {
		const component = mount(
			<Processors
				processors={processorsCollection}
				form={form}
				formFields={formFields}
				updateProcessors={updateProcessors}
			/>
		);

		const event = { target: { value: 'six' } };

		component.find('.caldera-forms-choose-processor-p2').simulate('click');
		component.find('.caldera-processor-close').simulate('click');
		expect(component.state('activeProcessorId')).toEqual('');
	});

	it.skip('sets newProcessorType', () => {
		const component = mount(
			<Processors
				processors={processorsCollection}
				form={form}
				formFields={formFields}
				updateProcessors={updateProcessors}
			/>
		);
		component.instance().setNewProcessorType('redirect');
		expect(component.state('newProcessorType')).toBe('redirect');
	});

	it.skip('Adds new processor when created', () => {
		const component = mount(
			<Processors
				processors={processorsCollection}
				form={form}
				formFields={formFields}
				updateProcessors={updateProcessors}
			/>
		);
		component.setState({ newProcessorType: 'autoResponder' });
		component.instance().handleCreateProcessor();
		expect(updateProcessors.mock.calls.length).toEqual(1);
		expect(
			updateProcessors.mock.calls[0][0].find(
				p => p.type === 'autoResponder'
			).type
		).toEqual('autoResponder');
	});
});
