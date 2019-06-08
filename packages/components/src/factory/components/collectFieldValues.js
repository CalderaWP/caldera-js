/**
 * Get the values of all config fields
 * @param fields
 */
export const collectFieldValues = fields => {
	const values = {};
	fields.forEach(field => {
		if ("object" === typeof field) {
			values[field.fieldId] = field.value ? field.value : null;
		}
	});
	return values;
};
