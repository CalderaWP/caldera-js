# Forms For Caldera
This is a React component library for forms. It is designed to be used in Caldera UIs, including Caldera Forms.

## Install
`yarn add @calderajs/forms`

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
    
    
## Usage

### `<CalderaForm />`
>This component is used for all forms in the Caldera Framework. The Caldera Forms front-end (Caldera Forms 2.0+) and all UI sections.

This component uses [Formik](https://jaredpalmer.com/formik/) for managing state and validation. The layout uses the `CalderaGrid` component of this package and uses the fieldAreaFactory from the `calderawp/@factory` package.
#### `<HorizontalForm`>
🌋👀[Documentation](./src/HorizontalForm/README.md)
#### Form Editor 
🌋👀[Documentation](./src/FormEditor/README.md)

#### Why Formik?
I originally wanted to use redux-forms. I didn't love the API or the validation. Also, I had a less articulate version of [these conncerns](https://jaredpalmer.com/formik/docs/overview#why-not-redux-form). We're using more of Formik's features than you need to create a working form. Formik feels like it does the basics really well and everything is extensible.

Specific benefits:
* We are not developing our own validation system.
    - The validation system is super extensible.
    - [Validation Documentation](https://jaredpalmer.com/formik/docs/guides/validation)
* Loop Fields/ Repeater Fields: Totally Covered.
    - [`<FieldArray />`](https://jaredpalmer.com/formik/docs/api/fieldarray)
* [Great Documentation](https://jaredpalmer.com/formik/docs/overview)
* Allows us to supply our own field components, CSS, layouts, etc.
    * Formik has text, select, textarea fields, but we don't have to use them.
 

#### Import With webpack
`import {CalderaForm} from '@calderajs/forms';`
   
#### How A Caldera Forms
```jsx
<CalderaForm
    form={form}//form config
    onSubmit={(
        //current values of all fields
        values, 
        actions
    ) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }, 1000);
    }}
    onChange={(values) => {
        console.log(values) //all field values
    }}
	/>
```

##### Props
* `formRows` - Object - The form layout. 
* `onSubmit` Function - Called when form is submitted by `Formik.onSubmit()`
    - Receives all field values and a [Formik Bag](https://jaredpalmer.com/formik/docs/api/withformik#the-formikbag)
    - [Formik Docs](https://jaredpalmer.com/formik/docs/api/formik#onsubmit-values-values-formikbag-formikbag-void)
* `onChange` Function - Called when any field is changed.
    - Is passed all updated field values.
 * `initialValues` - Object. Initial values for all fields in form. Mapped `fieldId : fieldValue`

##### Shape Of Form

* `id` - string
* `name` - string
* `fields` - array
* `conditionals` - array
* `rows` - array

```js
import{createFieldRule} from '@calderajs/forms';
const form = {
	id: 'contact-form',
	name: 'Contact Form',
	rows : [
	    {
	    	rowId: 'r1',
	    	columns: [
	    		{
	    			columnId: 'c1',
	    			fields: ['sendEmail'],
	    			width: '1/4'
	    		},
	    		{
                    columnId: 'c2',
                    fields: ['primaryEmail'],
                    width: '3/4'
                }
	    	]
	    }	
	],
	fields:[
		{
            type: 'select',
            fieldId: 'sendEmail',
            label: 'Would you like to provide an email?',
            options: [
            	{value: true, label: 'Yes' },
            	{value: false, label: 'No' },
            ]
        },
		{
			type: 'input',
			fieldId: 'primaryEmail',
			html5type: 'email',
			label: 'Your Email'
		}
	],
	conditionals: [
		{
			//result of conditional
			type: 'hide',
			//Logic of conditional
			rule: createFieldRule('is', 'sendEmail', true ),
			//fields effected by conditional
			fields: [
				'primaryEmail'
			]
		}
	]
}
```

### `<CalderaGrid />`
> This component is supplied an array describing multi-row layouts with 1-12 responsive columns per row. 

A column in a grid may be React component or an object describing a form field, as expected by the `fieldAreaFactory` function from the `calderawp/@factory` package.

#### The `rows` prop
Main Rules: 
* A row MUST have a `rowId` key. This value MUST be unique, among all rows of the grid.
* A row SHOULD have an array of columns.
* A column MUST have a `columndId` key. This value MUST be unique, among all columns of the row.
* A column SHOULD have a `width` key. This describes the width of the column, as a fraction.
    - The sum of all of the `width` keys of all columns in a row SHOULD be less than or equal to 1.
* A column MAY have `fields` key. If an array of field configs -- as expected by `fieldAreaFactory` is passed, those fields will be rendered for the column. 
* A column MAY have a `children` key. If a valid React component is supplied here, that component will be rendered for the column.
    - Think of this as the column render prop.

Notes:
* A column SHOULD NOT have `children` and `fields`.
* This could be used for non-form layouts. It's primary puprose is form layouts.

### Other Props


* `onAnyChange` - Function - Callback when any field changes values.
* `onAnyBlur`  - Function - Callback when any field is blurred.
* `fieldValues` Object - Current values of all fields
* `setFieldValue` Function - Function that can set a field's value when supplied `fieldId, newValue`.
* `fieldErrors` Object. - The current field errors.
    - Passed from Formik.
*`fieldTouched` Object. - The current field errors.
    - Passed from Formik.
                
Notes:
* It should be possible to remove these non-form related props.
* [You really want to read this Formik tutorial](https://jaredpalmer.com/formik/docs/tutorial)

#### Grid-Layout With React Components As Columns


```js
import React, {Component} from 'react';
import {CalderaGrid} from '@calderajs/forms';

class Something extends Component {
	row = {
        rowId: 'notForm',
        columns: [
            {
                children: <div>Half Column</div>,
                width: '1/2',
                columnId: 1
            },
            {
                children: <div>Quarter Column</div>,
                width: '1/4',
                columnId: 2
            },
            {
                children: <div>Quarter Column 2</div>,
                width: '1/4',
                columnId: 3
            }
        ]
    };
	 
	 state = {}
	
	 setFieldValue = (fieldId,newValue) => {
	 	this.setState({fieldId:newValue});
	 }
	render(){
		return (
			<CalderaGrid
                rows={[this.row]}
                onAnyChange={(values) => { this.setState({values})}}
                onAnyBlur={(values) => { console.log(values)}}
                fieldValues={this.state.fieldValues}
                setFieldValue={this.setFieldValue}
                fieldErrors={{}}
                fieldTouched={{}}
            />
		)
	}
	
}
```

### Clients
[See the clients Readme](./src/components/Http/README.md)
