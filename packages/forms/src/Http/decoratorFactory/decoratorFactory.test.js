import {
	decorateObjectLiteral,
	decorateObjectLiteralWithMethods
} from './decoratorFactory';

describe('decorateObjectLiteral', () => {
	const values = {
		hats: 10,
		pants: 1
	};

	const object = {
		...values,
		hiRoy: () => {
			return 'Hi Roy';
		}
	};
	it('object method without decoration', () => {
		expect(object.hiRoy()).toEqual('Hi Roy');
	});

	it('object method with decoration', () => {
		const proxy = decorateObjectLiteral(object);
		expect(proxy.hiRoy()).toEqual('Hi Roy');
	});
	it('Get valid props', () => {
		const proxy = decorateObjectLiteral(object);
		expect(proxy.hats).toEqual(values.hats);
		expect(proxy.pants).toEqual(values.pants);
	});

	it('Returns null for invalid props', () => {
		const proxy = decorateObjectLiteral(object);
		expect(proxy.cats).toEqual(null);
		expect(proxy.dogs).toEqual(null);
	});

	it('Sets valid props', () => {
		const proxy = decorateObjectLiteral({
			x: 12
		});
		expect(proxy.x).toEqual(12);
		proxy.x = 222;
		expect(proxy.x).toEqual(222);
	});

	it('Does not set invalid props', () => {
		const proxy = decorateObjectLiteral({
			x: 12
		});
		expect(proxy.x).toEqual(12);
		expect(() => {
			proxy.y = 'Fake stuff';
		}).toThrow();
	});
});

describe('decorateObjectLiteralWithMethods', () => {
	it('accesses props and methods', () => {
		const proxyMethod = jest.fn();
		const proxy = decorateObjectLiteralWithMethods(
			{
				x: 1,
				y: 4
			},
			{ proxyMethod }
		);
		expect(proxy.x).toEqual(1);
		expect(proxy.y).toEqual(4);
		proxy.proxyMethod();
		expect(proxyMethod.mock.calls.length).toBe(1);
	});
});
