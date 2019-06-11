import React, { Fragment } from 'react';
import { fieldAreaFactory } from '../factories/fieldAreaFactory';

export const FieldArea = ({
	field,
	onChange,
	onBlur,
	fieldErrors,
	fieldsTouch,
}) => (
	<Fragment>
		{fieldAreaFactory(field, onChange, onBlur, fieldErrors, fieldsTouch)}
	</Fragment>
);
