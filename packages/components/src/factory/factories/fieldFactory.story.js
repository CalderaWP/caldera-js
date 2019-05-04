import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {fieldFactory} from "./fieldFactory";
import {textField} from "../fields.fixtures";

class TextFieldTest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.field.value
		};
		this.onChange = this.onChange.bind(this);
	}

	onChange(value) {
		this.setState({value});
	}

	render() {
		const {onChange} = this;
		const field = {
			...this.props.field,
			value: this.state.value
		}
		return (
			<Fragment>
				<div>
					{this.state.value}
				</div>
				<Fragment>
					{fieldFactory(field, onChange)}
				</Fragment>
			</Fragment>
		)
	}
}

storiesOf('FieldFactory', module).add('textField', () => (
	<TextFieldTest field={textField}/>
));

const field = {
	fieldType: 'checkboxes',
	label: 'Select One',
	fieldId: 'checkboxFieldSetLabel',
	description: 'Checkbox field set description',
	required: true,
	options: [
		{
			value: 1,
			label: 'One',
			id: 'opt-1'
		},
		{
			value: 2,
			label: 'Two',
			id: 'opt-2',
			description: 'The Second Option',
			attributes: {
				checked: true
			}
		},
		{
			value: 3,
			label: 'Three',
			id: 'opt-3'
		}
	],
	value: ['opt-3']
}
storiesOf('FieldFactory', module).add('Checboxfieldset', () => (
	<TextFieldTest field={field}/>

));