import {
	CalderaForm,
	FormClient,
	formClientFactory,
	HorizontalForm,
	getCf2Token,
	submitFormCf2,
	useCf2FormTokens,
	handleFormSubmitCf2,
	CF2Form,
	setCf1ClassNames,
	ContactForm,
	useContactFormConfig,
	//Mailchimp components
	MailChimpForm,
	MailChimpSurveyForm,
	CalderaMailChimpForm,
	CalderaMailChimpSurveyForm,
	AddApiKey,
	SelectList,
	//Mailchimp API
	mailChimpApi,
	//hooks + HOC
	useCalderaMailChimpFormConfig,
	WithStylesheet,
	WithStylesheet,
	WithBootstrapStyle,
	WithStylesheets,
} from '@calderajs/forms';

describe('Exports', () => {
	it('exports CalderaForm', () => {
		expect(typeof CalderaForm).toBe('function');
	});

	it('exports formClientFactory', () => {
		expect(typeof formClientFactory).toBe('function');
	});

	it('exports FormClient', () => {
		expect(typeof FormClient).toBe('function');
	});
	it('exports HorizontalForm', () => {
		expect(typeof HorizontalForm).toBe('function');
	});

	it('exports getCf2Token', () => {
		expect(typeof getCf2Token).toBe('function');
	});
	it('exports submitFormCf2', () => {
		expect(typeof submitFormCf2).toBe('function');
	});
	it('exports useCf2FormTokens', () => {
		expect(typeof useCf2FormTokens).toBe('function');
	});
	it('exports handleFormSubmitCf2', () => {
		expect(typeof handleFormSubmitCf2).toBe('function');
	});
	it('exports CF2Form', () => {
		expect(typeof CF2Form).toBe('function');
	});
	it('exports setCf1ClassNames', () => {
		expect(typeof setCf1ClassNames).toBe('function');
	});
	it('exports WithStylesheet', () => {
		expect(typeof WithStylesheet).toBe('function');
	});
	it('exports WithBootstrapStyle', () => {
		expect(typeof WithBootstrapStyle).toBe('function');
	});
	it('exports WithStylesheets', () => {
		expect(typeof WithStylesheets).toBe('function');
	});
	it('exports ContactForm', () => {
		expect(typeof ContactForm).toBe('function');
	});
	it('exports useContactFormConfig', () => {
		expect(typeof useContactFormConfig).toBe('function');
	});
});

describe('Mailchimp export', function() {
	it('exports MailChimpForm', () => {
		expect(typeof MailChimpForm).toBe('function');
	});
	it('exports MailChimpSurveyForm', () => {
		expect(typeof MailChimpSurveyForm).toBe('function');
	});
	it('exports CalderaMailChimpForm', () => {
		expect(typeof CalderaMailChimpForm).toBe('function');
	});
	it('exports CalderaMailChimpSurveyForm', () => {
		expect(typeof CalderaMailChimpSurveyForm).toBe('function');
	});

	const {
		//Admin API client
		getAccounts,
		getAccountsUi,
		getListsUi,
		getLists,
		saveApiKey,
		//public API client
		getForm,
		prepareData,
		createSubscriber,
		AdminClient,
		updateSubscriber,
	} = mailChimpApi;
	it('exports AdminClient', () => {
		expect(typeof AdminClient).toBe('function');
	});
	it('exports AddApiKey', () => {
		expect(typeof AddApiKey).toBe('function');
	});
	it('exports SelectList', () => {
		expect(typeof SelectList).toBe('function');
	});
	it('exports getAccounts', () => {
		expect(typeof getAccounts).toBe('function');
	});
	it('exports getAccountsUi', () => {
		expect(typeof getAccountsUi).toBe('function');
	});
	it('exports getListsUi', () => {
		expect(typeof getListsUi).toBe('function');
	});
	it('exports getLists', () => {
		expect(typeof getLists).toBe('function');
	});
	it('exports saveApiKey', () => {
		expect(typeof saveApiKey).toBe('function');
	});
	it('exports getForm', () => {
		expect(typeof getForm).toBe('function');
	});
	it('exports getAccountsUi', () => {
		expect(typeof prepareData).toBe('function');
	});
	it('exports prepareData', () => {
		expect(typeof getAccountsUi).toBe('function');
	});
	it('exports createSubscriber', () => {
		expect(typeof createSubscriber).toBe('function');
	});
	it('exports updateSubscriber', () => {
		expect(typeof updateSubscriber).toBe('function');
	});
	it('exports useCalderaMailChimpFormConfig', () => {
		expect(typeof useCalderaMailChimpFormConfig).toBe('function');
	});
});
