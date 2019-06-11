import React, { Fragment, useEffect, useRef, useState } from 'react';
import { addStyleSheetToDom, styleSheetId } from './WithStylesheet';

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
export const WithStylesheets = ({ children, hrefs, media, loading }) => {
	const loaded = useRef(false);
	const [isLoading, setLoading] = useState(false);
	useEffect(() => {
		if (!loaded.current && !isLoading) {
			setLoading(true);
			const promises = hrefs.map(href =>
				addStyleSheetToDom({ href, media, id: styleSheetId() })
			);
			Promise.all(promises)
				.then(() => {
					loaded.current = true;
					setLoading(false);
				})
				.catch(e => console.log(e));
		}
	}, [loaded, loading, setLoading, hrefs, media]);
	if (!loaded.current) {
		return <Fragment>{loading}</Fragment>;
	}
	return <Fragment>{children}</Fragment>;
};
