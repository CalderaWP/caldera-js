import {
	RemotePost,
	TextAreaField,
	ToggleField,
	RadioField,
	FieldWrapper,
	FieldSet,
	SelectField,
	InputField,
	RichText,
	MagicRichText,
	addOrRemoveFromArray,
	toBoolean,
	isValidHtml5type,
	AutoCompleteField,
	FormFieldsAutoComplete,
	textField,
	Row,
	fieldAreaFactory,
	collectFieldValues,
	SubmitButton,
	classNameService,
	FormAdmin
} from '@calderajs/components';

describe('exports', () => {
	test('RemotePost', () => {
		expect(typeof RemotePost).toBe('function');
	});
	test('TextAreaField', () => {
		expect(typeof TextAreaField).toBe('function');
	});

	test('ToggleField', () => {
		expect(typeof ToggleField).toBe('function');
	});
	test('RadioField', () => {
		expect(typeof RadioField).toBe('function');
	});
	test('FieldWrapper', () => {
		expect(typeof FieldWrapper).toBe('function');
	});

	test('RemotePost', () => {
		expect(typeof RemotePost).toBe('function');
	});
	test('FieldSet', () => {
		expect(typeof FieldSet).toBe('function');
	});
	test('SelectField', () => {
		expect(typeof SelectField).toBe('function');
	});
	test('InputField', () => {
		expect(typeof InputField).toBe('function');
	});
	test.skip('RichText', () => {
		expect(typeof RichText).toBe('function');
	});
	test.skip('MagicRichText', () => {
		expect(typeof MagicRichText).toBe('function');
	});
	test('addOrRemoveFromArray', () => {
		expect(typeof addOrRemoveFromArray).toBe('function');
	});
	test('toBoolean', () => {
		expect(typeof toBoolean).toBe('function');
	});
	test('isValidHtml5type', () => {
		expect(typeof isValidHtml5type).toBe('function');
	});
	test('AutoCompleteField', () => {
		expect(typeof AutoCompleteField).toBe('function');
	});
	test('FormFieldsAutoComplete', () => {
		expect(typeof FormFieldsAutoComplete).toBe('function');
	});
	test('SubmitButton', () => {
		expect(typeof SubmitButton).toBe('function');
	});test('FormAdmin', () => {
		expect(typeof FormAdmin).toBe('function');
	});
});

describe( 'exports factory', () => {

	it( 'exports util function', () => {
		expect( typeof  collectFieldValues ).toBe('function')
	});
	it( 'exports component', () => {
		expect( typeof fieldAreaFactory ).toBe('function');
	});
	it( 'exports component', () => {
		expect( typeof Row ).toBe('function');
	});
	it( 'exports component', () => {
		expect( typeof textField ).toBe('object');
	});
});

describe( 'services', () => {
	test('classNameService', () => {
		expect(typeof classNameService).toBe('object');
		expect(typeof classNameService.applyFilters).toBe('function');
		expect(typeof classNameService.getFormWrapperClassNames).toBe('function');
	});
});
