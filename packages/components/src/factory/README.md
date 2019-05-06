# Caldera Component Factory

This package creates forms, form elements and layout elements via objects describing them, that can be encoded as JSON, say what a REST API responds with.



##  Factories


### Import With webpack
```js
import{fieldFactory, fieldAreaFactory} from "@calderajs/components";

import { collectFieldValues } from "@calderajs/components";

```

### Field Factory
Creates a field from an object. Does not create the area around the field -- outer HTML wrapping element, section for error messages, etc.

```js
import {fieldFactory} from '@calderajs/components'
const toggleField = {
	fieldType: 'toggle',
	label: 'Enable',
	fieldId: 'toggleFieldLabel',
	checked:true,
};
return (
    <Fragment>
        {fieldFactory(
            toggleField,
            (checked) => {
               console.log(checked)
            }
        )}
    </Fragment>
)
```
#### Example Fields
```js

const checkboxFieldset = {
	fieldType: 'checkboxes',
	label: 'Checkbox Field Set Label',
	fieldId: 'checkboxFieldSetLabel',
	description: 'Checkbox field set description',
	required: true,
	options: [
		{
			value: 1,
			label: 'One',
			id: 'opt-1'
		},
		{
			value: 2,
			label: 'Two',
			id: 'opt-2',
			description: 'The Second Option',
			attributes: {
				checked: true
			}
		},
		{
			value: 3,
			label: 'Three',
			id: 'opt-3'
		}
	]
};

const selectField = {
	fieldType: 'select',
	value: 1,
	label: 'Select Field Label',
	fieldId: 'selectFieldId',
	description: 'Select field description',
	required: true,
	attributes: {
		multiple: false
	},
	options: [
		{ value: 0, label: 'Zero' },
		{ value: 1, label: 'One' },
		{ value: 2, label: 'Two' }
	]
};

const radioField = {
	fieldType: 'radio',
	value: 1,
	label: 'Radio Field Label',
	fieldId: 'radioFieldLabel',
	description: 'Radio field description',
	required: true,
	attributes: {
		multiple: false
	},
	options: [
		{ value: 0, label: 'Zero' },
		{ value: 1, label: 'One' },
		{ value: 2, label: 'Two' }
	]
};

const checkboxField = {
	fieldType: 'checkbox',
	label: 'Checkbox Labe',
	fieldId: 'checkboxFieldLabel',
	description: 'Checkbox field description',
	required: true,
	attributes: {
		checked: true
	}
};

const toggleField = {
	fieldType: 'toggle',
	label: 'Toggle Label',
	fieldId: 'toggleFieldLabel',
	description: 'Toggle field description',
	required: true,
	checked:true,
};

const numberField = {
	fieldType: 'number',
	value: 3,
	label: 'Number Field Label',
	fieldId: 'numberFieldId',
	description: 'Number field description',
	required: true,
	attributes: {
		min: 1,
		max: 10
	}
};

const textField = {
	fieldType: 'text',
	value: 'roy',
	label: 'First Name',
	fieldId: 'firstName',
	description: 'your first name',
	required: true
};

const emailField = {
	fieldType: 'email',
	value: 'emai@email.com',
	label: 'Email Field Label',
	fieldId: 'emailFieldId',
	description: 'Email field description',
	required: true,
	attributes: {
		multiple: true
	}
};

const textAreaField = {
	fieldType: 'textarea',
	value: 'The content of text area',
	label: 'Your message',
	fieldId: 'textArea1',
	description: 'your first name',
	required: true,
	attributes: {
		maxlength: 500, minlength: 10,cols:8,rows:5
	}
};

const autoCompleteField = {
	fieldType: 'autocomplete',
	value: ['One', 'Three'],
	label: 'Options',
	fieldId: 'autoComplete1',
	description: 'Help text',
	options: [ 'One', 'Two', 'Three' ]
}

const submitButton = {
    fieldId: 'clickButton',
    label: 'Click Me',
    fieldType: 'submit',
    
};
```






### Field Area Factory
This creates the complete HTML area around a field. `<wrapper><label/><input /><messages/></wrapper>`

```js

const nameField = {
    fieldType: 'input',
    html5Type: 'text',
    optionValue: 'Infinite Vague',
    label: 'Name',
    fieldId: 'fromName',
    required: true,
};
return (
    <Fragment>
        {fieldAreaFactory(
            nameField,
            (name) => {
               console.log(name)
            }
        )}
    </Fragment>
)
```

### Magic Tag Autocomplete Rich Text
```js
const magicField = {
    fieldType: 'magic-richtext',
    optionValue: 'Infinite Vague',
    label: 'Message',
    fieldId: 'message',
    fieldCompletes: {
        { id: 1, optionValue: '%field1%'}	
    },
    otherCompletes: {
        { id: 1, optionValue: '%field1%'}	
    }
};
return (
    <Fragment>
        {fieldAreaFactory(
            magicField,
            (values) => {
               console.log(values)
            }
        )}
    </Fragment>
)
```

## Components
These are components that the factories use, that may be useful on their own.

### Import With webpack
```js
import{factory} from "@calderajs/components";
const { 
	Rows,
	Row, 
	Field,
	Fields,
	FieldArea
} = factory;
```
### `Field`
Let's you use `fieldFactory()` as a React component.

### `Fields`
Iterates through a collection of fields, passing each child to `Field`.

#### `FieldArea`

```js
const field = {
    fieldId: '',
    type: 'input',
    html5type: 'text',
    required: false,
    label: '',
    description: ''
};

<FieldArea
    field={field}
    onChange={onChange}
    onBlur={onBlur}
    fieldErrors={fieldErrors}
    fieldsTouch={fieldsTouched}
/>
```

#### `FieldArea` Render Prop

```js
<FieldArea
    render={(
    	<input />
    )}
   
/>
```





