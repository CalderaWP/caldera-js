import { fieldWrapperClassNames, parseAttributes } from '../util';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import classNames from 'classnames';


export const FieldWrapper = ({ fieldType, attributes, children,wrapperClassNames }) => {
	return (
		<div
			className={
				classNames(
					wrapperClassNames,
					fieldWrapperClassNames(fieldType)
				)
			}
		 	{...attributes}
		>
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
	attributes: PropTypes.object,
	wrapperClassNames: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.string),
		PropTypes.string
	])
};
