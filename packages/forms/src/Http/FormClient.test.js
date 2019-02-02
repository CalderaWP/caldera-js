import FormClient from './FormClient';
const value = 'First field value';
const fieldValues = {
	fld0: 'dsa',
	fld1: value,
	fld2: '4'
};
const formId = 'cf1';
const form = {
	id: formId,
	fieldValues
};

describe('Form client - updates state', () => {
	it('sets state', () => {
		const client = new FormClient(form, {
			form
		});
		client.fld1 = 33;
		expect(client.fld1).toBe(33);
	});

	it('Sets field values', () => {
		const client = new FormClient(form, {
			form
		});
		const newValues = {
			fld0: '111',
			fld1: 333,
			fld2: '41'
		};
		client.setFieldValues(newValues);
		expect(client.getFieldValues()).toEqual(newValues);
	});
});
describe('Form client - calls handlers', () => {
	let submitForm = jest.fn();
	const apiRootUri = 'https://site.com/wp-json/caldera/';
	beforeEach(() => {
		submitForm = jest.fn();
	});

	it('Calls submit handler function', function() {
		const client = new FormClient(form, {
			submitForm
		});
		client.submitForm();
		expect(submitForm.mock.calls.length).toBe(1);
	});

	it('Calls submit handler function with the right arguments', function() {
		const _fetch = jest.fn();
		const client = new FormClient(form, {
			submitForm,
			apiRootUri,
			fetch: _fetch
		});
		client.submitForm();
		expect(submitForm.mock.calls[0][0]).toBe(fieldValues);
		expect(typeof submitForm.mock.calls[0][1]).toBe('object');
		expect(submitForm.mock.calls[0][1].apiRootUri).toBe(apiRootUri);
		expect(submitForm.mock.calls[0][1].formId).toBe(formId);
		expect(submitForm.mock.calls[0][2]).toBe(_fetch);
	});

	test('Does not make an error if no submit handler', () => {
		const _fetch = jest.fn();
		const client = new FormClient(form, {
			apiRootUri,
			fetch: _fetch
		});
		client.submitForm();
		expect(fetch.mock.calls.length).toBe(0);
	});

	test('Javascript', () => {
		function sum(arg1, arg2) {
			return arg1 + arg2;
		}

		function sumArray(array) {
			return sum(...array);
		}
		expect(sumArray([1, 1])).toBe(2);
		expect(sumArray([2, 3])).toBe(5);
	});
});
