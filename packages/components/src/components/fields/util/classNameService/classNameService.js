import {createHooks} from '@wordpress/hooks';

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
export const FILTER_FORM_GRID_CLASS = 'classNameHooksgridClass';
export const FILTER_FORM_ROW_CLASS = 'classNameHooksRowClass';
export const FILTER_FORM_COLUMN_CLASS = 'classNameHooksColumnsClass';

export const cf1ClassNames = {
	[FILTER_FIELD_CLASS_NAME]: 'field-set',
	[FILTER_FIELD_SET_CLASS_NAME]: 'form-control',
	[FILTER_FIELD_WRAPPER_CLASS_NAME]: 'form-group',
	[FILTER_FIELD_LABEL_CLASS_NAME]: 'control-label',
};




export default classNameService;
