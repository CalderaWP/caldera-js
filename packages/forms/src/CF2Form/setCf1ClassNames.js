import {
	classNameService,
	cf1ClassNames,
	FILTER_FORM_COLUMN_CLASS,
	FILTER_FORM_ELEMENT_CLASS
} from '@calderajs/components';


/**
 * Sets all form classes to match Caldera Forms 1.x
 *
 * NOTE: Resets class service first.
 */
export default function setCf1ClassNames(){
	classNameService.reset();
	Object.keys(cf1ClassNames).map( filterName => {
		classNameService.addFilter(filterName, 'cf1-classes', () => {
			return cf1ClassNames[filterName]
		});
	});



	/**
	 * Remove all filters
	 */
	const reset = () => {
		Object.keys(cf1ClassNames).map( filterName => {
			classNameService.removeAllFilters(filterName);
		});
	};

	return reset;
}

