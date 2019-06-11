import * as factory from './index';
import { Rows, radioField, collectFieldValues, fieldFactory } from './index';

describe('factory export', () => {
	it('should export factory', () => {
		expect(typeof factory).toBe('object');
	});
	it('should export fixtures ', () => {
		expect(typeof radioField).toBe('object');
	});
	it('should export components ', () => {
		expect(typeof Rows).toBe('function');
	});
	it('should export util fucntion ', () => {
		expect(typeof collectFieldValues).toBe('function');
	});
	it('should export factory ', () => {
		expect(typeof fieldFactory).toBe('function');
	});
});
