import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldSet } from './FieldSet';
import { InputField } from '../InputField/InputField';
const onChange = newValue => {};
storiesOf('FieldSet', module).add('Wraps an input', () => (
	<FieldSet fieldType={'text'}>
		<input />
	</FieldSet>
));

storiesOf('FieldSet', module).add('With checkboxes inside', () => (
	<FieldSet fieldType={'text'} legend={'Checkbox Fieldset'}>
		<InputField
			label={'Not Checked'}
			html5type={'checkbox'}
			value={false}
			onChange={onChange}
		/>
		<InputField
			label={'Checked'}
			html5type={'checkbox'}
			value={true}
			onChange={onChange}
		/>
	</FieldSet>
));
