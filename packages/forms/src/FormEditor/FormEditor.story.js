import React, {Component} from 'react';
import { storiesOf } from '@storybook/react';
import { Processor } from './Processors/Processor';
import { Processors } from './Processors/Processors';
import {processorsCollection} from './Processors/processors.fixtures';

import { FormEditor } from './FormEditor';


import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField
} from "@calderajs/components";
storiesOf('FormEditor', module).add('The processor', () => (
	<Processor
		fields={[
			checkboxFieldset,
			selectField,
			checkboxField,
			numberField,
			textField,
			emailField,
			radioField
		]}
		type={'mailchimp'}
		label={'Main Segment'}
		onChange={values => console.log(values)}
		onClose={values => console.log(values)}
		onRemove={values => console.log(values)}
	/>
));

const processorTypes = [
	{
		type: 'apiRequest'
	},
	{
		type: 'redirect'
	}
];

storiesOf('FormEditor', module).add('The processors list', () => (
	<Processors
		processorTypes={processorTypes}
		processors={processorsCollection}
		onChange={values => console.log(values)}
		onClose={values => console.log(values)}
		onRemove={values => console.log(values)}
		formFields={[]}
		form={ {id: 'Name'}}
	/>
));

const form = {
	id: 'a form',
	processors: processorsCollection,
};

class MockFormApp extends Component {
	state = {
		form: {
			id: 'a-form',
			name: 'Form Name',
			processors: processorsCollection,
			fields: [
				checkboxField,
				radioField,
				textField
			]
		}
	};

	updateForm = (form) => this.setState({form});

	render(){
		const {form} = this.state;
		return(
			<FormEditor
				processorTypes={processorTypes}
				updateForm={this.updateForm}
				form={ form }
			/>
		)
	}
}

storiesOf('FormEditor', module).add('The form editor', () => (
	<MockFormApp/>
));


