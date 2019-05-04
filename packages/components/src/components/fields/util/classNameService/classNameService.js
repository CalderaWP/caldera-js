import {createHooks} from '@wordpress/hooks';
import {fractionToWidth} from "./fractionToWidth";

/**
 * WordPress hooks instance to provide extensible naming for classes used in forms
 *
 *
 * @type {Object}
 */
let classNameService = createHooks();

export const CLASS_NAME_HOOKS = 'classNameHooks';

export const FILTER_FIELD_WRAPPER_CLASS_NAME = 'classNameHooks_fieldWrapperClassName';
export const FILTER_FIELD_CLASS_NAME = 'classNameHooks_fieldClassName';
export const FILTER_FIELD_LABEL_CLASS_NAME = 'classNameHooks_fieldLabelClassName';
export const FILTER_FIELD_SET_CLASS_NAME = 'classNameHooks_fieldSetClassName';
export const FILTER_FORM_ELEMENT_CLASS = 'classNameHooksFormClass';
export const FILTER_FORM_WRAPPER_CLASS = 'classNameHooksgridClass';
export const FILTER_FORM_ROW_CLASS = 'classNameHooksRowClass';
export const FILTER_FORM_COLUMN_CLASS = 'classNameHooksColumnsClass';
export const FILTER_FORM_COLUMN_PREFIX = 'classNameHooksColumnPrefix';

export const cf1ClassNames = {
	[FILTER_FIELD_CLASS_NAME]: 'field-set',
	[FILTER_FIELD_SET_CLASS_NAME]: 'form-control',
	[FILTER_FIELD_WRAPPER_CLASS_NAME]: 'form-group',
	[FILTER_FIELD_LABEL_CLASS_NAME]: 'control-label',
	[FILTER_FORM_WRAPPER_CLASS]: 'caldera-grid',
	[FILTER_FORM_ELEMENT_CLASS]: 'caldera_forms_form',
	[FILTER_FORM_ROW_CLASS]: 'row',
	[FILTER_FORM_COLUMN_CLASS]: '',

};

/**
 * Get the class name for the element surrounding the form element
 *
 * @param formId
 * @return {*}
 */
classNameService.getFormWrapperClassNames = formId => {
	return classNameService.applyFilters(FILTER_FORM_WRAPPER_CLASS, `caldera`);
};

/**
 * Get class name for the form element
 *
 * @param formId
 * @return {*|void}
 */
classNameService.getFormElementClassNames = formId => {
	return classNameService.applyFilters(FILTER_FORM_ELEMENT_CLASS, `${formId} caldera-form`);
};

/**
 * Get class name for row
 *
 * @param rowId
 * @return {*|void}
 */
classNameService.getFormRowClassNames = (rowId) => {
	return classNameService.applyFilters(FILTER_FORM_ROW_CLASS, `caldera-row`);
};

/**
 * Get class name for column
 * @return {*|void}
 */
classNameService.getFormColumnClassPrefix = (columnId) => {
	return classNameService.applyFilters(FILTER_FORM_COLUMN_PREFIX, 'width-',columnId );
};

/**
 * Get class name for column
 * @param columnId
 * @param width
 * @return {*|void}
 */
classNameService.getFormColumnClassNames = (columnId, width) => {
	const className = classNameService.applyFilters(FILTER_FORM_COLUMN_CLASS, 'caldera-column');
	const prefix = classNameService.getFormColumnClassPrefix(columnId);
	return `${className} ${prefix}${fractionToWidth( width )}`;
};

/**
 * Remove all filters added with this service
 */
classNameService.reset = () => {
	Object.keys(classNameService.filters).map( filter => {
		if( '__current' !== filter ){
			classNameService.removeAllFilters(filter);
		}
	});
};


export default classNameService;
