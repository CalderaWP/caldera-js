/**
 * Get the class names for a field wrapper
 * @param {string} fieldType
 * @return {string}
 */
export const fieldWrapperClassNames = fieldType => {
	return `caldera-field-wrapper caldera-field-wrapper-${fieldType}`;
};
