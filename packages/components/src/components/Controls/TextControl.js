import BaseControl from "./BaseControl";
import React from 'react';

function TextControl( { label, value, help, className, instanceId, onChange, type = 'text', ...props } ) {
	const id =  instanceId;
	const onChangeValue = ( event ) => onChange( event.target.value );

	return (
		<BaseControl label={ label } id={ id } help={ help } className={ className }>
			<input className="components-text-control__input"
				   type={ type }
				   id={ id }
				   value={ value }
				   onChange={ onChangeValue }
				   aria-describedby={ !! help ? id + '__help' : undefined }
				   { ...props }
			/>
		</BaseControl>
	);
}

export default  TextControl;
