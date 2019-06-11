import { storiesOf } from '@storybook/react';
import React from 'react';

import { WithStylesheets } from './WithStylesheets';

storiesOf('WithStylesheets', module).add(
	'WithStylesheets loads an array of stylesheets',
	() => {
		return (
			<WithStylesheets
				loading={<div>LOADING!!!</div>}
				hrefs={[
					'https://cdn.jsdelivr.net/gh/WordPress/WordPress@5.2/wp-includes/css/dist/components/style.min.css',
					'https://cdn.jsdelivr.net/gh/WordPress/WordPress@5.2/wp-includes/css/dist/editor/style.min.css',
				]}
			>
				<div>Gutes</div>
			</WithStylesheets>
		);
	}
);
