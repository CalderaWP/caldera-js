import React from "react";
import {FieldWrapper} from "..";
import {Control} from "../Control";

export const SubmitButton = props => {
	const {
		label,

		onChange,
		onBlur,
		attributes,
	} = props;

	return (
		<FieldWrapper {...props} >
			<Control
				type={"submit"}
				value={label}
				onChange={onChange}
				onClick={
					attributes && attributes.hasOwnProperty("onClick")
						? attributes.onClick
						: onChange
				}
				onBlur={onBlur}
				{...attributes}
			/>
		</FieldWrapper>
	);
};

