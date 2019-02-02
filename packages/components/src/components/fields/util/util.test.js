import {
	parseAttributes,
	fieldClassNames,
	labelClassNames,
	isValidHtml5type,
	addOrRemoveFromArray,
	toBoolean,
	fieldSetClassNames,
	fieldWrapperClassNames
} from './index';

describe('parseAttributes util function', () => {
	it('allows whitelist', () => {
		const attrs = {
			className: 'something',
			id: 'field-type-chooser'
		};
		expect(parseAttributes(attrs, Object.keys(attrs))).toEqual(attrs);
	});

	it('Removes attributes not on whitelist', () => {
		const attrs = {
			className: 'something',
			id: 'field-type-chooser'
		};
		expect(
			parseAttributes(
				{
					...attrs,
					step: 5
				},
				Object.keys(attrs)
			)
		).toEqual(attrs);
	});

	it('defaults to input', () => {
		const attrs = {
			autocomplete: false,
			required: true
		};
		expect(parseAttributes(attrs)).toEqual(attrs);
	});

	it('allows number attrs', () => {
		const numberAttrs = {
			min: 54,
			max: 4000,
			step: 5
		};
		const result = parseAttributes(numberAttrs, 'number');
		expect(result).toEqual(numberAttrs);
	});

	it('allows checked arg for checkbox field', () => {
		const checkedArgs = {
			checked: true
		};
		const result = parseAttributes(checkedArgs, 'checkbox');
		expect(result).toEqual(checkedArgs);
	});

	it('allows email attrs', () => {
		const emailAttrs = {
			maxlength: 54,
			multiple: true
		};
		expect(parseAttributes(emailAttrs, 'email')).toEqual({
			maxLength: 54,
			multiple: true
		});
	});

	it('allows fieldset attrs', () => {
		const fieldSetAttrs = {
			disabled: true,
			form: 'hat-pants',
			name: 'face-two'
		};
		expect(parseAttributes(fieldSetAttrs, 'fieldset')).toEqual(
			fieldSetAttrs
		);
		expect(parseAttributes(fieldSetAttrs, 'fieldSet')).toEqual(
			fieldSetAttrs
		);
	});

	it('allows maxlength and  minlength for textarea', () => {
		const args = {
			minlength: 7,
			maxlength: 60
		};
		const result = parseAttributes(args, 'textarea');
		expect(result).toEqual({
			minlength: 7,
			maxLength: 60
		});
	});

	it('allows rows and cols for textarea', () => {
		const args = {
			rows: 7,
			cols: 60
		};
		const result = parseAttributes(args, 'textarea');
		expect(result).toEqual(args);
	});
});

describe('fieldWrapperClassNames util function', () => {
	it('adds type', () => {
		expect(fieldWrapperClassNames('text')).toEqual(
			'caldera-field-wrapper caldera-field-wrapper-text'
		);
	});
});
describe('fieldClassNames util function', () => {
	it('adds type', () => {
		expect(fieldClassNames('text')).toEqual(
			'caldera-field caldera-field-text'
		);
	});
});
describe('fieldSetClassNames util function', () => {
	it('adds type', () => {
		expect(fieldSetClassNames('checkbox')).toEqual(
			'caldera-fieldset caldera-fieldset-checkbox'
		);
	});
});

describe('labelClassNames util function', () => {
	it('adds type', () => {
		expect(labelClassNames('text')).toEqual(
			'caldera-field-label caldera-field-label-text'
		);
	});
});

test('imports', () => {
	expect(typeof parseAttributes).toEqual('function');
	expect(typeof fieldClassNames).toEqual('function');
	expect(typeof labelClassNames).toEqual('function');
	expect(typeof addOrRemoveFromArray).toEqual('function');
	expect(typeof toBoolean).toEqual('function');
	expect(typeof isValidHtml5type).toEqual('function');
	expect(typeof fieldSetClassNames).toEqual('function');
});

describe('HTML5 checks', () => {
	it('allows email', () => {
		expect(isValidHtml5type('email')).toBe(true);
	});

	it('allows text ', () => {
		expect(isValidHtml5type('text')).toBe(true);
	});
	it('allows number ', () => {
		expect(isValidHtml5type('number')).toBe(true);
	});
	it('allows date ', () => {
		expect(isValidHtml5type('date')).toBe(true);
	});
	it('allows datetime ', () => {
		expect(isValidHtml5type('datetime')).toBe(true);
	});
	it('allows password ', () => {
		expect(isValidHtml5type('password')).toBe(true);
	});
	it('allows submit ', () => {
		expect(isValidHtml5type('submit')).toBe(true);
	});
	it('allows reset ', () => {
		expect(isValidHtml5type('reset')).toBe(true);
	});
	it('allows checkbox ', () => {
		expect(isValidHtml5type('checkbox')).toBe(true);
	});
	it('allows hidden ', () => {
		expect(isValidHtml5type('hidden')).toBe(true);
	});

	it('does not allow select ', () => {
		expect(isValidHtml5type('select')).toBe(false);
	});

	it('does not allow video ', () => {
		expect(isValidHtml5type('video')).toBe(false);
	});
});

describe('addOrRemoveFromArray', () => {
	it('Add a string to an array', () => {
		let array = [];
		array = addOrRemoveFromArray('one', array);
		expect(array).toEqual(['one']);
	});
	it('Add an integer to an array', () => {
		let array = [];
		array = addOrRemoveFromArray(2, array);
		expect(array).toEqual([2]);
	});

	it('Removes from an array', () => {
		let array = [];
		array = addOrRemoveFromArray('two', array);
		array = addOrRemoveFromArray('two', array);
		expect(array).toEqual([]);
	});

	it('Add multiple values to an array', () => {
		let array = [];
		array = addOrRemoveFromArray(2, array);
		array = addOrRemoveFromArray(3, array);
		expect(array).toEqual([2, 3]);
	});

	it('Add multiple values to an array and removes one of them', () => {
		let array = [];
		array = addOrRemoveFromArray(2, array);
		array = addOrRemoveFromArray(3, array);
		array = addOrRemoveFromArray(5, array);
		array = addOrRemoveFromArray(3, array);
		expect(array).toEqual([2, 5]);
	});
});

describe('Boolean casting', () => {
	it('casts 1 to true', () => {
		expect(toBoolean(1)).toBe(true);
	});

	it('casts string 1 to true', () => {
		expect(toBoolean('1')).toBe(true);
	});

	it('keeps true  true', () => {
		expect(toBoolean(true)).toBe(true);
	});

	it('casts string "true" to true', () => {
		expect(toBoolean('true')).toBe(true);
	});
	it('casts string "on" to true', () => {
		expect(toBoolean('true')).toBe(true);
	});
	it('casts string "yes" to true', () => {
		expect(toBoolean('true')).toBe(true);
	});
	it('casts string "hiRoy" to false', () => {
		expect(toBoolean('hiRoy')).toBe(false);
	});
	it('casts undefined to false', () => {
		expect(toBoolean(undefined)).toBe(false);
	});
});
