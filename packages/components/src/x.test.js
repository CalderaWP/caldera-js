import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

import {A1} from './index';
describe( 'a', () => {
	it( 'snapshots', () => {
		expect(renderer.create( <A1 />).toJSON()).toMatchSnapshot();
	})
})
