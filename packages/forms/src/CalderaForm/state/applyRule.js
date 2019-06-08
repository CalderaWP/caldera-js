import { ConditionalState } from "./ConditionalState";

export const applyRule = (rule, fieldValues) => {
	return rule.rule(fieldValues);
};

/**
 *
 * @param {{
 *     type: String,
 *     fields: Array
 * }} rule
 * @param {ConditionalState} conditionalState
 *
 * @return {ConditionalState}
 */
export const applyRuleToState = (rule, conditionalState) => {
	const { type, fields } = rule;
	const passed = applyRule(rule, conditionalState.getCurrentState());
	switch (type) {
		case "hide":
			fields.forEach(field => {
				if (passed) {
					conditionalState.hideField(field);
				} else {
					conditionalState.showField(field);
				}
			});
			break;
		case "show":
			fields.forEach(field => {
				if (!passed) {
					conditionalState.hideField(field);
				} else {
					conditionalState.showField(field);
				}
			});
			break;
		case "enable":
			fields.forEach(field => {
				if (passed) {
					conditionalState.enableField(field);
				} else {
					conditionalState.disableField(field);
				}
			});
			break;
		case "disable":
			fields.forEach(field => {
				if (!passed) {
					conditionalState.enableField(field);
				} else {
					conditionalState.disableField(field);
				}
			});
			break;
	}
	return conditionalState;
};
