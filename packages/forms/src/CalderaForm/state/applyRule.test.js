import{
	applyRule,
	applyRuleToState
} from "./applyRule";
import {ConditionalState} from "./ConditionalState";

describe( 'applyRule', () => {
	let rule = {
		rule: jest.fn(),
	};

	it( 'Calls function in rule prop, passing fieldvalues', () => {
		const fieldValues = {};
		applyRule(rule, fieldValues );
		expect( rule.rule.mock.calls[0][0]).toEqual(fieldValues);
	})
})

describe( 'applyRuleToState', () => {

	function createMockConditionalState(
		fieldValues,
		//initialState, fieldsHidden = [], fieldsDisabled = []
	){
		return  {
			getCurrentState: jest.fn(() => fieldValues ),
			hideField: jest.fn(),
			showField: jest.fn(),
			enableField: jest.fn(),
			disableField: jest.fn()
		};
	}



	const fieldValues = {};


	it( 'Hides field when it should hide', () => {
		const fieldValues = {f1:1};
		const mockConditionalState = createMockConditionalState(fieldValues);
		const rule = {
			type: 'hide',
			fields: ['f1' ],
			rule: jest.fn(() => true )

		}
		applyRuleToState(rule,mockConditionalState);
		expect( mockConditionalState.hideField.mock.calls.length ).toBe(1);
		expect( mockConditionalState.showField.mock.calls.length ).toBe(0);
	});

	it( 'Shows field when it should not hide', () => {
		const fieldValues = {f1:1};
		const mockConditionalState = createMockConditionalState(fieldValues);
		const rule = {
			type: 'hide',
			fields: ['f1' ],
			rule: jest.fn(() => false )

		};
		applyRuleToState(rule,mockConditionalState);
		expect( mockConditionalState.hideField.mock.calls.length ).toBe(0);
		expect( mockConditionalState.showField.mock.calls.length ).toBe(1);
	});

	it( 'Shows field when it should show', () => {
		const fieldValues = {f1:1};
		const mockConditionalState = createMockConditionalState(fieldValues);
		const rule = {
			type: 'show',
			fields: ['f1' ],
			rule: jest.fn(() => true )

		};
		applyRuleToState(rule,mockConditionalState);
		expect( mockConditionalState.hideField.mock.calls.length ).toBe(0);
		expect( mockConditionalState.showField.mock.calls.length ).toBe(1);
	});

	it( 'Hides field when it should not show', () => {
		const fieldValues = {f1:1};
		const mockConditionalState = createMockConditionalState(fieldValues);
		const rule = {
			type: 'show',
			fields: ['f1' ],
			rule: jest.fn(() => false )

		};
		applyRuleToState(rule,mockConditionalState);
		expect( mockConditionalState.hideField.mock.calls.length ).toBe(1);
		expect( mockConditionalState.showField.mock.calls.length ).toBe(0);
	});

	it( 'Enables field when it should enabled', () => {
		const fieldValues = {f1:1};
		const mockConditionalState = createMockConditionalState(fieldValues);
		const rule = {
			type: 'enable',
			fields: ['f1' ],
			rule: jest.fn(() => true )

		};
		applyRuleToState(rule,mockConditionalState);
		expect( mockConditionalState.enableField.mock.calls.length ).toBe(1);
		expect( mockConditionalState.disableField.mock.calls.length ).toBe(0);
	});

	it( 'Disables field when it should not enable', () => {
		const fieldValues = {f1:1};
		const mockConditionalState = createMockConditionalState(fieldValues);
		const rule = {
			type: 'enable',
			fields: ['f1' ],
			rule: jest.fn(() => false )

		};
		applyRuleToState(rule,mockConditionalState);
		expect( mockConditionalState.enableField.mock.calls.length ).toBe(0);
		expect( mockConditionalState.disableField.mock.calls.length ).toBe(1);
	});

	it( 'Disables field when it should disable', () => {
		const fieldValues = {f1:1};
		const mockConditionalState = createMockConditionalState(fieldValues);
		const rule = {
			type: 'disable',
			fields: ['f1' ],
			rule: jest.fn(() => true )

		};
		applyRuleToState(rule,mockConditionalState);
		expect( mockConditionalState.enableField.mock.calls.length ).toBe(0);
		expect( mockConditionalState.disableField.mock.calls.length ).toBe(1);
	});

	it( 'Enables field when it should  not disable', () => {
		const fieldValues = {f1:1};
		const mockConditionalState = createMockConditionalState(fieldValues);
		const rule = {
			type: 'disable',
			fields: ['f1' ],
			rule: jest.fn(() => false )

		};
		applyRuleToState(rule,mockConditionalState);
		expect( mockConditionalState.enableField.mock.calls.length ).toBe(1);
		expect( mockConditionalState.disableField.mock.calls.length ).toBe(0);
	});
});

describe( 'Applying rules to conditional state', ()=> {
	it( 'Resulting state hides multiple fields', () => {
		const intitialState = {
			x:'initialX',
			y: 'initialY',
			r: 'initialR'
		};
		const state = new ConditionalState(intitialState);
		const rule = {
			type: 'hide',
			fields: [ 'x', 'y'],
			rule: () => true,
		};
		const nextState = applyRuleToState(rule,state);
		expect( nextState.getCurrentState()).toEqual({
			r: 'initialR'
		});
		expect( nextState.isFieldHidden('x')).toBe(true);
		expect( nextState.isFieldHidden('y')).toBe(true);
		expect( nextState.isFieldHidden('r')).toBe(false);
	});


	it( 'Resulting state disables multiple fields', () => {
		const intitialState = {
			x:'initialX',
			y: 'initialY',
			r: 'initialR'
		};
		const state = new ConditionalState(intitialState);
		const rule = {
			type: 'disable',
			fields: [ 'x', 'y'],
			rule: () => true,
		};
		const nextState = applyRuleToState(rule,state);
		expect( nextState.getCurrentState()).toEqual(intitialState);
		expect( nextState.isFieldDisabled('x')).toBe(true);
		expect( nextState.isFieldDisabled('y')).toBe(true);
		expect( nextState.isFieldDisabled('r')).toBe(false);
	});
});

