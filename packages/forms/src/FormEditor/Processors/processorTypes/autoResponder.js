import{createFieldRule} from '../../../CalderaForm/state/createFieldRule';
import {FormFieldsAutoComplete} from "@calderawp/components";

export const AUTO_RESPONDER_PROCESSOR_TYPE = 'autoResponder';
export const autoResponder = {
	type: AUTO_RESPONDER_PROCESSOR_TYPE,
	fields: [
		{
			fieldType: FormFieldsAutoComplete.IDENTIFIER,
			html5type: 'string',
			value: '',
			label: 'From Name',
			fieldId: 'autoResponderFromName',
			description: 'Name Of Who The Email Is From',
			required: true
		},
		{
			fieldType: 'input',
			html5type: 'email',
			value: '',
			label: 'From email',
			fieldId: 'autoResponderFromEmail',
			description: 'Email Of Who The Email Is From',
			required: true
		},
		{
			fieldType: 'input',
			html5type: 'string',
			value: '',
			label: 'Recipient Name',
			fieldId: 'autoResponderRecipientName',
			description: 'Name Of Who The Email Is From',
			required: true
		},
		{
			fieldType: 'input',
			html5type: 'email',
			value: '',
			label: 'Recipient email',
			fieldId: 'autoResponderRecipientEmail',
			description: 'Email Of Who The Email Is From',
			required: true
		},
		{
			fieldType: 'select',
			value: true,
			label: 'HTML Mode',
			fieldId: 'autoResponderHtmlMode',
			description: 'HTML or Plain Text',
			value: 'html',
			options: [
				{value: 'html',label:'HTML'},
				{value: 'plain',label:'Plain Text'},
			]
		},
		{
			fieldType: 'magic-richtext',
			value: '',
			otherCompletes: {},
			fieldCompletes: {},
			label: 'Message',
			fieldId: 'messageHtml',
		},
		{
			fieldType: 'textarea',
			value: '',
			label: 'Message',
			fieldId: 'messagePlain',
		}
	],
	conditionals: [
		{
			type: 'show',
			rule: createFieldRule('is', 'autoResponderHtmlMode', 'html' ),
			fields: [
				'messageHtml'
			]
		},
		{
			type: 'show',
			rule: createFieldRule('is', 'autoResponderHtmlMode', 'plain' ),
			fields: [
				'messagePlain'
			]
		}
	]
}
