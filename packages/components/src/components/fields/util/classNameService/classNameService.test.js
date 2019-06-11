import classNameService, {
	CLASS_NAME_HOOKS,
	FILTER_FIELD_CLASS_NAME,
	FILTER_FIELD_LABEL_CLASS_NAME,
	FILTER_FIELD_SET_CLASS_NAME,
	FILTER_FIELD_WRAPPER_CLASS_NAME,
	FILTER_FORM_COLUMN_CLASS,
	FILTER_FORM_COLUMN_PREFIX,
	cf1ClassNames,
	FILTER_FORM_ELEMENT_CLASS,
	FILTER_FORM_WRAPPER_CLASS,
	FILTER_FORM_ROW_CLASS,
} from './classNameService';
import { fieldClassNames } from '../fieldClassNames';
import { fieldSetClassNames } from '../fieldSetClassNames';
import { fieldWrapperClassNames } from '../fieldWrapperClassNames';
import { labelClassNames } from '../labelClassNames';

const TEST_CONSUMER = 'namespace';

describe('className service API', () => {
	afterEach(() => {
		classNameService.reset();
	});

	it('filters work as expected', () => {
		classNameService.addFilter('headerPath', TEST_CONSUMER, () => 'ALT!');
		const headerPath = classNameService.applyFilters(
			'headerPath',
			'./Header'
		);
		expect(headerPath).toEqual('ALT!');
	});

	it('can remove', () => {
		classNameService.addFilter(
			FILTER_FIELD_CLASS_NAME,
			TEST_CONSUMER,
			() => 'ALT'
		);
		let value1 = classNameService.applyFilters(
			FILTER_FIELD_CLASS_NAME,
			'ORIGINAL'
		);
		expect(value1).toEqual('ALT');
		classNameService.removeAllFilters(FILTER_FIELD_CLASS_NAME);
		let value2 = classNameService.applyFilters(
			FILTER_FIELD_CLASS_NAME,
			'ORIGINAL'
		);
		expect(value2).toEqual('ORIGINAL');
	});
});

describe('rest', () => {
	it('resets', () => {
		const OTHER_FILTER = 'random';
		classNameService.addFilter(
			FILTER_FORM_ROW_CLASS,
			TEST_CONSUMER,
			() => 'A1'
		);
		classNameService.addFilter(OTHER_FILTER, TEST_CONSUMER, () => 'A2');
		classNameService.reset();
		expect(classNameService.getFormRowClassNames('111')).toEqual(
			'caldera-row'
		);
		expect(classNameService.applyFilters(OTHER_FILTER, 11)).toEqual(11);
	});
});
describe('classNameHooks', () => {
	beforeEach(() => {
		Object.keys(cf1ClassNames).forEach(filter =>
			classNameService.removeAllFilters(filter)
		);
	});

	afterEach(() => {
		classNameService.reset();
	});

	it('filters work as expected', () => {
		classNameService.addFilter('headerPath', TEST_CONSUMER, () => 'ALT!');
		const headerPath = classNameService.applyFilters(
			'headerPath',
			'./Header'
		);
		expect(headerPath).toEqual('ALT!');
	});

	it('Adds className for field', () => {
		classNameService.addFilter(
			FILTER_FIELD_CLASS_NAME,
			TEST_CONSUMER,
			() => cf1ClassNames[FILTER_FIELD_WRAPPER_CLASS_NAME]
		);
		expect(fieldClassNames('text')).toBe(
			cf1ClassNames[FILTER_FIELD_WRAPPER_CLASS_NAME]
		);
	});

	it('Adds className for fieldset', () => {
		classNameService.addFilter(
			FILTER_FIELD_SET_CLASS_NAME,
			TEST_CONSUMER,
			() => {
				return cf1ClassNames[FILTER_FIELD_SET_CLASS_NAME];
			}
		);
		expect(fieldSetClassNames('text')).toBe(
			cf1ClassNames[FILTER_FIELD_SET_CLASS_NAME]
		);
	});

	it('Adds className for field wrapper', () => {
		classNameService.addFilter(
			FILTER_FIELD_WRAPPER_CLASS_NAME,
			TEST_CONSUMER,
			() => cf1ClassNames[FILTER_FIELD_WRAPPER_CLASS_NAME]
		);
		expect(fieldWrapperClassNames('text')).toBe(
			cf1ClassNames[FILTER_FIELD_WRAPPER_CLASS_NAME]
		);
	});

	it('Adds className for field label', () => {
		classNameService.addFilter(
			FILTER_FIELD_LABEL_CLASS_NAME,
			TEST_CONSUMER,
			() => cf1ClassNames[FILTER_FIELD_LABEL_CLASS_NAME]
		);
		expect(labelClassNames('text')).toBe('control-label');
	});

	it('Adds className grid element ', () => {
		classNameService.addFilter(
			FILTER_FORM_WRAPPER_CLASS,
			TEST_CONSUMER,
			() => 'caldera-grid'
		);
		expect(classNameService.getFormWrapperClassNames('')).toBe(
			'caldera-grid'
		);
	});

	it('Adds className form element ', () => {
		classNameService.addFilter(
			FILTER_FORM_ELEMENT_CLASS,
			TEST_CONSUMER,
			() => cf1ClassNames[FILTER_FORM_ELEMENT_CLASS]
		);
		expect(classNameService.getFormElementClassNames('')).toBe(
			cf1ClassNames[FILTER_FORM_ELEMENT_CLASS]
		);
	});
});

describe('column class names with width', () => {
	beforeEach(() => {
		Object.keys(cf1ClassNames).forEach(filter =>
			classNameService.removeAllFilters(filter)
		);
		classNameService.reset();
	});
	afterEach(() => {
		classNameService.reset();
	});

	it('Filters column prefix', () => {
		classNameService.addFilter(
			FILTER_FORM_COLUMN_PREFIX,
			TEST_CONSUMER,
			() => {
				return `p-`;
			}
		);
		expect(classNameService.getFormColumnClassPrefix()).toBe('p-');
	});

	it('Prefixes column class name', () => {
		classNameService.addFilter(
			FILTER_FORM_COLUMN_PREFIX,
			TEST_CONSUMER,
			() => {
				return `p-`;
			}
		);
		expect(classNameService.getFormColumnClassNames('c1', '1/2')).toBe(
			'caldera-column p-6'
		);
	});

	it('can use width in column prefix', () => {
		classNameService.addFilter(
			FILTER_FORM_COLUMN_PREFIX,
			TEST_CONSUMER,
			(prefix, columnId) => {
				return `${prefix}-${columnId}`;
			}
		);
		expect(classNameService.getFormColumnClassNames('c1', '1')).toBe(
			'caldera-column width--c112'
		);
	});
});
