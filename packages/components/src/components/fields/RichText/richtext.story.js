import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';
import { RichText } from './RichText';
import { MagicRichText } from './MagicRichText';


let value = '';
const setValue = (newValue) => {
	value = newValue
};

storiesOf('RichText', module).add(
	'Example',
	() => (
		<RichText
			label={'Rich Text Example'}
			onChange={setValue}
			description={'Rich Text description'}
			fieldId={'rich text'}
			placeholder={'--- Type Words === '}
			value={value}
		/>

	)
);

storiesOf('RichText', module).add(
	'Magic tag completes using MagicRichText',
	() => (
		<MagicRichText
			label={'Rich Text Example'}
			onChange={setValue}
			description={'Rich Text description'}
			fieldId={'rich text'}
			placeholder={'--- Type Words === '}
			value={value}
		/>

	)
);
