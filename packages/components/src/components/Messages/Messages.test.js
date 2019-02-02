import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import { Message, MESSAGE_CLASS } from './Message';
import { messageObjectFactory } from './messageObjectFactory';

describe('Message component', () => {
	it('Shows a message', () => {
		const wrapper = shallow(
			<Message
				message={{
					message: 'Good Things Happened'
				}}
			/>
		);
		expect(wrapper).toHaveLength(1);
	});

	it('Renders message', () => {
		const wrapper = renderer.create(
			<Message
				message={{
					message: 'Hi Roy',
					error: false
				}}
			/>
		);
		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	it('Renders error message', () => {
		const wrapper = renderer.create(
			<Message
				message={{
					message: 'An error happened',
					error: true
				}}
			/>
		);
		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	it('Renders no error message', () => {
		const wrapper = renderer.create(
			<Message
				message={{
					error: true
				}}
			/>
		);
		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	it('Shows the right message message', () => {
		const wrapper = shallow(
			<Message
				message={{
					message: 'Hi Roy'
				}}
			/>
		);
		expect(wrapper.text()).toBe('Hi Roy');
	});

	it('shows classname prop as class', () => {
		const wrapper = shallow(
			<Message
				message={{
					message: 'Hi Roy'
				}}
				className={'mike'}
			/>
		);
		expect(wrapper.find('.mike')).toHaveLength(1);
	});

	it('Has error class when is an error', () => {
		const wrapper = shallow(
			<Message
				message={{
					message: 'Something bad has happened.',
					error: true
				}}
			/>
		);
		expect(wrapper.find('.has-error')).toHaveLength(1);
	});

	it('Does not have error class when is not an error', () => {
		const wrapper = shallow(
			<Message
				message={{
					message: 'Something good has happened.',
					error: false
				}}
			/>
		);
		expect(wrapper.find('.has-error')).toHaveLength(0);
	});

	it('Does have caldera-components-error class when an error', () => {
		const wrapper = shallow(
			<Message
				message={{
					message: 'Something',
					error: true
				}}
			/>
		);
		expect(wrapper.hasClass(MESSAGE_CLASS)).toEqual(true);
	});

	it('Does have caldera-components-error class when not an error', () => {
		const wrapper = shallow(
			<Message
				message={{
					message: 'Something',
					error: false
				}}
			/>
		);
		expect(wrapper.hasClass(MESSAGE_CLASS)).toEqual(true);
	});
});

describe('messageObjectFactory', () => {
	it('casts truthy error to boolean', () => {
		expect(
			messageObjectFactory({
				error: 1,
				message: 'Roy'
			}).error
		).toBe(true);
	});

	it('casts falsey error to boolean', () => {
		expect(
			messageObjectFactory({
				error: 'false',
				message: 'Roy'
			}).error
		).toBe(false);
	});

	it('Adds missing message key', () => {
		expect(
			messageObjectFactory({
				error: 'false'
			}).message
		).toBe('');
	});
});
