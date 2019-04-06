import classNameService, {
	CLASS_NAME_HOOKS,
	FILTER_FIELD_CLASS_NAME,
	FILTER_FIELD_LABEL_CLASS_NAME,
	FILTER_FIELD_SET_CLASS_NAME,
	FILTER_FIELD_WRAPPER_CLASS_NAME,
	cf1ClassNames, FILTER_FORM_ELEMENT_CLASS, FILTER_FORM_WRAPPER_CLASS
} from './classNameService'
import {fieldClassNames} from "../fieldClassNames";
import {fieldSetClassNames} from "../fieldSetClassNames";
import {fieldWrapperClassNames} from "../fieldWrapperClassNames";
import {labelClassNames} from "../labelClassNames";

const TEST_CONSUMER = 'namespace';
describe('classNameHooks', () => {

	it('filters work as expected', () => {
		classNameService.addFilter('headerPath', TEST_CONSUMER, () => 'ALT!');
		const headerPath = classNameService.applyFilters('headerPath', './Header');
		expect(headerPath).toEqual('ALT!')
	});


	it('Adds className for field', () => {
		classNameService.addFilter(FILTER_FIELD_CLASS_NAME, TEST_CONSUMER, () => cf1ClassNames[FILTER_FIELD_WRAPPER_CLASS_NAME]);
		expect(fieldClassNames('text')).toBe(cf1ClassNames[FILTER_FIELD_WRAPPER_CLASS_NAME]);
	});

	it('Adds className for fieldset', () => {
		classNameService.addFilter(FILTER_FIELD_SET_CLASS_NAME, TEST_CONSUMER, () =>  {
			return cf1ClassNames[FILTER_FIELD_SET_CLASS_NAME]
		});
		expect(fieldSetClassNames('text')).toBe(cf1ClassNames[FILTER_FIELD_SET_CLASS_NAME]);
	});

	it('Adds className for field wrapper', () => {
		classNameService.addFilter(FILTER_FIELD_WRAPPER_CLASS_NAME, TEST_CONSUMER, () => cf1ClassNames[FILTER_FIELD_WRAPPER_CLASS_NAME]);
		expect(fieldWrapperClassNames('text')).toBe(cf1ClassNames[FILTER_FIELD_WRAPPER_CLASS_NAME]);
	});

	it('Adds className for field label', () => {
		classNameService.addFilter(FILTER_FIELD_LABEL_CLASS_NAME, TEST_CONSUMER, () => cf1ClassNames[FILTER_FIELD_LABEL_CLASS_NAME]);
		expect(labelClassNames('text')).toBe('control-label');
	});

	it('Adds className grid element ', () => {
		classNameService.addFilter(FILTER_FORM_WRAPPER_CLASS, TEST_CONSUMER, () => 'caldera-grid');
		expect(classNameService.getFormWrapperClassNames('')).toBe('caldera-grid');
	});

	it('Adds className form element ', () => {
		classNameService.addFilter(FILTER_FORM_ELEMENT_CLASS, TEST_CONSUMER, () => cf1ClassNames[FILTER_FORM_ELEMENT_CLASS]);
		expect(classNameService.getFormElementClassNames('')).toBe('caldera-form');
	});



});
