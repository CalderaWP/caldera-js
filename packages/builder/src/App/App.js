import React,{useState,Fragment,useContext} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {MainMenuWithContext} from './components/MainMenu';
import {FormProvider,FormContext} from "./FormContext";
import {MenuContex,MenuProvider} from "./MenuContext";
import {FormsList} from "..";

const initialForms = [
	{
		id: 'contact-form',
		name: 'Contact Form'
	},
	{
		id: 'other-form',
		name: 'Other Form'
	}
];

function formActionHandler(formId,actionName) {
	console.log(formId,actionName);
}

export const FormsListWithContext = () => {
	const {forms} = useContext(FormContext);
	return (
		<Fragment>
			<FormsList forms={forms} panelTitle={'Forms'} classname={'forms-list'} onFormAction={formActionHandler}/>
		</Fragment>
	)

};
const menuItems = [
	{
		name: 'forms',
		title: 'Forms',
	},
	{
		name: 'entries',
		title: 'Entries',
	},
	{
		name: 'settings',
		title: 'Setting',
	},
	{
		name: 'documentation',
		title: 'Documentation',
	},
	{
		name: 'account',
		title: 'Account',
	},
];

export const App = ({ className}) => (
	<MenuProvider menuItems={menuItems}>
		<FormProvider initialForms={initialForms}>
			<MainMenuWithContext />
			<FormsListWithContext />
		</FormProvider>
	</MenuProvider>

);




App.defaultProps = {

};
App.propTypes = {

};
