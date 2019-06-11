import processorFactory from './processorFactory';
import { defaultProcessorTypes } from './defaultProcessorTypes';
describe('processorFactory', () => {
	it('should create redirect processor', () => {
		expect(typeof processorFactory('redirect', defaultProcessorTypes)).toBe(
			'object'
		);
	});
	it('should create apiRequest processor', () => {
		expect(
			typeof processorFactory('apiRequest', defaultProcessorTypes)
		).toBe('object');
		expect(processorFactory('apiRequest', defaultProcessorTypes).type).toBe(
			'apiRequest'
		);
	});
});
