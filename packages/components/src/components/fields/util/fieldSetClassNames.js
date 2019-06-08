import classNameService, {
	FILTER_FIELD_SET_CLASS_NAME,
} from "./classNameService/classNameService";

/**
 * Get the class names for a fieldset
 * @param {string} fieldType
 * @return {string}
 */
export const fieldSetClassNames = fieldType => {
	return classNameService.applyFilters(
		FILTER_FIELD_SET_CLASS_NAME,
		`caldera-fieldset caldera-fieldset-${fieldType}`
	);
};
