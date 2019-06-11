import classNameService, {
	FILTER_FIELD_WRAPPER_CLASS_NAME,
} from './classNameService/classNameService';

/**
 * Get the class names for a field wrapper
 * @param {string} fieldType
 * @return {string}
 */
export const fieldWrapperClassNames = fieldType => {
	return classNameService.applyFilters(
		FILTER_FIELD_WRAPPER_CLASS_NAME,
		`caldera-field-wrapper caldera-field-wrapper-${fieldType}`
	);
};
