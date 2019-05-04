import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount,shallow } from 'enzyme';

import { FieldWrapper } from './FieldWrapper';

describe('Field wrapper', () => {
	it('Matches snapshot', () => {
		const component = renderer.create(
			<FieldWrapper fieldType={'checkbox'} legend={'Check All options'}>
				<label htmlFor="one">One</label>
				<input id="one" type={'checkbox'} />
				<label htmlFor="two">Two</label>
				<input id="two" type={'checkbox'} />
			</FieldWrapper>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'applies an array of classnames',() => {
		const component = shallow(
			<FieldWrapper fieldType={'checkbox'} className={['strange', 'has-error']}>
				found
			</FieldWrapper>
		);
		expect( component.hasClass('has-error')).toBe(true);
		expect( component.hasClass('strange')).toBe(true);
	});

	it( 'applies an string of classnames',() => {
		const component = shallow(
			<FieldWrapper fieldType={'checkbox'} className={'strange'}>
				found
			</FieldWrapper>
		);
		expect( component.hasClass('strange')).toBe(true);
	});

	it('Allows attributes', () => {
		const attributes = {
			form: 'contactForm',
			disable: true,
			name: 'roys'
		};
		const component = mount(
			<FieldWrapper
				fieldType={'checkbox'}
				legend={'Check All options'}
				attributes={attributes}
			>
				<label htmlFor="one">One</label>
				<input id="one" type={'checkbox'} />
				<label htmlFor="two">Two</label>
				<input id="two" type={'checkbox'} />
			</FieldWrapper>
		);
		expect(component.find('div').prop('form')).toEqual(attributes.form);
	});
});
