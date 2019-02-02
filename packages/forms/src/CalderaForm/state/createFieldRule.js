/**
 * Create a conditional rule
 *
 * @param {string} test
 * @param {string} fieldId
 * @param {string|int|array} testValue
 * @return {function(*=): boolean}
 */
export const createFieldRule = (test,fieldId,testValue) => {
	const findFieldValue= (fieldId,fieldValues) => {
		return fieldValues.hasOwnProperty(fieldId)
			?fieldValues[fieldId]
			: null;
	};

	switch(test){
		case 'is':
			return (fieldValues) => {
				const value = findFieldValue(fieldId,fieldValues);
				return value == testValue;
			};
		case 'not':
			return (fieldValues) => {
				const value = findFieldValue(fieldId,fieldValues);
				return value !== testValue;
			}

	};
}
