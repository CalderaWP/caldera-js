# Form Field Auto-Complete

Auto-complete field, with form field magic tags as the options.

## Examples

### Select from all fields

```jsx
import {} from '@calderajs/components'

<FormFieldsAutoComplete
    label={'Select A Field'}
    onChange={(newValue) => console.log(newValue)}
    fieldId={'selection-field'}
    form={form}
/>
```

### Select from specific field types

```jsx
import {} from '@calderajs/components'

<FormFieldsAutoComplete
    label={'Select A Field'}
    onChange={(newValue) => console.log(newValue)}
    fieldId={'selection-field'}
    form={form}
    allowedTypes={['email', 'text']}
/>
```
