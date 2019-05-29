import {CalderaForm} from './CalderaForm';
import React, {Fragment} from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import {createFieldRule} from './state/createFieldRule';
import {formRows, formRowOne, checkboxField} from './columns.fixtures';
import {getValuesFromFormLayout} from './util/getValuesFromFormLayout';
import {emailField, textField} from './fields.fixtures';
import {render} from "react-testing-library";
import {Column, fieldAreaFactory, collectFieldValues} from '@calderajs/components';

describe('Factory import', () => {
	it('imports factory', () => {
		expect(typeof  fieldAreaFactory).toBe('function');
	});

	it('imports component', () => {
		expect(typeof Column).toBe('function');
	});

	it('imports util function', () => {
		expect(typeof collectFieldValues).toBe('function');
	});
});

describe('Caldera Forms', () => {
	let onChange = jest.fn();
	let onBlur = jest.fn();
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});
	const form = {
		rows: [
			{
				rowId: 'r1',
				columns: [
					{
						fields: [emailField.fieldId],
						width: '1/2',
						columnId: '1aaaaa'
					},
					{
						fields: [textField.fieldId],
						width: '1/4',
						columnId: '1b'
					}
				]
			}
		],
		fields: [
			emailField,
			textField
		]
	};

	it('Forms', () => {
		const component = render(
			<CalderaForm
				form={form}
				onBlur={onBlur}
				onChange={onChange}
			/>
		);
		expect(component).toMatchSnapshot();
	});

	it('Forms with rows assembled by id', () => {

		const component = mount(
			<CalderaForm
				form={form}
				onBlur={onBlur}
				onChange={onChange}
			/>
		);
		expect(component.find('#' + textField.fieldId).children().length).toBe(1);
		expect(component.find('#' + emailField.fieldId).children().length).toBe(1);
	});

	it('A row can have a render prop', () => {
		const _Row = props => <div id={'test2243'}/>;
		const form = {
			fields: [],
			rows: [
				{
					rowId: 'r45',
					render: _Row
				}
			]
		};
		const component = mount(
			<CalderaForm
				form={form}
				onBlur={onBlur}
				onChange={onChange}
			/>
		);
		expect(component.find('#test2243').length).toBe(1);
	});
	it('A column can have a render prop', () => {
		const _Field = props => (
			<input id={'test243'} type={'number'} key={808}/>
		);

		const component = mount(
			<CalderaForm
				form={{
					fields: [],
					rows: [
						{
							rowId: 'r1',
							columns: [
								{
									render: _Field,
									width: '1/2',
									columnId: '1aaaaa'
								},
								{
									fields: [textField],
									width: '1/4',
									columnId: '1b'
								}
							]
						}
					]
				}}
				onBlur={onBlur}
				onChange={onChange}
			/>
		);
		expect(component.find('#test243').length).toBe(1);
	});

	it('A field can have a render prop', () => {
		const _Field = props => <input id={'test808'} type={'number'}/>;

		const field = {
			...checkboxField,
			render: _Field,
			key: 800000
		};

		const form = {
			fields: [checkboxField, textField],
			rows: [
				{
					rowId: 'r1',
					columns: [
						{
							fields: [field, checkboxField],
							width: '1/2',
							columnId: '1aaaaa'
						},
						{
							fields: [textField],
							width: '1/4',
							columnId: '1b'
						}
					]
				}
			]
		};
		const component = mount(
			<CalderaForm
				form={form}
				onBlur={onBlur}
				onChange={onChange}
			/>
		);
		expect(component.find('#test808').length).toBe(1);
		expect(component.find('#test808').prop('type')).toBe('number');
	});
});

describe('Updates ', () => {
	let onSubmit = jest.fn();
	beforeEach(() => {
		onSubmit = jest.fn();
	});

	const form = {
		rows: [
			{
				rowId: 'r1',
				columns: [
					{
						fields: [emailField.fieldId],
						width: '1/2',
						columnId: '1aaaaa'
					},
					{
						fields: [textField.fieldId],
						width: '1/4',
						columnId: '1b'
					}
				]
			}
		],
		fields: [
			emailField,
			textField
		]
	};


	it.skip('hides a field when it should ', () => {
		const _form = {
			...form,
			conditionals: [
				{
					type: 'hide',
					rule: createFieldRule('is', emailField.fieldId, 'hide'),
					fields: [
						textField.fieldId
					]
				},

			]
		};

		const component = mount(
			<CalderaForm
				form={form}
				onSubmit={onSubmit}
			/>
		);
		const value = 'hide';
		const event = {target: {value}};
		component
			.find('#emailFieldId')
			.find('input')
			.simulate('change', event);
		expect(
			component
				.find('#firstName')
				.find('input')
				.length
		).toEqual(0);
	});

});
