import {autoResponder} from './autoResponder';
export const defaultProcessorTypes = [
	autoResponder,
	{
		type: 'apiRequest',
		fields:  [
			{
				fieldId: 'requestURL',
				fieldType: 'input',
				html5type: 'url',
				required: true,
			},
			{
				fieldId: 'requestMethod',
				fieldType: 'select',
				label: 'Request Method',
				default: 'GET',
				options: [
					{ value: "GET", label: 'GET' },
					{ value: "POST", label: 'POST' },
				]
			}

		]
	}
];
