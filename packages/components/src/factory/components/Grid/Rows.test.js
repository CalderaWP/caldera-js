import React from 'react';
import { render } from 'react-testing-library';
import { mount } from 'enzyme';
import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
} from '../../fields.fixtures';

import { Rows } from './Rows';

describe('Row component', () => {
	let onChange = jest.fn();
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});
	const row1 = {
		rowId: 'r1',
		onChange,
		onBlur,
		columns: [
			{
				columnId: 'a1',
				fields: [textField, checkboxField],
				width: '1/2',
			},
			{
				columnId: 'a2',
				fields: [checkboxFieldset],
				width: '1/2',
			},
		],
	};

	const row2 = {
		rowId: 'r2',
		onChange,
		onBlur,
		columns: [
			{
				columnId: 'b1',
				fields: [selectField],
				width: '1/3',
			},
			{
				columnId: 'b2',
				fields: [emailField],
				width: '1/3',
			},
			{
				columnId: 'b3',
				fields: [checkboxField],
				width: '1/3',
			},
		],
	};

	it('Creates with two rows', () => {
		const component = render(
			<Rows rows={[row1, row2]} onChange={onChange} onBlur={onBlur} />
		);
		expect(component).toMatchSnapshot();
	});
});
