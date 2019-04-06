import React from 'react';
import { storiesOf } from '@storybook/react';
import {FormAdmin} from "./FormAdmin";
import {FormsList} from "../elements/FormsList/FormsList";

const forms = [
	{
		id: 'contact-form',
		name: 'Contact Form'
	},
	{
		id: 'other-form',
		name: 'Other Form'
	}
];
storiesOf('FormAdmin', module).add('No forms', () => (
	<FormAdmin
		initalForms={forms}
		render={ (forms) => {
			<FormsList onFormAction={() => {} } forms={forms}/>
		}}
	/>
));


