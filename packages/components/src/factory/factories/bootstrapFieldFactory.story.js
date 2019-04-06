import {bootstrapFieldFactory} from './bootstrapFieldFactory';
import { storiesOf } from '@storybook/react';

import React from 'react';
import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField,
	toggleField,
	textAreaField,
	autoCompleteField
} from '../fields.fixtures';

const onChange = (event) => console.log('change',event.target.value);
const onBlur = (event) => console.log('blur',event.target.value);


storiesOf('Bootstrap Field Factory', module).add('Wraps an input', () => (
	bootstrapFieldFactory(textField,onChange,onBlur)
));
