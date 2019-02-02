import  processorFactory from './processorFactory'
describe('processorFactory', () => {
	it('should create redirect processor', () => {
		expect( typeof processorFactory('redirect')).toBe('object');
	});
	it('should create apiRequest processor', () => {
		expect( typeof processorFactory('apiRequest')).toBe('object');
		expect(  processorFactory('apiRequest').type).toBe('apiRequest');
	});
});
