import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';
import {AutoCompleteField} from "./AutoCompleteField";
import ReactAutocomplete from 'react-autocomplete';
const onChange = newValue => {
	console.log(newValue);
};
const onBlur = event => {};

const STORY_NAME = 'Auto Complete field';

function Wrapped(){
	const[value,onChange]= useState('');
	return (
		<AutoCompleteField
			label={'Select A Hat'}
			onChange={onChange}
			description={'selection of hats'}
			fieldId={'selection-hats'}
			value={value}
			required={false}
			options={[{value: 'large', label: 'Large'}, {value: 'small', label: 'Small'}]}
		/>
	)
}

function ExampleWrapped(){
	const[value,onChange]= useState('');
	return (
		<ReactAutocomplete
			items={[
				{ id: 'foo', label: 'foo' },
				{ id: 'bar', label: 'bar' },
				{ id: 'baz', label: 'baz' },
			]}
			shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
			getItemValue={item => item.label}
			renderItem={(item, highlighted) =>
				<div
					key={item.id}
					style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
				>
					{item.label}
				</div>
			}
			value={value}
			onChange={e => onChange(e.target.value )}
			onSelect={value => onChange( value )}
		/>
	)
}
storiesOf(STORY_NAME, module).add('Default Variant ', () => (


	<Wrapped/>
));storiesOf(STORY_NAME, module).add('Example ', () => (
	<ExampleWrapped />


));
