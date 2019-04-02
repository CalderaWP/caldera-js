import {
	CalderaForm,
	CalderaGrid,
	FormClient,
	formClientFactory,
	HorizontalForm,
	FormEditor,
	getCf2Token,
	submitFormCf2
} from '@calderajs/forms';


describe('Exports', () => {
	it('exports CalderaForm', () => {
		expect(typeof CalderaForm).toBe('function');
	});

	it('exports CalderaGrid', () => {
		expect(typeof CalderaGrid).toBe('function');
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
	it('exports FormEditor', () => {
		expect(typeof FormEditor).toBe('function');
	});
	it('exports getCf2Token', () => {
		expect(typeof getCf2Token).toBe('function');
	});
	it('exports submitFormCf2', () => {
		expect(typeof submitFormCf2).toBe('function');
	});
});
