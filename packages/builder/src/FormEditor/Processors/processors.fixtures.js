export const processorsCollection = [
	{
		id: 'season7Episode2',
		label: 'Test sending form data to test API',
		type: 'apiRequest',
		typeLabel: 'Api Request',
		config: {
			requestURL: 'https://something.com',
			requestMethod: 'POST',
		},
		fields: [
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
					{ value: 'GET', label: 'GET' },
					{ value: 'POST', label: 'POST' },
				],
			},
		],
	},
	{
		id: 'p2',
		label: 'Main MailChimp',
		type: 'mailchimp',
		typeLabel: 'MailChimp',
		config: {
			listId: '7',
		},
		fields: [
			{
				fieldId: 'listId',
				fieldType: 'input',
				html5type: 'text',
				required: true,
			},
		],
	},
];
