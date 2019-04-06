import classNameService, {
	CLASS_NAME_HOOKS,
	FILTER_FIELD_CLASS_NAME,
	FILTER_FIELD_LABEL_CLASS_NAME,
	FILTER_FIELD_SET_CLASS_NAME,
	FILTER_FIELD_WRAPPER_CLASS_NAME
} from './classNameService'
import {fieldClassNames} from "./fieldClassNames";

const TEST_CONSUMER = 'namespace';
describe('classNameHooks', () => {
	beforeEach(() => {
		[FILTER_FIELD_CLASS_NAME,
			FILTER_FIELD_LABEL_CLASS_NAME,
			FILTER_FIELD_SET_CLASS_NAME,
			FILTER_FIELD_WRAPPER_CLASS_NAME
		].forEach(filterName => classNameService.removeAllFilters(filterName)
		)
	})
	it('filters work as expected', () => {
		classNameService.addFilter('headerPath', TEST_CONSUMER, () => 'ALT!');
		const headerPath = classNameService.applyFilters('headerPath', './Header');
		expect(headerPath).toEqual('ALT!')
	});

	const cf1ClassNames = {
		FILTER_FIELD_CLASS_NAME: 'field-set',
		FILTER_FIELD_SET_CLASS_NAME: 'form-control',
		FILTER_FIELD_WRAPPER_CLASS_NAME: 'form-group',
		FILTER_FIELD_LABEL_CLASS_NAME: 'control-label'
	};



	it('Adds className for field', () => {
		classNameService.addFilter(FILTER_FIELD_CLASS_NAME, TEST_CONSUMER, () => cf1ClassNames[FILTER_FIELD_WRAPPER_CLASS_NAME]);
		expect(fieldClassNames('text').includes(cf1ClassNames[FILTER_FIELD_WRAPPER_CLASS_NAME])).toBe(true);
	});

	it('Adds className for fieldset', () => {
		classNameService.addFilter(FILTER_FIELD_SET_CLASS_NAME, TEST_CONSUMER, () => cf1ClassNames[FILTER_FIELD_SET_CLASS_NAME]);
		expect(fieldClassNames('text').includes(cf1ClassNames[FILTER_FIELD_SET_CLASS_NAME])).toBe(true);
	});

	it('Adds className for field wrapper', () => {
		classNameService.addFilter(FILTER_FIELD_WRAPPER_CLASS_NAME, TEST_CONSUMER, cf1ClassNames[FILTER_FIELD_WRAPPER_CLASS_NAME]);
		expect(fieldClassNames('text').includes('form-group')).toBe(true);
	});

	it('Adds className for field label', () => {
		classNameService.addFilter(FILTER_FIELD_LABEL_CLASS_NAME, TEST_CONSUMER, () => cf1ClassNames[FILTER_FIELD_LABEL_CLASS_NAMEg]);
		expect(fieldClassNames('text')).includes('form-group').toBe(true);
	});
});
