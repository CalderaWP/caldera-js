import { parseAttributes } from "./parseAttributes";
import { fieldClassNames } from "./fieldClassNames";
import { labelClassNames } from "./labelClassNames";
import { fieldSetClassNames } from "./fieldSetClassNames";
import { fieldWrapperClassNames } from "./fieldWrapperClassNames";
/**
 * Checks if a given input type is an acceptable HTML5 input type
 *
 * @param {String} type
 * @returns {boolean}
 */
const isValidHtml5type = type => {
	return [
		"text",
		"email",
		"number",
		"date",
		"datetime",
		"password",
		"submit",
		"reset",
		"checkbox",
		"hidden",
	].includes(type);
};

/**
 * Remove a value from an array if present, if not present, add it
 *
 * @param {String|number} value Value to add or remove
 * @param {Array} array Array to mutate
 * @return {*}
 */
const addOrRemoveFromArray = (value, array) => {
	const index = array.indexOf(value);
	if (index !== -1) {
		array.splice(index, 1);
	} else {
		array.push(value);
	}
	return array;
};

/**
 * Cast a boolean or boolean like to a true or false
 *
 * @param {Mixed} value Value to cast
 * @return {boolean}
 */
const toBoolean = value => {
	switch (value) {
		case true:
		case "true":
		case 1:
		case "1":
		case "on":
		case "yes":
			return true;
		default:
			return false;
	}
};

export {
	parseAttributes,
	fieldClassNames,
	labelClassNames,
	addOrRemoveFromArray,
	toBoolean,
	isValidHtml5type,
	fieldSetClassNames,
	fieldWrapperClassNames,
};
