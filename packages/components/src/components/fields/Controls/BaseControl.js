import React, {createElement} from 'react';
import {FieldWrapper} from "../../..";
import {FieldLabel} from "../FieldLabel/FieldLabel";
import {labelClassNames} from "../util";
import classNames from 'classnames';
import PropTypes from 'prop-types';
function BaseControl( { id, label, help, children,fieldType,labelBefore,Messages,wrapperClassNames} ) {
	const Label = () => (
		<FieldLabel
			className={labelClassNames(fieldType)}
			fieldId={id}
		>
			{label}
		</FieldLabel>
	);

	return (
		<FieldWrapper
			fieldType={fieldType}
			className={classNames(wrapperClassNames)}
		>
			{labelBefore && <Label />}
			{children}
			{! labelBefore && <Label />}
			{ !! help && <p id={ id + '__help' } className="caldera-control__help description">{ help }</p> }
			{ !! Messages && <Messages /> }
		</FieldWrapper>
	);
}

BaseControl.defaultProps = {
	labelBefore: true,
};

BaseControl.propTypes= {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	fieldType: PropTypes.string.isRequired,
	labelBefore: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	messages: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	wrapperClassNames: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
	])
};

export default BaseControl;
