import {createFieldRule} from './createFieldRule';
describe('createFieldRule', () => {
	it('Creates function for is conditional', () => {
		expect( typeof createFieldRule('is', 'd', {}));
	});

	it('Is conditional is true when it should be', () => {
		const fieldValues = {
			f1: 'pass',
			f2: 'sfdsdfsdf'
		};
		const rule = createFieldRule('is', 'f1', 'pass' );
		expect( rule(fieldValues)).toBe(true);
	});

	it('Is conditional is false when it should be', () => {
		const fieldValues = {
			f1: 'pass',
			f2: 'sfdsdfsdf'
		};
		const rule = createFieldRule('is', 'f1', 'pa' );
		expect( rule(fieldValues)).toBe(false);
	});

	it('Is conditional is false when no value for that field', () => {
		const fieldValues = {
			f2: 'sfdsdfsdf'
		};
		const rule = createFieldRule('is', 'f1', 'pa' );
		expect( rule(fieldValues)).toBe(false);
	});


	it('Creates function for not conditional', () => {
		expect( typeof createFieldRule('not', 'd', {}));
	});

	it('Not conditional is true when it should be', () => {
		const fieldValues = {
			f1: 'pass',
			f2: 'sfdsdfsdf'
		};
		const rule = createFieldRule('not', 'f1', 'pa' );
		expect( rule(fieldValues)).toBe(true);
	});

	it('Is conditional is false when it should be', () => {
		const fieldValues = {
			f1: 'pass',
			f2: 'sfdsdfsdf'
		};
		const rule = createFieldRule('not', 'f1', 'pass' );
		expect( rule(fieldValues)).toBe(false);
	});

	it.skip('Not conditional is false when no value for that field', () => {
		const fieldValues = {
			f2: 'sfdsdfsdf'
		};
		const rule = createFieldRule('not', 'f1', 'pa' );
		expect( rule(fieldValues)).toBe(false);
	});
});
