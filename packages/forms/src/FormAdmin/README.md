# Forms Admin
The main admin page for Caldera Forms.

## Usage
### Basic Usage
```js
import {FormAdmin} from '@calderajs/forms';
<FormAdmin
  initialForms={[]}
  render={(forms,getFormById,setForms) => {
      return (
          <ul>
              {forms.map(form => <li key={form.id}>{form.name}</li>)}
          </ul>
      )
  }}
/>

```

### Usage With API
Using with [caldera-api-client](https://calderalabs.org/caldera-api-client) inside of WordPress.

```js
import {FormAdmin} from '@calderajs/forms';
import {wpClientFactory} from '@caldera-labs/api-client';
import {useEffect} from 'react';

//SEE: https://github.com/CalderaWP/Caldera-Forms/blob/master/clients/state/api/cfAdmin.js
//See https://calderalabs.org/caldera-api-client/manual/overview.html#wordpress-admin-clients
const client = wpClientFactory( 'url', 'nonce', 'forms' );

function Forms({forms,getFormById,setForms}) {
	
	//https://calderalabs.org/caldera-api-client/manual/overview.html#forms-clients
	useEffect( () => {
		client.getForms().then(forms => {
			setForms(forms);
      }).catch((error) => {
          console.log(error); //log error
      });

	});
	
	//https://calderalabs.org/caldera-api-client/manual/overview.html#create-or-clone-a-form
	function createForm(args) {
		client.createForms(args);
	}
	
	return (
		<div>
             <ul>
              {forms.map(form => <li key={form.id}>{form.name}</li>)}
          </ul>
              
		</div>
     
  )
}
function App() {
	
	
	return (
		<FormAdmin
              initialForms={[]}
              render={(forms,getFormById,setForms) => {
                  return (
                      <ul>
                          {forms.map(form => <li key={form.id}>{form.name}</li>)}
                      </ul>
                  )
              }}
          />
	)
  
}


```

