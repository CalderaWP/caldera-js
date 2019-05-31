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
* Run tests once for CI
   - `yarn test:ci` 
    
## Usage

### `<CalderaForm />`
>This component is used for all forms in the Caldera Framework. The Caldera Forms front-end (Caldera Forms 2.0+) and all UI sections.


This component uses [Formik](https://jaredpalmer.com/formik/) for managing state and validation. The layout uses the `CalderaGrid` component of this package and uses the fieldAreaFactory from the `calderawp/@factory` package.

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
   
#### Creating a form
The Caldera Forms component is totally decoupled from Caldera Forms 1.x form submission. The `<CF2Form />` component is designed to be used with Caldera Forms 1.9 or later.

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
            	{optionValue: true, label: 'Yes' },
            	{optionValue: false, label: 'No' },
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
 
### `<CF2Form`>
Wrapper for `<CalderaForm />` designed to be used with the "cf2" API in Caldera Forms 1.x.

🌋👀[Documentation](./src/CF2Form/README.md)

### `<HorizontalForm`>
Wrapper for `<CalderaForm />` where every field is in its own 100% wide row. Useful for Gutenberg block settings for field settings in Caldera Forms form builder.

🌋👀[Documentation](./src/HorizontalForm/README.md)

### MailChimp Forms
Mailchimp sign up and survey forms.
🌋👀[Documentation](./src/forms/Mailchimp/README.md)

### Contact Form
🌋👀[Documentation](./src/forms/README.md)

### Clients
[See the clients Readme](./src/components/Http/README.md)


