import React from 'react';
import { storiesOf } from '@storybook/react';
import { ToggleField } from './ToggleField';

let value = 'Hi Roy';
const onChange = newValue => {
	console.log(newValue);
};
const onBlur = event => {};


storiesOf('ToggleField', module).add('Checked', () => (
	<ToggleField
		label={'Toggle field'}
		onChange={onChange}
		onBlur={onBlur}
		checked={true}
	/>
));

storiesOf('ToggleField', module).add('Not Checked', () => (
	<ToggleField
		label={'Toggle field'}
		onChange={onChange}
		onBlur={onBlur}
		help={'This One Is Not Checked'}
		checked={false}
	/>
));
