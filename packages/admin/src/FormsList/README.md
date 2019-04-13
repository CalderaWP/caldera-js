# Forms List Component
Displays a list of forms

## Usage
`import {FormsList} from '@calderajs/components';`

### Listing FOrms
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
    panelTitle={'Panel Title'}
    noFormsMessage={'Custom No Forms Found'}
    onFormAction={() => {} }
/>

```

### `onFormAction()`
See [`FormListItem`](../FormListItem/README.md) component.
