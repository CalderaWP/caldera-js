# Horizontal Form
This form takes an array of field and creates a grid that had one field in one full-width column per row.


```js
let initialValues = {
		fieldOne: 1,
	};
	const fields = [
		{
			fieldId: 'fieldOne',
			fieldType: 'checkbox',
			value: initialState.fieldOne,
			options: [
				{
					value: 1,
					label: 'Use'
				}
			]
		}
	];
	
<HorizontalForm
    fields={fields}
    initialValues={initialValues}
    onChange={values => console.log(values)}
    onBlur={values => console.log(values)}
    onClose={values => console.log(values)}
/>
```