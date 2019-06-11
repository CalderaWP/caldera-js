import React, { useContext, Fragment } from 'react';
import { FormContext } from '../FormContext';
import { Button } from '@wordpress/components';

export const HeaderInside = () => {
	const { activeFormId } = useContext(FormContext);
	if (activeFormId) {
		return <Button isPrimary>Save Form</Button>;
	}
	return <Fragment />;
};
