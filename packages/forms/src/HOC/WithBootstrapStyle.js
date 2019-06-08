import React from "react";
import { WithStylesheet } from "./WithStylesheet";

/**
 * HOC to load a component after appending bootstrap - via MAXCDN - to DOM
 *
 * @param children
 * @param version
 * @param media
 * @param Loading
 * @returns {*}
 * @constructor
 */
export const WithBootstrapStyle = ({ children, version, media, Loading }) => {
	return (
		<WithStylesheet
			href={`https://cdn.jsdelivr.net/npm/bootstrap@${version}/dist/css/bootstrap.min.css`}
			media={media}
			Loading={Loading}
		>
			{children}
		</WithStylesheet>
	);
};

WithBootstrapStyle.defaultProps = {
	version: "4.3.1",
};
