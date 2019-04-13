import React from 'react';

import BaseControl from "./BaseControl";
import {fieldClassNames} from "../util";

function TextareaControl( { label, value, help, instanceId, onChange, id, rows = 4, className, required, ...props } ) {
	const onChangeValue = ( event ) => onChange( event.target.value );

	return (
		<BaseControl
			label={ label } id={ id }
			help={ help }
			fieldType={'textarea'}
			required={required}

		>
			<textarea
				className={fieldClassNames('textarea')}
					id={ id }
				rows={ rows }
				onChange={ onChangeValue }
				aria-describedby={ !! help ? id + '__help' : undefined }
				value={ value }
				{ ...props }
			/>
		</BaseControl>
	);
}

export default TextareaControl;

