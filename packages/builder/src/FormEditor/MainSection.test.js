import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { MainSection } from './MainSection';

describe('Main Section component', () => {
	it('should match snapshot', () => {
		const component = renderer.create(
			<MainSection
				className={'class-one'}
				title={'The Title'}
			>
				Insides
			</MainSection>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
