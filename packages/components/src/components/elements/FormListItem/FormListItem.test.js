import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { FormListItem } from './FormListItem';
import { forms } from '../../EntryViewer/forms.fixtures';

describe('FormListItem', () => {
	let form;
	let onFormAction;
	const formId = 'cf1';
	beforeEach(() => {
		form = {
			id: formId
		};
		onFormAction = jest.fn();
	});
	it('Matches snapshot', () => {
		const component = renderer.create(
			<FormListItem form={form} onFormAction={onFormAction} />
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('clicking on edit', () => {
		const component = mount(
			<FormListItem form={form} onFormAction={onFormAction} />
		);
		component
			.find('.' + FormListItem.defaultProps.classNames.edit + ' button')
			.simulate('click');
		expect(onFormAction.mock.calls[0][0]).toBe(formId);
		expect(onFormAction.mock.calls[0][1]).toBe('edit');
	});

	test('clicking on edit', () => {
		const component = mount(
			<FormListItem form={form} onFormAction={onFormAction} />
		);
		component
			.find('.' + FormListItem.defaultProps.classNames.edit + ' button')
			.simulate('click');
		expect(onFormAction.mock.calls[0][0]).toBe(formId);
		expect(onFormAction.mock.calls[0][1]).toBe('edit');
	});

	test('clicking on view entries', () => {
		const component = mount(
			<FormListItem form={form} onFormAction={onFormAction} />
		);
		component
			.find(
				'.' +
					FormListItem.defaultProps.classNames['view-entries'] +
					' button'
			)
			.simulate('click');
		expect(onFormAction.mock.calls[0][0]).toBe(formId);
		expect(onFormAction.mock.calls[0][1]).toBe('view-entries');
	});

	test('clicking on preview', () => {
		const component = mount(
			<FormListItem form={form} onFormAction={onFormAction} />
		);
		component
			.find(
				'.' + FormListItem.defaultProps.classNames.preview + ' button'
			)
			.simulate('click');
		expect(onFormAction.mock.calls[0][0]).toBe(formId);
		expect(onFormAction.mock.calls[0][1]).toBe('preview');
	});

	test('clicking on settings', () => {
		const component = mount(
			<FormListItem form={form} onFormAction={onFormAction} />
		);
		component
			.find(
				'.' + FormListItem.defaultProps.classNames.settings + ' button'
			)
			.simulate('click');
		expect(onFormAction.mock.calls[0][0]).toBe(formId);
		expect(onFormAction.mock.calls[0][1]).toBe('settings');
	});
});
