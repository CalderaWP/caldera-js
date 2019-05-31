import React,{useState,Fragment,useContext} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {MainMenu} from './components/MainMenu';
import {FormProvider,FormContext} from "./FormContext";
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


export const App = ({ className}) => (
	<FormProvider initialForms={initialForms}>
		<MainMenu />
		<FormsListWithContext />
	</FormProvider>
);




App.defaultProps = {

};
App.propTypes = {

};
