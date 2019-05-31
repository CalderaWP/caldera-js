export const forms = {
	'contact-form': {
		id: 'contact-form',
		fields: {
			firstName: {
				id: 'firstName',
				type: 'text',
				fieldConfig: {
					options: [],
					multiple: false,
					buttonType: 'submit',
					html5type: 'text',
					attributes: []
				},
				name: null,
				value: null,
				default: null,
				field: null,
				form: null,
				slug: null,
				label: 'Your Name',
				description: null,
				fieldType: 'text',
				fieldId: 'firstName'
			},
			email: {
				id: 'email',
				type: 'text',
				fieldConfig: {
					options: [],
					multiple: false,
					buttonType: 'submit',
					html5type: 'email',
					attributes: []
				},
				name: null,
				value: null,
				default: null,
				field: null,
				form: null,
				slug: null,
				label: 'Your Email',
				description: null,
				fieldType: 'text',
				fieldId: 'email'
			},
			consent: {
				id: 'consent',
				type: 'checkbox',
				fieldConfig: {
					options: [],
					multiple: false,
					buttonType: 'submit',
					html5type: 'text',
					attributes: []
				},
				name: null,
				value: null,
				default: null,
				field: null,
				form: null,
				slug: null,
				label:
					'Do you consent to sharing your personally identifying data?',
				description: 'Learn more by reading our privacy policy',
				fieldType: 'checkbox',
				fieldId: 'consent'
			}
		},
		name: 'Contact Form',
		forms: null,
		settings: null,
		form: null,
		processors: null,
		rows: [
			{
				rowId: 'info-row',
				columns: [
					{
						width: '1/2',
						fields: [
							{
								id: 'firstName',
								type: 'text',
								fieldConfig: {
									options: [],
									multiple: false,
									buttonType: 'submit',
									html5type: 'text',
									attributes: []
								},
								name: null,
								value: null,
								default: null,
								field: null,
								form: null,
								slug: null,
								label: 'Your Name',
								description: null,
								fieldType: 'text',
								fieldId: 'firstName'
							}
						]
					},
					{
						width: '1/2',
						fields: [
							{
								id: 'email',
								type: 'text',
								fieldConfig: {
									options: [],
									multiple: false,
									buttonType: 'submit',
									html5type: 'email',
									attributes: []
								},
								name: null,
								value: null,
								default: null,
								field: null,
								form: null,
								slug: null,
								label: 'Your Email',
								description: null,
								fieldType: 'text',
								fieldId: 'email'
							}
						]
					}
				]
			},
			{
				rowId: 'privacy-row',
				columns: [
					{
						width: '1',
						fields: [
							{
								id: 'consent',
								type: 'checkbox',
								fieldConfig: {
									options: [],
									multiple: false,
									buttonType: 'submit',
									html5type: 'text',
									attributes: []
								},
								name: null,
								value: null,
								default: null,
								field: null,
								form: null,
								slug: null,
								label:
									'Do you consent to sharing your personally identifying data?',
								description:
									'Learn more by reading our privacy policy',
								fieldType: 'checkbox',
								fieldId: 'consent'
							}
						]
					}
				]
			}
		]
	}
};
export const entriesContactForm = {
	'26': {
		id: '26',
		formId: 'contact-form',
		date: '2018-12-29 17:03:22',
		userId: 0,
		entryValues: {
			'49': {
				fieldId: 'firstName',
				formId: 'contact-form',
				slug: 'firstName',
				entryId: 26,
				id: '49',
				value: 'Roy'
			},
			'50': {
				fieldId: 'email',
				formId: 'contact-form',
				slug: 'email',
				entryId: 26,
				id: '50',
				value: 'roy@hiroy.club'
			},
			'51': {
				fieldId: 'consent',
				formId: 'contact-form',
				slug: 'consent',
				entryId: 26,
				id: '51',
				value: '1'
			},
			'52': {
				fieldId: 'submitButton',
				formId: 'contact-form',
				slug: 'submitButton',
				entryId: 26,
				id: '52',
				value: 'clicked'
			}
		}
	},
	'27': {
		id: '27',
		formId: 'contact-form',
		date: '2018-12-29 17:05:04',
		userId: 0,
		entryValues: {
			'53': {
				fieldId: 'firstName',
				formId: 'contact-form',
				slug: 'firstName',
				entryId: 27,
				id: '53',
				value: 'Roy'
			},
			'54': {
				fieldId: 'email',
				formId: 'contact-form',
				slug: 'email',
				entryId: 27,
				id: '54',
				value: 'roy@hiroy.club'
			},
			'55': {
				fieldId: 'consent',
				formId: 'contact-form',
				slug: 'consent',
				entryId: 27,
				id: '55',
				value: '1'
			},
			'56': {
				fieldId: 'submitButton',
				formId: 'contact-form',
				slug: 'submitButton',
				entryId: 27,
				id: '56',
				value: 'clicked'
			}
		}
	},
	'28': {
		id: '28',
		formId: 'contact-form',
		date: '2018-12-29 17:05:52',
		userId: 0,
		entryValues: {
			'57': {
				fieldId: 'firstName',
				formId: 'contact-form',
				slug: 'firstName',
				entryId: 28,
				id: '57',
				value: 'Roy'
			},
			'58': {
				fieldId: 'email',
				formId: 'contact-form',
				slug: 'email',
				entryId: 28,
				id: '58',
				value: 'roy@hiroy.club'
			},
			'59': {
				fieldId: 'consent',
				formId: 'contact-form',
				slug: 'consent',
				entryId: 28,
				id: '59',
				value: '1'
			},
			'60': {
				fieldId: 'submitButton',
				formId: 'contact-form',
				slug: 'submitButton',
				entryId: 28,
				id: '60',
				value: 'clicked'
			}
		}
	},
	'29': {
		id: '29',
		formId: 'contact-form',
		date: '2018-12-29 17:07:02',
		userId: 0,
		entryValues: {
			'61': {
				fieldId: 'firstName',
				formId: 'contact-form',
				slug: 'firstName',
				entryId: 29,
				id: '61',
				value: 'Roy'
			},
			'62': {
				fieldId: 'email',
				formId: 'contact-form',
				slug: 'email',
				entryId: 29,
				id: '62',
				value: 'roy@hiroy.club'
			},
			'63': {
				fieldId: 'consent',
				formId: 'contact-form',
				slug: 'consent',
				entryId: 29,
				id: '63',
				value: '1'
			},
			'64': {
				fieldId: 'submitButton',
				formId: 'contact-form',
				slug: 'submitButton',
				entryId: 29,
				id: '64',
				value: 'clicked'
			}
		}
	},
	'30': {
		id: '30',
		formId: 'contact-form',
		date: '2018-12-29 17:12:07',
		userId: 0,
		entryValues: {
			'65': {
				fieldId: 'firstName',
				formId: 'contact-form',
				slug: 'firstName',
				entryId: 30,
				id: '65',
				value: 'Roy'
			},
			'66': {
				fieldId: 'email',
				formId: 'contact-form',
				slug: 'email',
				entryId: 30,
				id: '66',
				value: 'roy@hiroy.club'
			},
			'67': {
				fieldId: 'consent',
				formId: 'contact-form',
				slug: 'consent',
				entryId: 30,
				id: '67',
				value: '1'
			},
			'68': {
				fieldId: 'submitButton',
				formId: 'contact-form',
				slug: 'submitButton',
				entryId: 30,
				id: '68',
				value: 'clicked'
			}
		}
	},
	'31': {
		id: '31',
		formId: 'contact-form',
		date: '2018-12-29 17:16:27',
		userId: 0,
		entryValues: {
			'69': {
				fieldId: 'firstName',
				formId: 'contact-form',
				slug: 'firstName',
				entryId: 31,
				id: '69',
				value: 'Roy'
			},
			'70': {
				fieldId: 'email',
				formId: 'contact-form',
				slug: 'email',
				entryId: 31,
				id: '70',
				value: 'roy@hiroy.club'
			},
			'71': {
				fieldId: 'consent',
				formId: 'contact-form',
				slug: 'consent',
				entryId: 31,
				id: '71',
				value: '1'
			},
			'72': {
				fieldId: 'submitButton',
				formId: 'contact-form',
				slug: 'submitButton',
				entryId: 31,
				id: '72',
				value: 'clicked'
			}
		}
	},
	'32': {
		id: '32',
		formId: 'contact-form',
		date: '2018-12-29 17:16:40',
		userId: 2,
		entryValues: []
	},
	'33': {
		id: '33',
		formId: 'contact-form',
		date: '2018-12-29 17:17:43',
		userId: 2,
		entryValues: {
			'73': {
				fieldId: 'firstName',
				formId: 'contact-form',
				slug: 'firstName',
				entryId: 33,
				id: '73',
				value: 'Roy'
			},
			'74': {
				fieldId: 'email',
				formId: 'contact-form',
				slug: 'email',
				entryId: 33,
				id: '74',
				value: 'roy@hiroy.club'
			},
			'75': {
				fieldId: 'consent',
				formId: 'contact-form',
				slug: 'consent',
				entryId: 33,
				id: '75',
				value: '1'
			},
			'76': {
				fieldId: 'submitButton',
				formId: 'contact-form',
				slug: 'submitButton',
				entryId: 33,
				id: '76',
				value: 'clicked'
			}
		}
	},
	'34': {
		id: '34',
		formId: 'contact-form',
		date: '2018-12-29 17:18:37',
		userId: 2,
		entryValues: {
			'77': {
				fieldId: 'firstName',
				formId: 'contact-form',
				slug: 'firstName',
				entryId: 34,
				id: '77',
				value: 'Roy'
			},
			'78': {
				fieldId: 'email',
				formId: 'contact-form',
				slug: 'email',
				entryId: 34,
				id: '78',
				value: 'roy@hiroy.club'
			},
			'79': {
				fieldId: 'consent',
				formId: 'contact-form',
				slug: 'consent',
				entryId: 34,
				id: '79',
				value: '1'
			},
			'80': {
				fieldId: 'submitButton',
				formId: 'contact-form',
				slug: 'submitButton',
				entryId: 34,
				id: '80',
				value: 'clicked'
			}
		}
	}
};
