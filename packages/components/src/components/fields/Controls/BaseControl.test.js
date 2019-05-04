import * as React from 'react';
import renderer from 'react-test-renderer';

import  BaseControl  from './BaseControl';
//import { mount } from 'enzyme';

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

	it('Renders the messages if passes', () => {
		const MessageZone = () => (<div className={'test-find'}>Hi Roy</div>);

		const component = renderer.create(
			<BaseControl
				id={'a1'}
				label={'label'}
				help={'help-text'}
				fieldType={'text'}
				onChange={onChange}
				onBlur={onBlur}
				labelBefore={false}
				Messages={MessageZone}
			>
				<input/>
			</BaseControl>
		);
		const testInstance = component.root;
		expect(testInstance.findByProps({className: "test-find"}).children).toEqual(['Hi Roy']);


	});

});
