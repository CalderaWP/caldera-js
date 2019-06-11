import * as React from 'react';
import renderer from 'react-test-renderer';

import { LazyIFrame } from './LazyIFrame';

describe('LazyIFrame', () => {
	it('Matches snapshot ', () => {
		const component = renderer.create(
			<LazyIFrame
				width={50}
				height={50}
				src={'https://hiroy.club'}
				className={'face-bats'}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
