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

	const wrapperProps = {
		...props,
		fieldType: 'submit'
	};
	return (
		<FieldWrapper {...wrapperProps} >
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

