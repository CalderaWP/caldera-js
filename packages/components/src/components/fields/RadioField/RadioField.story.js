import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioField } from './RadioField';

const onChange = newValue => {
	console.log(newValue);
};
const onBlur = event => {};

const STORY_NAME_RADIO = 'RadioField';
storiesOf(STORY_NAME_RADIO, module).add('With no value selected ', () => (
	<RadioField
		label={'Select A Hat'}
		onChange={onChange}
		description={'selection of hats'}
		fieldId={'selection-hats'}
		required={true}
		options={[{ value: 100, label: 'One' }, { value: 200, label: 'Two' }]}
	/>
));
storiesOf(STORY_NAME_RADIO, module).add('With  value selected ', () => (
	<RadioField
		label={'Select A Hat'}
		onChange={onChange}
		description={'selection of hats'}
		fieldId={'selection-hats'}
		required={true}
		value={200}
		options={[{ value: 100, label: 'One' }, { value: 200, label: 'Two' }]}
	/>
));
