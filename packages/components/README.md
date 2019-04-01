# Shared Components Library

* 🌋👀 [Documentation]()
* 🌋🤷 [Need Help?]()
* 🌋🙏 [Express Gratitude](https://paypal.me/calderawp)

## Fields
These are thing wrappers around Gutenberg components.

### Import With webpack
```js
import {
	RemotePost,
	TextAreaField,
	ToggleField,
	RadioField,
	FieldWrapper,
	FieldSet,
	SelectField,
	InputField,
	RichText,
	MagicRichText
} from '@calderajs/components';

```

### Grid Components
🌋👀[Documentation](./src/factory/components/Grid/README.md)

## Factories
🌋👀 [Documentation](./src/factory/)


### Test Fixtures
This package also exports fixtures for testing columns and fields.

##### Field Fixtures
```js
import {factory} from "@calderajs/components";
const {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField,
	toggleField,
    textAreaField,
    autoCompleteField
} = factory;
```

#### Rows and Columns
```js
import {factory} from "@calderajs/components";
const {
	formRowOne,
    	formRowTwo,
    	formRows,
    	notFormRow,
    	notFormRows
} = factory;
```



## Testing

* Run Unit Tests - Jest.
    - `yarn tests`

* Run Storybooks
    - `yarn storybook`

## Other Commands
* Lint code
    - `yarn lint`
* Build Package
    - `yarn package`
    - The output is stored in the `dist` folder.
