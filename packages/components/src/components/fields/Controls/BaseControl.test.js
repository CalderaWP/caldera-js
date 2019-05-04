import * as React from 'react';
import renderer from 'react-test-renderer';

import  BaseControl  from './BaseControl';

describe('BaseControl ', () => {
	let onChange;
	let onBlur;

	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it('Renders children', () => {
		const component = renderer.create(
			<BaseControl
				id={'a1'}
				label={'label'}
				help={'help-text'}
				fieldType={'text'}
				onChange={onChange}
				onBlur={onBlur}
			>
				<input/>
			</BaseControl>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Puts label after', () => {
		const component = renderer.create(
			<BaseControl
				id={'a1'}
				label={'label'}
				help={'help-text'}
				fieldType={'text'}
				onChange={onChange}
				onBlur={onBlur}
				labelBefore={false}
			>
				<input/>
			</BaseControl>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

});
