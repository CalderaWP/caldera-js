import React, { Fragment, useEffect, useRef, useState } from 'react';

/**
 * Add a stylesheet to header
 *
 * Based on https://github.com/palmerhq/the-platform/blob/master/src/Stylesheet.tsx
 */
export function addStyleSheetToDom({ href, media = 'all', id }) {
	return new Promise((resolve, reject) => {
		if (null === document.getElementById(id)) {
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = href;
			link.id = id;
			link.media = media;
			link.onload = resolve;
			link.onerror = reject;
			document.getElementsByTagName('head')[0].appendChild(link);
		} else {
			resolve();
		}
	});
}

export const styleSheetId = () =>
	`caldera-loaded-style-${Math.random()
		.toString(36)
		.replace(/[^a-z]+/g, '')
		.substr(0, 5)}`;

/**
 * HOC to load a component after appending a stylesheet to DOM
 *
 * @param children
 * @param href
 * @param media
 * @param Loading
 * @returns {*}
 * @constructor
 */
export const WithStylesheet = ({ children, href, media, loading }) => {
	const loaded = useRef(false);
	const elementId = useRef(styleSheetId());
	const [isLoading, setLoading] = useState(false);
	useEffect(() => {
		if (!loaded.current && !isLoading) {
			setLoading(true);
			addStyleSheetToDom({ href, media, id: elementId.current }).then(
				() => {
					loaded.current = true;
					setLoading(false);
				}
			);
		}
	}, [loaded, isLoading, setLoading, href, media]);
	if (!loaded.current) {
		return <Fragment>{loading}</Fragment>;
	}
	return <Fragment>{children}</Fragment>;
};
