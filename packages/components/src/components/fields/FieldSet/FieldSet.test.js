import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { FieldSet } from './FieldSet';

describe('Field label', () => {
	it('Matches snapshot', () => {
		const component = renderer.create(
			<FieldSet fieldType={'checkbox'} legend={'Check All options'}>
				<label htmlFor="one">One</label>
				<input id="one" type={'checkbox'} />
				<label htmlFor="two">Two</label>
				<input id="two" type={'checkbox'} />
			</FieldSet>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
	it('Allows attributes', () => {
		const attributes = {
			form: 'contactForm',
			disable: true,
			name: 'roys'
		};
		const component = mount(
			<FieldSet
				fieldType={'checkbox'}
				legend={'Check All options'}
				attributes={attributes}
			>
				<label htmlFor="one">One</label>
				<input id="one" type={'checkbox'} />
				<label htmlFor="two">Two</label>
				<input id="two" type={'checkbox'} />
			</FieldSet>
		);
		expect(component.find('fieldset').prop('form')).toEqual(
			attributes.form
		);
	});
});
