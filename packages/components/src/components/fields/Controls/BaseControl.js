import React from 'react';
import {FieldWrapper} from "../../..";
import {FieldLabel} from "../FieldLabel/FieldLabel";
import {labelClassNames} from "../util";
import PropTypes from 'prop-types';
function BaseControl( { id, label, help, children,fieldType,labelBefore } ) {
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
		>
			{labelBefore && <Label />}
			{children}
			{! labelBefore && <Label />}
			{ !! help && <p id={ id + '__help' } className="caldera-control__help description">{ help }</p> }
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
	]).isRequired
};

export default BaseControl;
