/**
 * Convert fractions to width classes
 *
 * @param fraction
 * @param defaultWidth
 * @return {number}
 */
export const fractionToWidth = (fraction, defaultWidth = 1 ) => {
	const fractionMap = {
		1: 12,
		'11/12': 11,
		'10/12': 10,
		'4/8': 10,
		'9/12': 9,
		'2/3': 9,
		'8/12': 8,
		'3/4': 8,
		'7/12': 7,
		'6/12': 6,
		'1/2': 6,
		'2/4': 6,
		'5/12': 5,
		'4/12': 4,
		'1/4': 4,
		'3/12': 3,
		'1/3': 3,
		'2/12': 2,
		'1/12': 1,
	};
	return fractionMap.hasOwnProperty(fraction) ? fractionMap[fraction] : defaultWidth;
}

