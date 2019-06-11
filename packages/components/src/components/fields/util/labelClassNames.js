import classNameService, {
	FILTER_FIELD_LABEL_CLASS_NAME,
} from './classNameService/classNameService';

/**
 * Get the class names for a field label
 * @param {string} fieldType
 * @return {string}
 */
export const labelClassNames = fieldType => {
	return classNameService.applyFilters(
		FILTER_FIELD_LABEL_CLASS_NAME,
		`caldera-field-label caldera-field-label-${fieldType}`
	);
};
