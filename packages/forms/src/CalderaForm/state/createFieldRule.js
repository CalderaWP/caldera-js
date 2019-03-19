/**
 * Create a conditional rule
 *
 * @param {string} testType
 * @param {string} fieldId
 * @param {string|int|array} testValue
 * @return {function(*=): boolean}
 */
export const createFieldRule = (testType,fieldId,testValue) => {
	const findFieldValue= (fieldId,fieldValues) => {
		return fieldValues.hasOwnProperty(fieldId)
			?fieldValues[fieldId]
			: null;
	};

	switch(testType){
		case 'is':
		case '==':
			return (fieldValues) => {
				const value = findFieldValue(fieldId,fieldValues);
				return value == testValue;
			};
		case '====':
			return (fieldValues) => {
				const value = findFieldValue(fieldId,fieldValues);
				return value === testValue;
			};
		case 'isnot':
		case 'not':
		case '!=':
			return (fieldValues) => {
				const value = findFieldValue(fieldId,fieldValues);
				return value != testValue;
			};
		case '!==':
			return (fieldValues) => {
				const value = findFieldValue(fieldId,fieldValues);
				return value !== testValue;
			};
		case '>':
		case 'greater':
			return (fieldValues) => {
				const value = findFieldValue(fieldId,fieldValues);
				return value > testValue;
			};
		case '<':
		case 'smaller':
			return (fieldValues) => {
				const value = findFieldValue(fieldId,fieldValues);
				return value < testValue;
			};

		case 'startswith':
			return (fieldValues) => {
				const value = findFieldValue(fieldId,fieldValues);
				if( 'object' === typeof  value ){
					return false;
				}
				return value.toLowerCase().substr(0, testValue.toLowerCase().length ) === testValue.toLowerCase();
			};

		case 'endswith':

			return (fieldValues) => {
				const value = findFieldValue(fieldId, fieldValues);
				if ('object' === typeof  value) {
					return false;
				}

				return value.toLowerCase().substr(testValue.toLowerCase().length - testValue.toLowerCase().length) === testValue.toLowerCase();
			};
		case 'contains':
			return (fieldValues) => {
				const value = findFieldValue(fieldId, fieldValues);
				if ('object' === typeof  value) {
					return false;
				}

				return values.toLowerCase().indexOf( testValue ) >= 0;

			};

		default:
			return () => false;

	};
}
