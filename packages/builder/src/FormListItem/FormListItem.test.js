import * as React from 'react';
import renderer from 'react-test-renderer';
import {render} from "react-testing-library";

import { FormListitem } from './FormListitem';

describe('FormListitemem', () => {
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
		const component = render(
			<FormListitem form={form} onFormAction={onFormAction} />
		);
		expect(component).toMatchSnapshot();
	});

	it.skip('clicking on edit.skip', () => {
		const component = render(
			<FormListitem form={form} onFormAction={onFormAction}/>
		);
		component
			.find('.' + FormListitem.defaultProps.classNames.edit.skip + ' button')
			.simulate('click');
		expect(onFormAction.mock.calls[0][0]).toBe(formId);
		expect(onFormAction.mock.calls[0][1]).toBe('edit.skip');

	});

	it.skip('clicking on edit.skip', () => {
		const component = mount(
			<FormListitem form={form} onFormAction={onFormAction} />
		);
		component
			.find('.' + FormListitem.defaultProps.classNames.edit.skip + ' button')
			.simulate('click');
		expect(onFormAction.mock.calls[0][0]).toBe(formId);
		expect(onFormAction.mock.calls[0][1]).toBe('edit.skip');
	});

	it.skip('clicking on view entries', () => {
		const component = mount(
			<FormListitem form={form} onFormAction={onFormAction} />
		);
		component
			.find(
				'.' +
					FormListitem.defaultProps.classNames['view-entries'] +
					' button'
			)
			.simulate('click');
		expect(onFormAction.mock.calls[0][0]).toBe(formId);
		expect(onFormAction.mock.calls[0][1]).toBe('view-entries');
	});

	it.skip('clicking on preview', () => {
		const component = mount(
			<FormListitem form={form} onFormAction={onFormAction} />
		);
		component
			.find(
				'.' + FormListitem.defaultProps.classNames.preview + ' button'
			)
			.simulate('click');
		expect(onFormAction.mock.calls[0][0]).toBe(formId);
		expect(onFormAction.mock.calls[0][1]).toBe('preview');
	});

	it.skip('clicking on settings', () => {
		const component = mount(
			<FormListitem form={form} onFormAction={onFormAction} />
		);
		component
			.find(
				'.' + FormListitem.defaultProps.classNames.settings + ' button'
			)
			.simulate('click');
		expect(onFormAction.mock.calls[0][0]).toBe(formId);
		expect(onFormAction.mock.calls[0][1]).toBe('settings');
	});
});
