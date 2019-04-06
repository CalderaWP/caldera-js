


```js
import classNameService, {
	CLASS_NAME_HOOKS,
	FILTER_FIELD_CLASS_NAME,
	FILTER_FIELD_LABEL_CLASS_NAME,
	FILTER_FIELD_SET_CLASS_NAME,
	FILTER_FIELD_WRAPPER_CLASS_NAME,
	cf1ClassNames
} from '@calderajs/components';


/**
* Add class name for fields
*/
classNameService.addFilter( FILTER_FIELD_CLASS_NAME, 'add-on-namespace',(classNames) => {
	return `${classNames} something`
})

/**
* Add class name for labels
*/
classNameService.addFilter( FILTER_FIELD_LABEL_CLASS_NAME, 'add-on-namespace',(classNames) => {
	return `${classNames} something`
})
/**
* Add class name for fieldsets
*/
classNameService.addFilter( FILTER_FIELD_SET_CLASS_NAME, 'add-on-namespace',(classNames) => {
	return `${classNames} something`
})
/**
* Add class name for field wrapper
*/
classNameService.addFilter( FILTER_FIELD_WRAPPER_CLASS_NAME, 'add-on-namespace',(classNames) => {
	return `${classNames} something`
})
```
