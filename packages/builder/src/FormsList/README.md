# Forms List Component
Displays a list of forms

## Usage
`import {FormsList} from '@calderajs/components';`

### Listing Forms
```jsx
const forms = [
    {
        id: 'form-id',
        name: 'Contact Form'
    },
    {
        //...
    }
];
<FormsList
    forms={forms}
    panelTitle={'Mailchimp Forms'}
    noFormsMessage={'No Forms Found'}
    onFormAction={(formId,actionName) => {
        console.log(`Action name ${actioName} called for form ${formId}` )
    }}
/>

```

### items prop
Optionally, an array of icons can be passed to replace the default set.

```
const items = [
	{
		icon: 'edit',
		label: 'Edit Form',
		actionName: 'edit',
	},
	{
		icon: 'list-view',
		label: 'View Entries',
		actionName: 'view-entries',
	},
];
<FormsList
    items={items}
    forms={forms}
    panelTitle={'Mailchimp Forms'}
    noFormsMessage={'No Forms Found'}
    onFormAction={(formId,actionName) => {
        console.log(`Action name ${actioName} called for form ${formId}` )
    }}
/>
```

### `onFormAction()`
See [`FormListItem`](../FormListItem/README.md) component.
