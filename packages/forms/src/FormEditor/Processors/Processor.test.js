import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Processor } from './Processor';

import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField,
	FormFieldsAutoComplete
} from "@calderawp/components";

describe('Processor', () => {
	let onClose;
	let onChange;
	let onBlur;

	const form = {
		ID: 'cf1',
		fields: [checkboxFieldset, selectField, checkboxField]
	}

	beforeEach(() => {
		onClose = jest.fn();
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it( 'imports FormFieldsAutoComplete from components', () => {
		expect( typeof  FormFieldsAutoComplete ).toBe('function')
	});

	it('Matches snapshot', () => {
		const component = renderer.create(
			<Processor
				fields={[checkboxFieldset, selectField, checkboxField]}
				initialValues={{}}
				onClose={onClose}
				onChange={onChange}
				onBlur={onBlur}
				instanceId={'test-1'}
				form={form}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Can switch to conditionals', () => {
		const component = mount(
			<Processor
				fields={[checkboxFieldset, selectField, checkboxField]}
				initialValues={{}}
				onClose={onClose}
				onChange={onChange}
				onBlur={onBlur}
				initialActiveTab={'conditionals'}
				instanceId={'test-1'}
				form={form}

			/>
		);
		component.instance().onSetTab('conditionals');
		expect(component.state('activeTab')).toBe('conditionals');
	});

	it('Can show conditionals', () => {
		const component = mount(
			<Processor
				fields={[checkboxFieldset, selectField, checkboxField]}
				initialValues={{}}
				onClose={onClose}
				onChange={onChange}
				onBlur={onBlur}
				initialActiveTab={'conditionals'}
				instanceId={'test-1'}
				form={form}
			/>
		);
		expect( component.find( '.caldera-processor-conditionals').length).toBe(0);
		component.setState({activeTab:'conditionals'});
		expect(component.state('activeTab')).toBe('conditionals');
	});


});
