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