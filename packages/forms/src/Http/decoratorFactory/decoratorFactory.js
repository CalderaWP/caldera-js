/**
 * Add safe property get/set to objects.
 *
 * @param {*} decoratedObject
 * //http://www.decoretteshop.com/
 *
 * @return {Proxy}
 */
export const decorateObjectLiteral = decoratedObject => {
	const handler = {
		get(obj, prop) {
			return decoratedObject.hasOwnProperty(prop)
				? decoratedObject[prop]
				: null;
		},
		set(obj, prop, value) {
			if (decoratedObject.hasOwnProperty(prop)) {
				decoratedObject[prop] = value;
				return true;
			}
			return false;
		},
	};
	return new Proxy(decoratedObject, handler);
};

/**
 * Create proxy with property getters, setters and methods.
 *
 * @param {*} decoratedObject
 * @param {*} methods
 *
 * @return {Proxy}
 */
export const decorateObjectLiteralWithMethods = (decoratedObject, methods) => {
	return decorateObjectLiteral({
		...decoratedObject,
		...methods,
	});
};
