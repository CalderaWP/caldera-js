import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { RemotePost } from './RemotePost';
Enzyme.configure({ adapter: new Adapter() });

const post = {
	id: 42,
	title: {
		rendered: 'Hello To Roy'
	},
	content: {
		rendered: '<p>Hi Roy</p>'
	},
	excerpt: {
		rendered: '<p>Hi From Excerpt</p>'
	}
};
describe('Remote post  Component', () => {
	it('Matches snapshot', () => {
		const component = renderer.create(<RemotePost post={post} />);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Matches snapshot with class names', () => {
		const component = renderer.create(
			<RemotePost post={post} className={'remote-post-for-help'} />
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Matches snapshot with full content', () => {
		const component = renderer.create(
			<RemotePost
				post={post}
				showFullContent={true}
				className={'remote-post-for-help'}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
