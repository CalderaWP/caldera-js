import React, { useState } from 'react';
import { CalderaForm } from '../CalderaForm';

import PropTypes from 'prop-types';

const defaults = {
	firstName: '',
	email: '',
	firstNameLabel: 'First Name',
	emailLabel: 'Email',
};

export function useContactFormConfig(
	firstName,
	firstNameLabel,
	email,
	emailLabel,
	c
) {
	const textField = {
		fieldType: 'text',
		value: firstName ? firstName : defaults.firstName,
		label: firstNameLabel ? firstNameLabel : defaults.firstNameLabel,
		fieldId: 'textFieldId',
		required: true,
	};
	const emailField = {
		fieldType: 'email',
		value: email ? email : defaults.email,
		label: emailLabel ? emailLabel : defaults.emailLabel,
		fieldId: 'emailFieldId',
		required: true,
	};

	const submitButton = {
		fieldId: 'sendSubmit',
		fieldType: 'submit',
		label: 'Send',
	};

	const form = {
		...config,
		rows: [
			{
				rowId: 'row1',
				columns: [
					{
						fields: [emailField.fieldId],
						width: '1/2',
						columnId: 'row1col1',
					},
					{
						fields: [textField.fieldId],
						width: '1/2',
						columnId: 'row1col2',
					},
				],
			},
			{
				rowId: 'row2',
				columns: [
					{
						fields: [submitButton.fieldId],
						width: '12',
						columnId: 'row2col1',
					},
				],
			},
		],
		fields: [textField, emailField, submitButton],
		conditionals: [],
	};
	return [form];
}

export const ContactForm = ({
	onSubmit,
	firstName,
	email,
	firstNameLabel,
	emailLabel,
}) => {
	const [form] = useContactFormConfig(
		firstName,
		firstNameLabel,
		email,
		emailLabel
	);

	return <CalderaForm form={form} onSubmit={onSubmit} />;
};

ContactForm.defaultProps = defaults;

ContactForm.propTypes = {
	onSubmit: CalderaForm.propTypes.onSubmit,
	firstName: PropTypes.string,
	email: PropTypes.string,
	firstNameLabel: PropTypes.string,
	mailLabel: PropTypes.string,
};
