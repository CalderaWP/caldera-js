import React, { Fragment } from 'react';
import { fieldFactory } from '../factories/fieldFactory';

export const Field = ({ field, onChange, onBlur, messages }) => (
	<Fragment>{fieldFactory(field, onChange, onBlur, messages)}</Fragment>
);
