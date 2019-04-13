
import React from 'react';
import BaseControl from "./BaseControl";


function CheckboxControl( { label, className, heading, checked, help, instanceId, onChange, ...props } ) {
	const id = instanceId;
	const onChangeValue = ( event ) => onChange( event.target.checked );

	return (
		<BaseControl label={ heading } id={ id } help={ help } className={ className }>
			<input
				id={ id }
				className="components-checkbox-control__input"
				type="checkbox"
				value="1"
				onChange={ onChangeValue }
				checked={ checked }
				aria-describedby={ !! help ? id + '__help' : undefined }
				{ ...props }
			/>
			<label className="components-checkbox-control__label" htmlFor={ id }>
				{ label }
			</label>
		</BaseControl>
	);
}

export default CheckboxControl;
