import { FieldWrapper } from '../../components/fields/FieldWrapper/FieldWrapper';
import { Message } from '../../components/Messages/Message';
import React, { Fragment } from 'react';
import classNames from 'classnames';
import { fieldFactory } from './fieldFactory';

export const fieldAreaFactory = (
	field,
	onChange,
	onBlur,
	fieldErrors,
	fieldsTouch
) => {
	const { fieldType, fieldId, required } = field;
	const error = fieldErrors && fieldErrors[fieldId];
	const touched = fieldsTouch && fieldsTouch[fieldId];
	return (
		<FieldWrapper
			fieldType={'text'}
			className={classNames('caldera-field-group', {
				'has-error': touched && error,
				'is-required': required
			})}
		>
			<Fragment key={`${fieldId}-1`}>
				{fieldFactory(field, onChange, onBlur)}
			</Fragment>
			{touched && error && (
				<Fragment key={`${fieldId}-2`}>
					<Message
						message={{
							error: true,
							message: error
						}}
					/>
				</Fragment>
			)}
		</FieldWrapper>
	);
};
