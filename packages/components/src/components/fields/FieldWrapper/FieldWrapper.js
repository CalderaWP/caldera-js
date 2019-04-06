import { fieldWrapperClassNames, parseAttributes } from '../util';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';

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
			{typeof children !== 'undefined' ? children :<Fragment/>}
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
