import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextAreaField } from './TextAreaField';

let value = 'Hi Roy';
const onChange = newValue => {
	console.log(newValue);
};
const onBlur = event => {};

storiesOf('TextAreaField', module).add('With no value', () => (
	<TextAreaField label={'Text Input'} onChange={onChange} onBlur={onBlur} />
));
