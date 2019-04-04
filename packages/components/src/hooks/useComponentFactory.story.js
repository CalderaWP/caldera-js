import React from 'react';
import { storiesOf } from '@storybook/react';
import  useComponentFactory  from './useComponentFactory';
import {textField} from "../factory";

let value = 'Hi Roy';
const onChange = newValue => {
	console.log(newValue);
};
const onBlur = event => {};


const Demo = () => {
	const [createComponent] = useComponentFactory({

	});
	const Input = createComponent(textField);

	return <Input />
};
storiesOf('useComponentFactory', module).add('Gutenberg Mode', () => (
	<Demo/>
));

