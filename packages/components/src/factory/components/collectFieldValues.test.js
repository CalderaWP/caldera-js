import { selectField, numberField, emailField } from '../fields.fixtures';

import { collectFieldValues } from './collectFieldValues';

describe('collects field values', () => {
	const selectValue = 2;
	const numberValue = 2;
	const fields = [
		{ ...selectField, value: selectValue },
		{ ...numberField, value: numberValue },
		{ ...emailField },
	];

	it('works', () => {
		const values = collectFieldValues(fields);
		expect(values[selectField.fieldId]).toEqual(selectValue);
		expect(values[numberField.fieldId]).toEqual(numberValue);
	});
	it('works with unset value', () => {
		let testField = { ...emailField };
		delete testField.value;
		expect(testField.hasOwnProperty('value')).toBe(false);
		const values = collectFieldValues([
			{ ...numberField, value: numberValue },
			testField,
		]);
		expect(values[testField.fieldId]).toEqual(null);
		expect(values[numberField.fieldId]).toEqual(numberValue);
	});

	it('Deals with field value for field not an object', () => {
		let testField = [];
		const values = collectFieldValues([
			'words sandwiches',
			{ ...numberField, value: numberValue },
			testField,
		]);
		expect(values[numberField.fieldId]).toEqual(numberValue);
	});
});
