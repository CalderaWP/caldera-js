
## Horizontal Forms
This is a small wrapper around the `<CalderaForm>` component that is supplied an array of fields and each field is shown in its own row.

### Primary Use Case(s)
* A section of Caldera UI that has a horizontal form, form example:
    - Processor UI
    - Field Config UI
* The inspector controls section of a Gutenberg block.


### Props
### Generic Example
```jsx
import {HorizontalForm} from '@calderajs/components';
<HorizontalForm
    fields={[]}
    initialValues={{}}
    onClose={onClose}
    onChange={onChange}
    instanceId={'test-2'}
/>
```

### Components
There are components that wrap `<HorizontalForm />`. They generally add controls for the UI state -- open, close, minimize, expand.

#### `<Processor />`
This is the settings -- to be used in the Caldera Forms editor or similar situation for describe one process of a form.

```js
import {Processor} from '@calderajs/components';

const processor = {
    id: 'p1',
    type: 'mailchimp',
    label: 'Segment One',
    fields: [
    	
    ],
    conditionals: [
    	
    ]
};

<Processor
    fields={processor.fields}
    initialValues={{}}
    onClose={onClose} //called when processor close button is clicked
    onChange={onChange} //called when any field is changed
    initialActiveTab={'conditionals'}//defaults to settings
    instanceId={processor.id} //shou
/>
```
