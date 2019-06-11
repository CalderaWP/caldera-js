import React,{useState} from 'react';
import { storiesOf } from '@storybook/react';
import {MagicField} from './MagicField';
const magics = {
	field: {
		tags: {
			text: [
				'number_of_people',
				'person_one_name',
				'person_one_email',
				'person_two_name',
				'person_two_email',
				'person_three_name',
				'person_three_email',
				'submit',
			],
			toggle_switch: ['number_of_people'],
			email: [
				'person_one_email',
				'person_two_email',
				'person_three_email',
			],
			button: ['submit'],
		},
		type: 'Fields',
		wrap: ['%', '%'],
	},
	system: {
		type: 'System Tags',
		tags: {
			text: [
				'entry_id',
				'entry_token',
				'ip',
				'user:id',
				'user:user_login',
				'user:first_name',
				'user:last_name',
				'user:user_email',
				'get:*',
				'post:*',
				'request:*',
				'post_meta:*',
				'embed_post:ID',
				'embed_post:post_title',
				'embed_post:permalink',
				'embed_post:post_date',
				'date:Y-m-d H:i:s',
				'date:Y/m/d',
				'date:Y/d/m',
				'login_url',
				'logout_url',
				'register_url',
				'lostpassword_url',
			],
			email: ['user:user_email'],
			date_picker: ['embed_post:post_date', 'date:Y-m-d H:i:s'],
		},
		wrap: ['{', '}'],
	},
	increment_capture: {
		type: 'Increment Value',
		tags: { text: ['increment_capture:increment_value'] },
		wrap: ['{', '}'],
	},
};

const Component = props => {
    const [value,onChange]= useState('');
    return  (<MagicField 
        magics={magics} 
        fieldId={'this-field-id'}
        value={value}
        onChange={onChange}
    />);
};
storiesOf('MagicFields', module).add('Magic field', ()=> <Component />  );