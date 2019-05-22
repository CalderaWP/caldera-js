

const getMultiSelectFieldValue = (fieldId) => {


};

const setMultiSelectFieldValue = (fieldId) => {

};



/**
 * Describes the state of a form or other collection of fields where some fields may be hidden or disabled.
 *
 * The method getCurrentState() provides the current values of all VISIBLE fields.
 * 	- A hidden field's value can NOT be accessed or updated.
 * 	- A disabled field's value can NOT be update. It can be accessed.
 */
export class ConditionalState {

	constructor(initialState, fieldsHidden = [], fieldsDisabled = []) {

		this.allowedFields = Object.keys(initialState);
		this.actualState = initialState;
		this.fieldsHidden = fieldsHidden;
		this.fieldsDisabled = fieldsDisabled;

	}

	/**
	 * The values of all visible fields
	 */
	getCurrentState = () => {
		const state = {}; //Must return a new object each time.
		this.allowedFields.forEach(fieldId => {
			if (!this.isFieldHidden(fieldId)) {
				state[fieldId] = this.getValue(fieldId);
			}
		});
		return state;
	};

	/**
	 * Reset state
	 *
	 * @param newState
	 */
	setState = (newState) => {
		Object.keys(newState).forEach(stateKey => {
			if (
				this.isValidField(stateKey)
				&& !this.isFieldDisabled(stateKey)
			) {
				this.actualState[stateKey] = newState[stateKey];
			}
		});
		return this.getCurrentState();
	};

	/**
	 * Get the value of a visible field
	 *
	 * @param {string} fieldId
	 * @return {*}
	 */
	getValue = (fieldId) => {
		if (
			this.isValidField(fieldId)
			&& ! this.isFieldHidden(fieldId)
			&& this.actualState.hasOwnProperty(fieldId)) {
			return this.actualState[fieldId];
		}
		return null;
	};



	/**
	 * Set the value of a visible and enabled field
	 *
	 * @param {string} fieldId
	 *
	 * @param value
	 */
	setValue = (fieldId, value) => {
		if (this.isValidField(fieldId) && !this.isFieldDisabled(fieldId)) {
			this.actualState[fieldId] = value;
		}
		return this.getCurrentState();
	};

	/**
	 * Does this fieldId represent the ID of a field managed by this collection?
	 *
	 * @param {string} fieldId
	 * @return {boolean}
	 */
	isValidField = (fieldId) => {
		return this.allowedFields.includes(fieldId);
	};

	/**
	 * Hide a field
	 *
	 * @param {string} fieldId
	 */
	hideField = (fieldId) => {
		if (this.isValidField(fieldId)) {
			this.fieldsHidden.push(fieldId);
		}
		return this.getCurrentState();
	};

	/**
	 * Show a field
	 *
	 * @param {string} fieldId
	 */
	showField = (fieldId) => {
		if (this.isValidField(fieldId)) {
			this.fieldsHidden = this.fieldsHidden.filter(hiddenFieldId => hiddenFieldId !== fieldId);
		}
		return this.getCurrentState();

	};

	/**
	 * Does this fieldId represent the ID of a field that is currently hidden?
	 *
	 * @param fieldId
	 * @return {boolean}
	 */
	isFieldHidden = (fieldId) => {
		return this.isValidField(fieldId)&&this.fieldsHidden.includes(fieldId);
	};

	/**
	 * Disable a field
	 *
	 * @param {string} fieldId
	 */
	disableField = (fieldId) => {
		if (this.isValidField(fieldId)) {
			this.fieldsDisabled.push(fieldId);
		}
		return this.getCurrentState();
	};

	/**
	 * Enable a field
	 *
	 * @param {string} fieldId
	 */
	enableField = (fieldId) => {
		if (this.isValidField(fieldId)) {
			this.fieldsDisabled = this.fieldsDisabled.filter(disabledFieldId => disabledFieldId !== fieldId);
		}
		return this.getCurrentState();

	};

	/**
	 * Does this fieldId represent the ID of a field that is currently disabled?
	 *
	 * @param fieldId
	 * @return {boolean}
	 */
	isFieldDisabled = (fieldId) => {
		return this.isValidField(fieldId)&&this.fieldsDisabled.includes(fieldId);
	};

}
