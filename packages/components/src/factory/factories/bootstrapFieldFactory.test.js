import {bootstrapFieldFactory} from './bootstrapFieldFactory';
import React from 'react';
import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField,
	toggleField,
	textAreaField,
	autoCompleteField
} from '../fields.fixtures';

import ShallowRenderer from 'react-test-renderer/shallow';


describe('bootstrapFieldFactory', () => {
	let onChange;
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();

	});

// in your test:
	const renderer = new ShallowRenderer();
	renderer.render(bootstrapFieldFactory(textField,onChange,onBlur));
	const result = renderer.getRenderOutput();

	expect(result.type).toBe('div');
	expect(result.props.children).toEqual([
		<span className="heading">Title</span>,
		<Subcomponent foo="bar" />
	]);




});
