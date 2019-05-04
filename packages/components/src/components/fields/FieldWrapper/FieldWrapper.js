import { fieldWrapperClassNames, parseAttributes } from '../util';
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import classNames from 'classnames';


export const FieldWrapper = ({ fieldType, attributes, children,className }) => {
	if( 'string' === typeof  className ){
		className = [className];
	}
	if( ! Array.isArray(className)){
		className= [];
	}
	return (
		<div
			className={
				classNames([...className,fieldWrapperClassNames(fieldType)])
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
	className: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.string),
		PropTypes.string
	])
};
