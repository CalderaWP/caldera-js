import {createFieldRule} from './createFieldRule';

describe('createFieldRule', () => {
	it('Creates function for is conditional', () => {
		expect(typeof createFieldRule('is', 'd', {})).toBe('function');
	});

	it('Is conditional is true when it should be', () => {
		const fieldValues = {
			f1: 'pass',
			f2: 'sfdsdfsdf'
		};
		const rule = createFieldRule('is', 'f1', 'pass');
		expect(rule(fieldValues)).toBe(true);
	});

	it('Is conditional is false when it should be', () => {
		const fieldValues = {
			f1: 'pass',
			f2: 'sfdsdfsdf'
		};
		const rule = createFieldRule('is', 'f1', 'pa');
		expect(rule(fieldValues)).toBe(false);
	});

	it('Is conditional is false when no value for that field', () => {
		const fieldValues = {
			f2: 'sfdsdfsdf'
		};
		const rule = createFieldRule('is', 'f1', 'pa');
		expect(rule(fieldValues)).toBe(false);
	});


	it('Creates function for not conditional', () => {
		expect(typeof createFieldRule('not', 'd', {}));
	});

	it('Not conditional is true when it should be', () => {
		const fieldValues = {
			f1: 'pass',
			f2: 'sfdsdfsdf'
		};
		const rule = createFieldRule('not', 'f1', 'pa');
		expect(rule(fieldValues)).toBe(true);
	});

	it('Is conditional is false when it should be', () => {
		const fieldValues = {
			f1: 'pass',
			f2: 'sfdsdfsdf'
		};
		const rule = createFieldRule('not', 'f1', 'pass');
		expect(rule(fieldValues)).toBe(false);
	});

	it.skip('Not conditional is false when no value for that field', () => {
		const fieldValues = {
			f2: 'sfdsdfsdf'
		};
		const rule = createFieldRule('not', 'f1', 'pa');
		expect(rule(fieldValues)).toBe(false);
	});

	it('compares with weak equality', () => {
		const testValue = '22';
		const fieldValues = {
			f2: 22,
			f44: 'Hi'
		};
		let rule = createFieldRule('is', 'f2', '22');
		expect(rule(fieldValues)).toBe(true);
		rule = createFieldRule('is', 'f2', 22);
		expect(rule(fieldValues)).toBe(true);
		rule = createFieldRule('==', 'f2', '22');
		expect(rule(fieldValues)).toBe(true);

	});

	it('compares with strong equality', () => {
		const testValue = '22';
		const fieldValues = {
			f2: 22,
			f44: 'hats'
		};
		let rule = createFieldRule('===', 'f2', '22');
		expect(rule(fieldValues)).toBe(false);
		rule = createFieldRule('===', 'f2', 22);
		expect(rule(fieldValues)).toBe(true);
		rule = createFieldRule('===', 'f44', 'hats');
		expect(rule(fieldValues)).toBe(true);
		rule = createFieldRule('===', 'f44', 'hatball');
		expect(rule(fieldValues)).toBe(false);
	});

	it('compares greater than', () => {
		const testValue = '22';
		const fieldValues = {
			f2: 22,
			f44: '22'
		};
		let rule = createFieldRule('>', 'f2', 20);
		expect(rule(fieldValues)).toBe(true);
		rule = createFieldRule('>', 'ft', 11000);
		expect(rule(fieldValues)).toBe(false);
		rule = createFieldRule('>', 'f2', '20');
		expect(rule(fieldValues)).toBe(true);
		rule = createFieldRule('>', 'f2', '11000');
		expect(rule(fieldValues)).toBe(false);

	});

	it('compares less than', () => {
		const testValue = '22';
		const fieldValues = {
			f2: 22,
			f44: '22'
		};
		let rule = createFieldRule('<', 'f2', 20);
		expect(rule(fieldValues)).toBe(false);
		rule = createFieldRule('<', 'f2', 11000);
		expect(rule(fieldValues)).toBe(true);
		rule = createFieldRule('<', 'f2', '20');
		expect(rule(fieldValues)).toBe(false);
		rule = createFieldRule('<', 'f2', '11000');
		expect(rule(fieldValues)).toBe(true);

	});

	it('compares less than with >', () => {
		const testValue = '22';
		const fieldValues = {
			f2: 22,
			f44: '22'
		};
		let rule = createFieldRule('>', 'f2', 20);
		expect(rule(fieldValues)).toBe(true);
		rule = createFieldRule('>', 'f2', 11000);
		expect(rule(fieldValues)).toBe(false);
		rule = createFieldRule('>', 'f2', '20');
		expect(rule(fieldValues)).toBe(true);
		rule = createFieldRule('>', 'f2', '11000');
		expect(rule(fieldValues)).toBe(false);

	});

	it('compares less than with smaller', () => {
		const testValue = '22';
		const fieldValues = {
			f2: 22,
			f44: '22'
		};
		let rule = createFieldRule('smaller', 'f2', 20);
		expect(rule(fieldValues)).toBe(true);
		rule = createFieldRule('smaller', 'f2', 11000);
		expect(rule(fieldValues)).toBe(false);
		rule = createFieldRule('smaller', 'f2', '20');
		expect(rule(fieldValues)).toBe(true);
		rule = createFieldRule('smaller', 'f2', '11000');
		expect(rule(fieldValues)).toBe(false);

	});


});
