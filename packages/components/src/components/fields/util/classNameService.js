import { createHooks } from '@wordpress/hooks';
let classNameHooks = createHooks();

export const CLASS_NAME_HOOKS = 'classNameHooks';

export const FILTER_FIELD_WRAPPER_CLASS_NAME = 'classNameHooks.fieldWrapperClassName';
export const FILTER_FIELD_CLASS_NAME = 'classNameHooks.fieldClassName';
export const FILTER_FIELD_LABEL_CLASS_NAME = 'classNameHooks.fieldLabelClassName';
export const FILTER_FIELD_SET_CLASS_NAME = 'classNameHooks.fieldSetClassName';

export default classNameHooks;
