# Conditional Logic  UI

The editor for conditionals and all conditionals of a form.

## Components

* `<ConditionalEditor />` edits 1 conditional group.
	* This is usable now.
* `<Conditionals />` The complete condtional UI for the form.
  * Work In Progress, not functional.

### `<ConditionalEditor />`
Editor for one conditional group:

```jsx
import React, {useState} from 'react'
import {ConditonalEditor} from '@calderajs/components'

const Component = props => {
	const [condition, setCondition] = useState(conditions[0]);
	props = {
		...props,
		onChange: update => {
			//update condition + the updated value
			//console.log(update);
			setCondition(update);
		},//Change handler for any value change  
		condition,//set Condition Objects section below
		fields,//form fields - expected in CF 1.x format for now
		magics, //Currently availble magic tags. See ../MagicField
	};
	return <ConditionalEditor {...props} />;
};
```

* `magics` Is managed [in CF 1.x here](https://github.com/CalderaWP/Caldera-Forms/blob/1bea0c9ba05ad899f1a2d992bb7632da8335a4a5/ui/panels/variables.php#L70-L95).

## Conditon Objects

This is a group, with the id of con_94
```js
const conditions = [
	{
		id: 'con_9457156563497745',
		name: 'Two People',
		type: 'show',
		fields: {
			cl8962595065547459: 'numberPeopleChoice',
			cl4510708085080191: 'numberPeopleChoice',
		},
		group: {
			rw872285474363952: {
				cl8962595065547459: {
					parent: 'rw872285474363952',
					field: 'numberPeopleChoice',
					compare: 'is',
					value: 'numberPeopleTwo',
                },
                cl8962595065547459: {
					parent: 'rw872285474363952',
					field: 'numberPeopleChoice',
					compare: 'is',
					value: 'numberPeopleOne',
				},
			},
			rw6265972925354504: {
				cl4510708085080191: {
					parent: 'rw6265972925354504',
					field: 'numberPeopleChoice',
					compare: 'is',
					value: 'numberPeopleThree',
				},
			},
		},
	},
];
```