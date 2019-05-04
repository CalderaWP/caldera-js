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
	let wrapperClassNames = [
		'caldera-field-group',
		`caldera-field-area-${fieldType}`,
	];

	if( touched && error ){
		wrapperClassNames.push( 'has-error');
	}

	if( required ){
		wrapperClassNames.push('is-required')
	}

	const MessageZone = () => (
		<Fragment>
			{touched && error && (
				<Message
					message={{
						error: true,
						message: error
					}}
				/>
			)}
		</Fragment>
	);

	return (
		<div

		>
			<Fragment key={`${fieldId}-1`}>
				{fieldFactory(field, onChange, onBlur,wrapperClassNames,MessageZone)}
			</Fragment>

		</div>
	);
};
