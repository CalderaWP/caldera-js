import {ConditionalState} from './ConditionalState';

describe('ConditionalState get value', () => {

	it('gets value when valid and has value', () => {
		const state = new ConditionalState({
			x: 7
		});
		expect(state.getValue('x')).toEqual(7);
	});

	it('Does not get value when valid field ID but no value', () => {
		const state = new ConditionalState({
			x: null
		});
		expect(state.getValue('x')).toEqual(null);
	});

	it('Does not get value when not valid field ID ', () => {
		const state = new ConditionalState({
			x: null
		});
		expect(state.getValue('y')).toEqual(null);
	});
});

describe('ConditionalState set value', () => {
	it('sets value when valid field id', () => {
		const state = new ConditionalState({
			x: 7
		});
		state.setValue('x', 'five');
		expect(state.getValue('x')).toEqual('five');
	});

	it('Does not change other values', () => {
		const r = 1;
		const z = 'fff';

		const state = new ConditionalState({
			x: 7,
			r,
			z
		});
		state.setValue('x', 'five');
		expect(state.getValue('x')).toEqual('five');
		expect(state.getValue('r')).toEqual(r);
		expect(state.getValue('z')).toEqual(z);
		state.setValue('x', 5);
		expect(state.getValue('x')).toEqual(5);
		expect(state.getValue('r')).toEqual(r);
		expect(state.getValue('z')).toEqual(z);


		state.setValue('z', 'z2');
		expect(state.getValue('x')).toEqual(5);
		expect(state.getValue('r')).toEqual(r);
		expect(state.getValue('z')).toEqual('z2');

	});

});

describe('ConditionalState Hiding fields', () => {
	it('Does not get field value when hidden', () => {
		const state = new ConditionalState({
			x: 7
		});
		state.hideField('x');
		expect(state.getValue('x')).toEqual(null);
	});

	it('Does not set field value when hidden', () => {
		const state = new ConditionalState({
			x: 7
		});
		state.hideField('x');
		state.setValue('x', 9);
		state.showField('x');
		expect(state.getValue('x')).toEqual(9);
	});

	it('Hidden fields are NOT in returned state', () => {
		const state = new ConditionalState({
			x: 7,
			y: 1,
			r: null
		});
		state.hideField('x');
		const currentState = state.getCurrentState();
		expect(currentState.hasOwnProperty('x')).toBe(false);
		expect(currentState.hasOwnProperty('y')).toBe(true);
		expect(currentState.hasOwnProperty('r')).toBe(true);
	});

	it('Can handle being asked to hide an invalid field', () => {
		const state = new ConditionalState({
			x: 7,
			y: 1,
			r: null
		});
		state.hideField('zzz');
		const currentState = state.getCurrentState();
		expect(currentState.hasOwnProperty('x')).toBe(true);
	});

	it('Can handle being asked to show an invalid field', () => {
		const state = new ConditionalState({
			x: 7,
			y: 1,
			r: null
		});
		state.showField('zzz');
		const currentState = state.getCurrentState();
		expect(currentState.hasOwnProperty('x')).toBe(true);
	});

	it('Can reset state', () => {
		const intitialState = {
			x: 'initalX',
			y: 'initalY',
			r: 'initialR'
		};
		const state = new ConditionalState(intitialState);
		const nextState = {
			x: 'nextX',
			y: 'nextY',
		};
		state.setState(nextState);
		const currentState = state.getCurrentState();
		expect(state.getCurrentState()).toEqual({
			x: 'nextX',
			y: 'nextY',
			r: 'initialR'
		});
	});
});

describe('ConditionalState enabling and disabling', () => {
	it('Does not update value when disabled', () => {
		const state = new ConditionalState({
			x: 7
		});
		state.disableField('x');
		state.setValue('x', 99999);
		expect(state.getValue('x')).toEqual(7);
	});

	it('Can get value when disabled.', () => {
		const state = new ConditionalState({
			x: 7
		});
		state.disableField('x');
		expect(state.getValue('x')).toEqual(7);
	});

	it('can edit a field value after enabling', () => {
		const state = new ConditionalState({
			x: 7
		});
		state.disableField('x');
		expect(state.getValue('x')).toEqual(7);
		state.enableField('x');
		state.setValue('x', 11);
		expect(state.getValue('x')).toEqual(11);
	});

	it('Disabled fields are in returned state', () => {
		const state = new ConditionalState({
			x: 7,
			y: 1,
			r: null
		});
		state.disableField('x');
		const currentState = state.getCurrentState();
		expect(currentState.hasOwnProperty('x')).toBe(true);
		expect(currentState.hasOwnProperty('y')).toBe(true);
		expect(currentState.hasOwnProperty('r')).toBe(true);
	});

	it('Can handle being asked to disable an invalid field', () => {
		const state = new ConditionalState({
			x: 7,
			y: 1,
			r: null
		});
		state.disableField('zzz');
		const currentState = state.getCurrentState();
		expect(currentState.hasOwnProperty('x')).toBe(true);
	});

	it('Can handle being asked to enable an invalid field', () => {
		const state = new ConditionalState({
			x: 7,
			y: 1,
			r: null
		});
		state.enableField('zzz');
		const currentState = state.getCurrentState();
		expect(currentState.hasOwnProperty('x')).toBe(true);
	});

	it('Does not reset state of disabled field', () => {
		const intitialState = {
			x: 'initialX',
			y: 'initialY',
			r: 'initialR'
		};
		const state = new ConditionalState(intitialState);
		const nextState = {
			x: 'nextX',
			y: 'nextY',
		};
		state.disableField('x');
		state.setState(nextState);
		expect(state.getCurrentState()).toEqual({
			x: 'initialX',
			y: 'nextY',
			r: 'initialR'
		});
	});
});
