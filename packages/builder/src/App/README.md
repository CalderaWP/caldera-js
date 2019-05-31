# Forms List Item Component
Shows one item in the form list

## Usage
 
### Import With webpack
`import {FormsList} from '@calderajs/components';`


### Render One Item
```jsx
	<App 
        form={forms['contact-form']} 
        onFormAction={() => {}} 
	/>

```

### Action Callback
The prop `onFormAction` passed to this component is called whenever any of the form action buttons are clicked. The callback will receive form ID and the action name -- edit,preview, etc.


```jsx
    const onFormAction = (formId,actionName) => {
        switch( actionName ){
            //...
        }
    });
	<App 
        form={forms['contact-form']} 
        onFormAction={onFormAction} 
	/>

```
