import React from "react";

export const FieldLabel = ({fieldId, children,required}) => {
	return (
		<label htmlFor={fieldId}>
			{children} {required && <span>*</span>}
		</label>
	);
}

