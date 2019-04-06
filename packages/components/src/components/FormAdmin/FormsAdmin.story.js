import React from 'react';
import { storiesOf } from '@storybook/react';
import {FormAdmin} from "./FormAdmin";
console.log(FormAdmin);
const forms = [
	{
		ID: 'contact-form',
		name: 'Contact Form'
	},
	{
		ID: 'other-form',
		name: 'Other Form'
	}
];
storiesOf('FormAdmin', module).add('No forms', () => (
	<FormAdmin
		initialForms={forms}
		render={(forms,getFormById,setForms) => {

			return (
				<ul>
					{forms.map(form => <li key={form.id}>{form.name}</li>)}
				</ul>
			)
		}}
	/>
));


