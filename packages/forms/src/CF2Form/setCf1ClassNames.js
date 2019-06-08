import {
	classNameService,
	cf1ClassNames,
	FILTER_FORM_COLUMN_PREFIX,
	FILTER_FORM_COLUMN_CLASS,
	FILTER_FORM_ELEMENT_CLASS,
} from "@calderajs/components";

const IDENTIFIER = "cf1-classes";

/**
 * Sets all form classes to match Caldera Forms 1.x
 *
 * NOTE: Resets class service first.
 */
export default function setCf1ClassNames() {
	classNameService.reset();
	Object.keys(cf1ClassNames).map(filterName => {
		classNameService.addFilter(filterName, IDENTIFIER, () => {
			return cf1ClassNames[filterName];
		});
	});

	classNameService.addFilter(
		FILTER_FORM_COLUMN_PREFIX,
		IDENTIFIER,
		(prefix, columnId) => {
			return "col-sm-";
		}
	);

	/**
	 * Remove all filters
	 */
	const reset = () => {
		Object.keys(cf1ClassNames).map(filterName => {
			classNameService.removeAllFilters(filterName);
		});
	};

	return reset;
}
