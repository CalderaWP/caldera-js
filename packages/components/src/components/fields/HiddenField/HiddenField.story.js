import React from 'react';
import { storiesOf } from '@storybook/react';
import { HiddenField } from './HiddenField';

const onChange = newValue => {
	console.log(newValue);
};

storiesOf('Hidden Field', module).add('You can not see this field', () => (
	<HiddenField fieldId={'i11'} value={'Roy'} onChange={onChange} />
));
