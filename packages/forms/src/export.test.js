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

});
