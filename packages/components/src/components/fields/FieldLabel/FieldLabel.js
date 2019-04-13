import React from "react";

export const FieldLabel = ({fieldId, children}) => {
	return (
		<label htmlFor={fieldId}>
			{children}
		</label>
	);
}

