import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ConditionalEditor } from './ConditionalEditor';

const magics = {
	field: {
		tags: {
			text: [
				'numberPeopleChoice',
				'person_one_name',
				'person_one_email',
				'person_two_name',
				'person_two_email',
				'person_three_name',
				'person_three_email',
				'submit',
			],
			toggle_switch: ['numberPeopleChoice'],
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
const conditions = [
	{
		id: 'con_9457156563497745',
		name: 'Two People',
		type: 'show',
		fields: {
			cl8962595065547459: 'numberPeopleChoice',
			cl4510708085080191: 'numberPeopleChoice',
		},
		group: {
			rw872285474363952: {
				cl8962595065547459: {
					parent: 'rw872285474363952',
					field: 'numberPeopleChoice',
					compare: 'is',
					value: 'numberPeopleTwo',
				},
			},
			rw6265972925354504: {
				cl4510708085080191: {
					parent: 'rw6265972925354504',
					field: 'numberPeopleChoice',
					compare: 'is',
					value: 'numberPeopleThree',
				},
			},
		},
	},
	{
		id: 'con_4812944559945067',
		name: 'Three People',
		type: 'show',
		fields: {
			cl5077669325217868: 'numberPeopleChoice',
		},
		group: {
			rw1885912614213066: {
				cl5077669325217868: {
					parent: 'rw1885912614213066',
					field: 'numberPeopleChoice',
					compare: 'is',
					value: 'numberPeopleThree',
				},
			},
		},
	},
];

const fields = [
	{
		ID: 'numberPeopleChoice',
		type: 'radio',
		label: 'Number of People',
		slug: 'numberPeopleChoice',
		conditions: {
			type: '',
		},
		caption: '',
		config: {
			custom_class: '',
			orientation: 'horizontal',
			selected_class: 'btn-success',
			default_class: 'btn-default',
			default_option: '',
			auto_type: '',
			taxonomy: 'category',
			post_type: 'post',
			value_field: 'name',
			orderby_tax: 'name',
			orderby_post: 'name',
			order: 'ASC',
			default: 'numberPeopleOne',
			option: {
				numberPeopleOne: {
					calc_value: 'One',
					value: 'One',
					label: 'One',
				},
				numberPeopleTwo: {
					calc_value: 'Two',
					value: 'Two',
					label: 'Two',
				},
				numberPeopleThree: {
					calc_value: 'Three',
					value: 'Three',
					label: 'Three',
				},
			},
			email_identifier: 0,
			personally_identifying: 0,
		},
	},
	{
		ID: 'fld_1812913',
		type: 'text',
		label: 'Person One Name',
		slug: 'person_one_name',
		conditions: {
			type: '',
		},
		required: 1,
		caption: '',
		config: {
			custom_class: '',
			placeholder: '',
			default: '',
			type_override: 'text',
			mask: '',
			email_identifier: 0,
			personally_identifying: 0,
		},
	},
	{
		ID: 'fld_7290902',
		type: 'email',
		label: 'Person One Email',
		slug: 'person_one_email',
		conditions: {
			type: '',
		},
		required: 1,
		caption: '',
		config: {
			custom_class: '',
			placeholder: '',
			default: '',
			email_identifier: 0,
			personally_identifying: 0,
		},
	},
	{
		ID: 'fld_6900741',
		type: 'text',
		label: 'Person Two Name',
		slug: 'person_two_name',
		conditions: {
			type: 'con_9457156563497745',
		},
		required: 1,
		caption: '',
		config: {
			custom_class: '',
			placeholder: '',
			default: '',
			type_override: 'text',
			mask: '',
			email_identifier: 0,
			personally_identifying: 0,
		},
	},
	{
		ID: 'fld_1561974',
		type: 'email',
		label: 'Person Two Email',
		slug: 'person_two_email',
		conditions: {
			type: 'con_9457156563497745',
		},
		required: 1,
		caption: '',
		config: {
			custom_class: '',
			placeholder: '',
			default: '',
			email_identifier: 0,
			personally_identifying: 0,
		},
	},
	{
		ID: 'fld_6241168',
		type: 'text',
		label: 'Person Three Name',
		slug: 'person_three_name',
		conditions: {
			type: 'con_4812944559945067',
		},
		required: 1,
		caption: '',
		config: {
			custom_class: '',
			placeholder: '',
			default: '',
			type_override: 'text',
			mask: '',
			email_identifier: 0,
			personally_identifying: 0,
		},
	},
	{
		ID: 'fld_2458053',
		type: 'email',
		label: 'Person Three Email',
		slug: 'person_three_email',
		conditions: {
			type: 'con_4812944559945067',
		},
		required: 1,
		caption: '',
		config: {
			custom_class: '',
			placeholder: '',
			default: '',
			email_identifier: 0,
			personally_identifying: 0,
		},
	},
	{
		ID: 'fld_2668148',
		type: 'button',
		label: 'Submit',
		slug: 'submit',
		conditions: {
			type: '',
		},
		caption: '',
		config: {
			custom_class: '',
			type: 'submit',
			class: 'btn btn-default',
			target: '',
		},
	},
];

const Component = props => {
	const [condition, setCondition] = useState(conditions[0]);
	props = { ...props, onChange: (update) => {
        console.log(update);
        setCondition(update);   
    }, condition };
	return <ConditionalEditor {...props} />;
};

storiesOf('ConditionalEditor ', module).add('Edit condition', () => (
	<Component fields={fields} magics={magics} />
));
