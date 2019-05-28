/**
 * Fields
 */
export {
	InputField,
	SelectField,
	RadioField,
	CheckboxField,
	TextAreaField,
	SubmitButton,
	HiddenField,
	FieldWrapper,
	FieldWrapperOuter,
	FieldSet,
} from './components/fields/';

/**
 * Grid Components
 */
export {Field} from './factory/components/Field';
export {FieldArea} from './factory/components/FieldArea';
export {Fields} from './factory/components/Fields';
export {Row} from './factory/components/Grid/Row';
export {Rows} from './factory/components/Grid/Rows';
export {Column} from './factory/components/Grid/Column';

/**
 * UI Elements
 */
export {Message} from './components/Messages/Message';
export {messageObjectFactory} from './components/Messages/messageObjectFactory';
export {RemotePost} from './components/elements/RemotePost/RemotePost';
export { LazyIFrame } from './components/elements/LazyIFrame/LazyIFrame';
export {CalderaNotice} from './components/elements/CalderaNotice/CalderaNotice'
/**
 * Field class util functions
 */
export {fieldClassNames} from './components/fields/util/fieldClassNames';
export {
	fieldSetClassNames
} from './components/fields/util/fieldSetClassNames';
export {
	fieldWrapperClassNames
} from './components/fields/util/fieldWrapperClassNames';


/**
 * Utility functions
 */
export {
	addOrRemoveFromArray,
	toBoolean,
	isValidHtml5type
} from './components/fields/util';
export {collectFieldValues} from './factory/components/collectFieldValues';

/**
 * Field Factories
 */
export {fieldFactory} from './factory/factories/fieldFactory';
export {fieldAreaFactory} from './factory/factories/fieldAreaFactory';

/**
 * Test fixtures
 */
export {
	autoCompleteField,
	toggleField,
	textAreaField,
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField
} from './factory/fields.fixtures.js';

export {
	formRowOne,
	formRowTwo,
	formRows,
	notFormRow,
	notFormRows
} from './factory/columns.fixtures.js';

/**
 * Services
 */
export classNameService, {
	cf1ClassNames,
	CLASS_NAME_HOOKS,
	FILTER_FIELD_CLASS_NAME,
	FILTER_FIELD_LABEL_CLASS_NAME,
	FILTER_FIELD_SET_CLASS_NAME,
	FILTER_FIELD_WRAPPER_CLASS_NAME,
	FILTER_FORM_ELEMENT_CLASS,
	FILTER_FORM_WRAPPER_CLASS,
	FILTER_FORM_COLUMN_CLASS,
	FILTER_FORM_COLUMN_PREFIX
} from './components/fields/util/classNameService/classNameService'
