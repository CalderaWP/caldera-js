import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonField } from './ButtonField';

const onChange = newValue => {
	console.log(newValue);
};
const onBlur = event => {};

const STORY_NAME = 'Button';
storiesOf(STORY_NAME, module).add('Default Variant ', () => (
	<ButtonField>Click Me</ButtonField>
));
storiesOf(STORY_NAME, module).add('With primary variant ', () => (
	<ButtonField variant={'primary'}>Click Me</ButtonField>
));
storiesOf(STORY_NAME, module).add('Calls the on click ', () => (
	<ButtonField
		label={'With Callback'}
		onClick={() => alert('Clicked')}
		variant={'primary'}
	>
		Trigger Alert
	</ButtonField>
));
