import React, {Component} from 'react';
import { storiesOf } from '@storybook/react';
import { Processor } from './Processors/Processor';
import { Processors } from './Processors/Processors';
import {processorsCollection} from './Processors/processors.fixtures';

import { FormEditor } from './FormEditor';

const form = {
	fields: []
}

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
		form={form}
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


class MockProcessorsUI extends Component {
	state = {
		processors: [...processorsCollection],
		form: {
			ID: 'a-form',
			name: 'Form Name',
			fields: [
				checkboxField,
				radioField,
				textField
			]
		}
	};

	updateProcessors = (processors) => this.setState({
		processors
	});

	render(){
		const {form,processors} = this.state;
		return(
			<Processors
				processorTypes={processorTypes}
				processors={processors}
				onChange={values => console.log(values)}
				onClose={values => console.log(values)}
				onRemove={values => console.log(values)}
				formFields={[]}
				form={form}
				updateProcessors={this.updateProcessors}
			/>
		)
	}
}


storiesOf('FormEditor', module).add('The processors list - non-functional', () => (
	<Processors
		processorTypes={processorTypes}
		processors={processorsCollection}
		onChange={values => console.log(values)}
		onClose={values => console.log(values)}
		onRemove={values => console.log(values)}
		formFields={[]}
		form={form}
		updateProcessors={values => console.log(values)}
	/>
));

storiesOf('FormEditor', module).add('The processors list - functional', () => (
	<MockProcessorsUI />
));


class MockFormApp extends Component {
	state = {
		form: {
			ID: 'a-form',
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
	<MockFormApp />
));


