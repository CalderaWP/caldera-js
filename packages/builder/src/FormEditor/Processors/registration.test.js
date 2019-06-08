import { registerProcessorType, unregisterProcessorType } from "./registration";
import { processorsCollection } from "./processors.fixtures";
describe("registerProcessorType", () => {
	let registry;
	beforeEach(() => {
		registry = [];
	});
	const processorType = {
		type: "apiRequest",
	};
	it("can add a valid type", () => {
		const update = registerProcessorType(processorType, registry);
		expect(update.length).toBe(1);
	});

	it("can handle a non-valid type", () => {
		const update = registerProcessorType({ foo: "abt" }, registry);
		expect(update.length).toBe(0);
	});
});

describe("unregisterProcessorType", () => {
	let registry;
	beforeEach(() => {
		registry = [];
	});
	const testType = "testType";
	const processorType = {
		type: testType,
	};
	it("can remove a valid type", () => {
		registry = registerProcessorType({ type: "other" }, registry);
		registry = registerProcessorType(processorType, registry);
		registry = unregisterProcessorType(testType, registry);
		expect(registry.length).toBe(1);
	});

	it("can handle a non-valid type", () => {
		registry = registerProcessorType({ type: "other" }, registry);
		registry = registerProcessorType(processorType, registry);
		registry = unregisterProcessorType("11111asdasdffds", registry);
		expect(registry.length).toBe(2);
	});
});
