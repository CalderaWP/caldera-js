import React from 'react';

import BaseControl from "./BaseControl";

function TextareaControl( { label, value, help, instanceId, onChange, id, rows = 4, className, ...props } ) {
	const onChangeValue = ( event ) => onChange( event.target.value );

	return (
		<BaseControl label={ label } id={ id } help={ help } className={ className }>
			<textarea
				className="components-textarea-control__input"
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

