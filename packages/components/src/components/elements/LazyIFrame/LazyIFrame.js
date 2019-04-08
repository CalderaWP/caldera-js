import React, {Fragment} from 'react';

import PropTypes from 'prop-types';

/**
 * Basic lazy-iframe loader
 *
 * @param src
 * @param width
 * @param height
 * @param className
 * @return {*}
 * @constructor
 */
export const LazyIFrame = ({
						   src,
						   width,
						   height,
						   className
					   }) => {
	return (
		<Fragment>
			<iframe src={src} height={height} width={width} className={className} lazy="true"/>
		</Fragment>
	);
};

LazyIFrame.propTypes = {
	src: PropTypes.string.isRequired,
	width: PropTypes.oneOfType(
		[
			PropTypes.number,
			PropTypes.string]
	),
	height: PropTypes.oneOfType(
		[
			PropTypes.number,
			PropTypes.string]
	),
	className: PropTypes.string,
};

LazyIFrame.defaultPosts = {
	width: '100%',
	height: '100%',
};
