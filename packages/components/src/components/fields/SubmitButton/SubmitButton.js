import React from 'react';
import { FieldWrapper } from '..';
import { Control } from '../Control';

export const SubmitButton = props => {
	const { label, value, onChange, onBlur, attributes } = props;

	const wrapperProps = {
		...props,
		fieldType: 'submit',
	};
	return (
		<FieldWrapper {...wrapperProps}>
			<Control
				as={'input'}
				fieldType={'submit'}
				value={label ? label : value}
				onChange={onChange}
				onClick={
					props.hasOwnProperty('onClick') ? props.onClick : onChange
				}
				onBlur={onBlur}
				{...attributes}
			/>
		</FieldWrapper>
	);
};
