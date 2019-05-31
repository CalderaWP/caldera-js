import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from './header';

storiesOf('Header', module).add('No heading level set (h1 by default)', () => (
	<Header>Header Component</Header>
));

storiesOf('Header', module).add('with h1  title', () => (
	<Header headingLevel={'h1'}>Title In H1</Header>
));

storiesOf('Header', module).add('with h2 title', () => (
	<Header headingLevel={'h2'}>Title In H2</Header>
));

storiesOf('Header', module).add('with h3 title', () => (
	<Header headingLevel={'h3'}>Title In H2</Header>
));

storiesOf('Header', module).add('With header color', () => (
	<Header
		styles={{
			header: {
				backgroundColor: '#4b4b4b',
				color: '#cfcfcf'
			}
		}}
	>
		Different Colors
	</Header>
));
