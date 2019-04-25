import React from 'react';
import {FieldWrapper} from "../../..";
import {FieldLabel} from "../FieldLabel/FieldLabel";
import {labelClassNames} from "../util";

function BaseControl( { id, label, help, className, children,fieldType } ) {
	return (
		<FieldWrapper
			fieldType={fieldType}>
			<FieldLabel
				fieldId={id}
			>
				{label}
			</FieldLabel>
			{children}
			{ !! help && <p id={ id + '__help' } className="caldera-control__help description">{ help }</p> }
		</FieldWrapper>
	);
}

export default BaseControl;
