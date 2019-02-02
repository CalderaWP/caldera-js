import {
	CalderaForm,
	CalderaGrid,
	FormClient,
	formClientFactory,
	HorizontalForm,
	FormEditor

} from '@calderawp/forms';


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
});
