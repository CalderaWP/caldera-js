import setCf1ClassNames from './setCf1ClassNames';
import {
	classNameService,
	cf1ClassNames,
	FILTER_FIELD_SET_CLASS_NAME,
	FILTER_FIELD_WRAPPER_CLASS_NAME,
	FILTER_FORM_ELEMENT_CLASS,
	fieldClassNames,
	fieldSetClassNames,
	fieldWrapperClassNames
} from '@calderajs/components';
describe( 'setCf1ClassNames', () => {
	beforeEach( () => {
		classNameService.reset();
	});
	afterEach( () => {
		classNameService.reset();
	});
	it( 'Sets classes', () => {
		setCf1ClassNames();
		expect(classNameService.getFormWrapperClassNames('')).toBe('caldera-grid');
		expect(classNameService.getFormElementClassNames('')).toBe(cf1ClassNames[FILTER_FORM_ELEMENT_CLASS]);
		expect(fieldWrapperClassNames('text')).toBe(cf1ClassNames[FILTER_FIELD_WRAPPER_CLASS_NAME]);
		expect(fieldSetClassNames('text')).toBe(cf1ClassNames[FILTER_FIELD_SET_CLASS_NAME]);
	});

	it( 'resets itself', () => {
		const reset = setCf1ClassNames();
		const testFilter = 'hiRoy';
		classNameService.addFilter( testFilter, 'namespace', () => {return 'Mike';} );
		expect(classNameService.getFormWrapperClassNames('')).toBe('caldera-grid');
		expect(classNameService.getFormElementClassNames('')).toBe(cf1ClassNames[FILTER_FORM_ELEMENT_CLASS]);
		reset();
		expect( classNameService.hasFilter( testFilter ) ).toBe(true);
		expect(classNameService.getFormWrapperClassNames('')).toBe('caldera');
	});
});
