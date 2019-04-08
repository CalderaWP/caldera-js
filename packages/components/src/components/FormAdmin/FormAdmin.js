import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {messagePropShape} from "../Messages/messagePropTypes";
import classNameService from "../..";

export const formHasId = ( form, formId ) => {
	if( 'object' !== typeof  form ){
		return false;
	}
	if( form.hasOwnProperty('ID') ){
		return formId === form.ID;
	}
	if( form.hasOwnProperty('id') ){
		return formId === form.id;
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

	/**
	 * Form state
	 */
	const [forms, setForms] = useState(initialForms);

	/**
	 * Find form by ID
	 */
	const getFormById = useCallback(formId => {
		forms.find(form => {
			return formHasId(form,formId);
		});
	});


	return (
		<div
			className={className}
		>
			{render({forms,getFormById,setForms})}
		</div>
	);
};

