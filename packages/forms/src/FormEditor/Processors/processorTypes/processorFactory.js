import  {defaultProcessorTypes} from './defaultProcessorTypes'
const shortid = require('shortid');

export default function processorFactory (type, options = {}) {
	//put hook here
	const processorTypes = defaultProcessorTypes;
	return {
		...processorTypes.find( p => type === p.type ),
		id: shortid.generate()
	}
};
