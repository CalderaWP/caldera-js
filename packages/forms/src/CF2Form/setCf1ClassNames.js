import {
	classNameService,
	cf1ClassNames,
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
	const reset = () => {
		Object.keys(cf1ClassNames).map( filterName => {
			classNameService.removeAllFilters(filterName);
		});
	};

	return reset;
}

