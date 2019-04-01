# Caldera Grid


## Grid Components
These components that are used to create the grid. You can use them with an object describing the components you want to have the grid constructed of, beacuse you're like a database or something. Or you can use those components like a person would.

### Import With webpack
```js
import {
	Column,
	Columns
	Row, 
	Rows,
	FieldArea,
	Fields,
} from '@calderajs/components';

```

### Examples
#### Rows
A row can be an object describing the row and its columns, or it can be a React component.

```js
const row = {
    rowId: 'r2',
    columns: [
        {
            fields: [{
            	//field config
            	//link to docs for this: @todo
            }],
          
            width: '1/3',
            columnId: 'c1'
        },
        <div 
            key={'unique-key'}
        >
            A Column can be a React component
        </div>,
    ]
    
}
```

#### Row
One row, possibly in a collection of rows. Outputs many columns.

```jsx
<Row
    key={'unique-key'}
    {...row}//The columns
    className={'custom-row-class'}
/>
```

#### Column
One column, possibly inside of a row
    
```jsx
<Column
    key={'unique-key'}
    width={'1/3'}
    px={4}
    py={4}
>
   <p>Hi Roy</p>
</Column>
```


#### Using Row and Column Compoents

```js
<Row>
    <Column
        width={'1/2'}
    >
        <button
            onClick={onClose}
        >
            Close
        </button>
    </Column>
    <Column
        width={'1/2'}
    >
        <button
            onClick={onRemove}
        >
            Remove
        </button>
    </Column>
</Row>
```
