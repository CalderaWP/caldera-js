import { fieldWrapperClassNames, parseAttributes } from '../util';
import PropTypes from 'prop-types';
import React from 'react';

/**
 *
 * @param fieldType
 * @param attributes
 * @param children
 * @return {*}
 * @constructor
 */
export const FieldWrapper = ({ fieldType, attributes, children }) => {
	return (
		<div className={fieldWrapperClassNames(fieldType)} {...attributes}>
			{children}
		</div>
	);
};

FieldWrapper.propTypes = {
	fieldType: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	attributes: PropTypes.object
};
