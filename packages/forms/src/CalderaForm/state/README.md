# Factories For State Objects

## Conditional State

Decorates an object literal with getter/ setters and the ability to hide a field and disbale a field.

 * The method getCurrentState() provides the current values of all VISIBLE fields.
  	- A hidden field's value can NOT be accessed or updated.
 	- A disabled field's value can NOT be update. It can be accessed.
 	
This state does not determine hide/show or enable/disable state. It has methods for consumers of these objects to signal that field is to be hidden/unhidden or enabled/disabled as well as if it is hidden/disabled, etc.

See the inline documentation for each method.

### Example
```js
//import with webpack
import {ConditionalState} from '@calderajs/factory';
//New instance 
const processorState = new ConditionalState(
	{
        emailAddress: 'leia@alderan.gov',
        firstName: 'Leia',
        lastName: ''
    },//initial values
    ['lastName']//start lastName as a hidden field
    ['firstName'] //start firstName as disabled field
);

//enable firstName
processorState.enableField('firstName' );
//Update firstName - was not possible before updating
const values = processorState.setValue('firstName', 'General Leia' );
//All visible values //does not include lastName
console.log(values);
//unhide lastName
processorState.showField('lastName');
//All visible values //does include lastName
console.log(processorState.getCurrentState());
//Set any values (fields must be enabled!)
processorState.setState({
    firstName: 'Luke',
    lastName: 'Skywalker'
})
```
