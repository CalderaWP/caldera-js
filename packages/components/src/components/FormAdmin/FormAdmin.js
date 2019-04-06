import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {messagePropShape} from "../Messages/messagePropTypes";

export const formHasId = ( form, formId ) => {
	if( 'object' !== typeof  form ){
		return false;
	}
	if( form.hasOwnProperty('ID') ){
		return formId === form.ID;
	}
	if( form.hasOwnProperty('formId') ){
		return formId === form.formId;
	}
	return false;
};


/**
 *
 * @param render
 * @param initialForms
 * @param className
 * @return {*}
 * @constructor
 */
export const FormAdmin = (
	{
		render,
		initialForms,
		className
	}
) => {
	const [forms, setForms] = useState(initialForms);
	const getFormById = useCallback(formId => {
		forms.find(form => {
			return formHasId(form,formId);
		});
	});
	return (
		<div
			className={classNames(className,'caldera-forms-admin')}
		>
			{render(forms,setForms,getFormById)}
		</div>
	);
};


FormAdmin.propTypes = {
	initalForms: PropTypes.array,
	notice: messagePropShape,
	className
};
