import * as React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import { InputField } from './InputField';

describe('InputField ', () => {
	let onChange;
	let onBlur;
	afterEach(cleanup);

	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it('matches snapshot with all props', () => {
		const component = render(
			<InputField
				fieldId={'i11'}
				label={'Hi Roy'}
				description={'Say Hi'}
				placeholder={'Hello'}
				html5type={'text'}
				value={'Roy'}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);
		expect(component).toMatchSnapshot();
	});
});
