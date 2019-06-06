import React,{useState,Fragment,useContext} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {MainMenuWithContext} from './components/MainMenu';
import {FormProvider,FormContext} from "./FormContext";
import {MenuProvider} from "./MenuContext";
import {FormsList} from "..";
import {BodyWithContext} from "./components/Body";
import {creatContactFormConfig} from './hooks/useContactFormConfig';
import {Header} from "./components/Header";
import {HeaderInside} from "./components/HeaderInside";

const contactForm = creatContactFormConfig({config:{
	id: 'contact-form',
	name: 'Contact Form',
		_last_updated: 'Wed, 24 Oct 2018 19:34:12 +0000'
}});

const initialForms = [
	{
		id: 'other-form',
		name: 'Other Form 2017',
		_last_updated: 'Wed, 24 Oct 2017 19:34:12 +0000',
		fields: [],
		processors: [],
		conditionals: [],
	},
	contactForm,
	{
		id: 'z-form',
		name: 'Z Form 2011',
		_last_updated: 'Wed, 24 Oct 2011 19:34:12 +0000'

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
		name: 'settings',
		title: 'Settings',
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
			<Header>
				<HeaderInside />
			</Header>
			<MainMenuWithContext>
				<BodyWithContext />
			</MainMenuWithContext>

		</FormProvider>
	</MenuProvider>

);




App.defaultProps = {

};
App.propTypes = {

};
