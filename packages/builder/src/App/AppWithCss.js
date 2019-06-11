import React from 'react';
import { App } from './App';
import { WithStylesheets } from '@calderajs/forms';
export const AppWithCss = props => {
	const { children, loading } = props;
	return (
		<WithStylesheets
			loading={loading}
			hrefs={[
				'https://cdn.jsdelivr.net/gh/WordPress/WordPress@5.2/wp-includes/css/dist/components/style.min.css',
				'https://cdn.jsdelivr.net/gh/WordPress/WordPress@5.2/wp-includes/css/dist/editor/style.min.css',
				'https://cdn.jsdelivr.net/gh/WordPress/WordPress@5.2/wp-includes/css/dist/block-editor/style.min.css',
			]}
		>
			<App {...props}>{children}</App>
		</WithStylesheets>
	);
};
