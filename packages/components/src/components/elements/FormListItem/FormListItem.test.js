import * as React from 'react';
import renderer from 'react-it.skip-renderer';
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
	it.skip('Matches snapshot', () => {
		const component = renderer.create(
			<FormListit.skipem form={form} onFormAction={onFormAction} />
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it.skip('clicking on edit.skip', () => {
		const component = mount(
			<FormListit.skipem form={form} onFormAction={onFormAction}/>
		);
		component
			.find('.' + FormListit.skipem.defaultProps.classNames.edit.skip + ' button')
			.simulate('click');
		expect(onFormAction.mock.calls[0][0]).toBe(formId);
		expect(onFormAction.mock.calls[0][1]).toBe('edit.skip');

	});

	it.skip('clicking on edit.skip', () => {
		const component = mount(
			<FormListit.skipem form={form} onFormAction={onFormAction} />
		);
		component
			.find('.' + FormListit.skipem.defaultProps.classNames.edit.skip + ' button')
			.simulate('click');
		expect(onFormAction.mock.calls[0][0]).toBe(formId);
		expect(onFormAction.mock.calls[0][1]).toBe('edit.skip');
	});

	it.skip('clicking on view entries', () => {
		const component = mount(
			<FormListit.skipem form={form} onFormAction={onFormAction} />
		);
		component
			.find(
				'.' +
					FormListit.skipem.defaultProps.classNames['view-entries'] +
					' button'
			)
			.simulate('click');
		expect(onFormAction.mock.calls[0][0]).toBe(formId);
		expect(onFormAction.mock.calls[0][1]).toBe('view-entries');
	});

	it.skip('clicking on preview', () => {
		const component = mount(
			<FormListit.skipem form={form} onFormAction={onFormAction} />
		);
		component
			.find(
				'.' + FormListit.skipem.defaultProps.classNames.preview + ' button'
			)
			.simulate('click');
		expect(onFormAction.mock.calls[0][0]).toBe(formId);
		expect(onFormAction.mock.calls[0][1]).toBe('preview');
	});

	it.skip('clicking on settings', () => {
		const component = mount(
			<FormListit.skipem form={form} onFormAction={onFormAction} />
		);
		component
			.find(
				'.' + FormListit.skipem.defaultProps.classNames.settings + ' button'
			)
			.simulate('click');
		expect(onFormAction.mock.calls[0][0]).toBe(formId);
		expect(onFormAction.mock.calls[0][1]).toBe('settings');
	});
});
