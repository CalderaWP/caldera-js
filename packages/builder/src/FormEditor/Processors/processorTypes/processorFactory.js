const shortid = require("shortid");

export default function processorFactory(type, processorTypes = {}) {
	return {
		...processorTypes.find(p => type === p.type),
		id: shortid.generate(),
	};
}
