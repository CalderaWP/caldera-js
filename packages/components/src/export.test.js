import {
	RemotePost,
	TextAreaField,
	ToggleField,
	RadioField,
	FieldWrapper,
	FieldSet,
	SelectField,
	InputField,
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
	LazyIFrame,
	CalderaNotice,
	CLASS_NAME_HOOKS,
	FILTER_FIELD_CLASS_NAME,
	FILTER_FIELD_LABEL_CLASS_NAME,
	FILTER_FIELD_SET_CLASS_NAME,
	FILTER_FIELD_WRAPPER_CLASS_NAME,
	FILTER_FORM_ELEMENT_CLASS,
	FILTER_FORM_WRAPPER_CLASS,
	FILTER_FORM_COLUMN_CLASS,
	FILTER_FORM_COLUMN_PREFIX,
	HiddenField
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
	});
	test('HiddenField', () => {
		expect(typeof HiddenField).toBe('function');
	});

	test('LazyIFrame', () => {
		expect(typeof LazyIFrame).toBe('function');
	});
	test('CalderaNotice', () => {
		expect(typeof CalderaNotice).toBe('function');
	});
});

describe('exports factory', () => {

	it('exports util function', () => {
		expect(typeof  collectFieldValues).toBe('function')
	});
	it('exports component', () => {
		expect(typeof fieldAreaFactory).toBe('function');
	});
	it('exports component', () => {
		expect(typeof Row).toBe('function');
	});
	it('exports component', () => {
		expect(typeof textField).toBe('object');
	});
	it( 'exports filter constants', () => {
		[
			CLASS_NAME_HOOKS,
			FILTER_FORM_COLUMN_PREFIX,
			FILTER_FIELD_CLASS_NAME,
			FILTER_FIELD_LABEL_CLASS_NAME,
			FILTER_FIELD_SET_CLASS_NAME,
			FILTER_FIELD_WRAPPER_CLASS_NAME,
			FILTER_FORM_ELEMENT_CLASS,
			FILTER_FORM_WRAPPER_CLASS,
			FILTER_FORM_COLUMN_CLASS
		].map( filterName => expect( typeof  filterName ).toBe('string'))
	});
});

describe('services', () => {
	test('classNameService', () => {
		expect(typeof classNameService).toBe('object');
		expect(typeof classNameService.applyFilters).toBe('function');
		expect(typeof classNameService.getFormWrapperClassNames).toBe('function');
	});
});
