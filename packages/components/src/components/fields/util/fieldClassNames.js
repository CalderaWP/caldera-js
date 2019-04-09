import classNameService, {FILTER_FIELD_CLASS_NAME} from "./classNameService/classNameService";

/**
 * Get the class names for a field
 * @param {string} fieldType
 * @return {string}
 */
export const fieldClassNames = fieldType => {
	return classNameService.applyFilters(
		FILTER_FIELD_CLASS_NAME,
		`caldera-field caldera-field-${fieldType}`
	);
};
