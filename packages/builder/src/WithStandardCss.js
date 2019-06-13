import React from 'react';
import { WithStylesheets } from '@calderajs/forms';
export const WithStandardCss = props => {
	const { children, loading, wordPressVersion, bootStrapVersion } = props;
	return (
		<WithStylesheets
			loading={loading}
			hrefs={[
				`https://cdn.jsdelivr.net/npm/bootstrap@${bootStrapVersion}/dist/css/bootstrap.min.css`,
				`https://cdn.jsdelivr.net/gh/WordPress/WordPress@${wordPressVersion}/wp-includes/css/dist/components/style.min.css`,
				`https://cdn.jsdelivr.net/gh/WordPress/WordPress@${wordPressVersion}/wp-includes/css/dist/editor/style.min.css`,
				`https://cdn.jsdelivr.net/gh/WordPress/WordPress@${wordPressVersion}/wp-includes/css/dist/block-editor/style.min.css`,
			]}
		>
			{children}
		</WithStylesheets>
	);
};

WithStandardCss.defaultProps = {
	wordPressVersion: '5.2',
	cfVersion: '1.8.6',
	bootStrapVersion: '4.3.1',
	loading: () => '<div>Generic Loading Spinner</div>',
};
