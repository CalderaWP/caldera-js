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
const toggleField = {
	fieldType: 'toggle',
	label: 'Enable',
	fieldId: 'toggleFieldLabel',
	checked:true,
};
return (
    <Fragment>
        {fieldAreaFactory(
            toggleField,
            (checked) => {
               console.log(checked)
            }
        )}
    </Fragment>
)
```


### Field Area Factory
This creates the complete HTML area around a field. `<wrapper><label/><input /><messages/></wrapper>`

```js

const nameField = {
    fieldType: 'input',
    html5Type: 'text',
    value: 'Infinite Vague',
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
    value: 'Infinite Vague',
    label: 'Message',
    fieldId: 'message',
    fieldCompletes: {
        { id: 1, value: '%field1%'}	
    },
    otherCompletes: {
        { id: 1, value: '%field1%'}	
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





