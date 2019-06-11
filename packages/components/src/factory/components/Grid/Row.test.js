import React from 'react';
import { render } from 'react-testing-library';
import { shallow } from 'enzyme';
import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
} from '../../fields.fixtures';

import { Row } from './Row';

describe('Row component', () => {
	let onChange = jest.fn();
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	const columns = [
		{
			children: <div>Half Column</div>,
			width: '1/2',
			columnId: 1,
		},
		{
			children: <div>Quarter Column</div>,
			width: '1/4',
			columnId: 2,
		},
		{
			children: <div>Quarter Column 2</div>,
			width: '1/4',
			columnId: 3,
		},
	];

	it('Creates columns', () => {
		const component = render(
			<Row
				rowId={'twoColumns'}
				columns={columns}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);
		expect(component).toMatchSnapshot();
	});

	it('Renders children if no columns', () => {
		const component = shallow(
			<Row rowId={'twoColumns'} onChange={onChange} onBlur={onBlur}>
				<p>Hi Roy</p>
			</Row>
		);
		expect(component.find('p').text()).toEqual('Hi Roy');
	});

	it('Applies padding to x and y ', () => {
		const component = render(
			<Row
				rowId={'twoColumns'}
				columns={[
					{
						children: <div>Half Column</div>,
						width: '1/2',
						columnId: 1,
						padding: '222',
					},
				]}
				onChange={onChange}
				onBlur={onBlur}
				padding={'11'}
			/>
		);
		expect(component).toMatchSnapshot();
	});
});
