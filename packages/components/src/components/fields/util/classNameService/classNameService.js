import { createHooks } from '@wordpress/hooks';
let classNameHooks = createHooks();

export const CLASS_NAME_HOOKS = 'classNameHooks';

export const FILTER_FIELD_WRAPPER_CLASS_NAME = 'classNameHooks.fieldWrapperClassName';
export const FILTER_FIELD_CLASS_NAME = 'classNameHooks.fieldClassName';
export const FILTER_FIELD_LABEL_CLASS_NAME = 'classNameHooks.fieldLabelClassName';
export const FILTER_FIELD_SET_CLASS_NAME = 'classNameHooks.fieldSetClassName';

export const cf1ClassNames = {
	FILTER_FIELD_CLASS_NAME: 'field-set',
	FILTER_FIELD_SET_CLASS_NAME: 'form-control',
	FILTER_FIELD_WRAPPER_CLASS_NAME: 'form-group',
	FILTER_FIELD_LABEL_CLASS_NAME: 'control-label'
};


export default classNameHooks;
