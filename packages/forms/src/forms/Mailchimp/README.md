

## Usage
### Quick Start

* ListId is the Mailchimp List ID.
* ListId must correspond to an account authorized with Caldera Mailchimp.
* Do not put a trailingslash on API root.

#### Example
```jsx
import React,{useState,useEffect} from 'react';
import {Message} from "@calderajs/components";
import './App.css';
import {
    CalderaMailChimpForm,
    CalderaMailChimpSurveyForm
} from "@calderajs/forms";

/**
 * Sign up form and survey form
 */
function Forms({apiRoot,onSubmit,token,listId}) {
    return <div>
        <CalderaMailChimpForm
            token={token}
            apiRoot={apiRoot}
            listId={listId}
            onSubmit={onSubmit}
        />
        <CalderaMailChimpSurveyForm
            token={token}
            apiRoot={apiRoot}
            listId={listId}
            onSubmit={onSubmit}
        />
    </div>;
}

/**
 * Demo app
 */
const App = ({apiRoot, calderaToken,wpNonce}) => {
    /**
     * Track token
     */
    const [token,setToken] = useState(calderaToken);

    /**
     * Get token via remote API
     */
    useEffect( () => {
        if( ! token ){
            const url = wpNonce ? `${apiRoot}/token?_wpnonce=${wpNonce}` : `${apiRoot}/token`;
            fetch(url, {
                method: 'POST'
            })
                .then(r => r.json())
                .then(r => {
                    setToken(r.token);
                })
                .catch(e => console.log(e));
        }
    },[token,setToken]);

    /**
    * Render once token is retrieved
    */
    return (
        <div className="App">
            {token  &&
                <Forms apiRoot={apiRoot} token={token} />

            }
        </div>
    );

};
```

### Import With wepback
```js

import {
    //Mailchimp components
    MailChimpForm,
    MailChimpSurveyForm,
    CalderaMailChimpForm,
    CalderaMailChimpSurveyForm,
    AddApiKey,
    SelectList,
    //Api client
    mailchimpApi,
    //hooks
    useCalderaMailChimpFormConfig
} from '@calderajs/forms';

const {
        //Admin API client
        getAccounts,
        getAccountsUi,
        getListsUi,
        getLists,
        saveApiKey,
        //public API client
        getForm,
        prepareData,
        createSubscriber,
        updateSubscriber,
    } = mailChimpApi;

```

### `CalderaMailChimpForm`
Creates a Mailchimp survey up form using a supplied form config or fetches one via Caldera API based on list Id and submits against Caldera-API. 

* Provides all HTTP interactions on top of `<MailChimpForm />` component.

```jsx 
<CalderaMailChimpForm
    initialForm={form}//optional
    apiRoot={'https://calderawp.lndo.site/wp-json/caldera-api/v1/messages/mailchimp/v1/'}
    token={null}// XCSFR token, if null, one will be created via API
    listId={listId}
    onSubmit={(values) => alert(JSON.stringify(values))}
/>
```

### `CalderaMailChimpSurveyForm`
Creates a Mailchimp survey -- one question at a time based on intrest group -- form using a supplied form config or fetches one via Caldera API based on list Id and submits against Caldera-API. 

* Provides all HTTP interactions on top of `<MailChimpSurveyForm />` component.

```jsx 
<CalderaMailChimpSurveyForm
    initialForm={form}//optional
    apiRoot={apiRoot}
    token={token}
    listId={listId}//if intialForm is not passed, form is found via listId
    onSubmit={(values,actions) => alert(JSON.stringify(values))}
/>
```
### `MailChimpForm`
 Component for stand-alone mailchimp forms served via Caldera API

* This is the lowest-level form. It wraps `<CF2Form />`. All other components wrap this one or wrap a component that wraps this.

```jsx
<MailChimpForm
    form={form}//required
    onSubmit={createSubscriber}
    hideOnSubmit={hideOnSubmit}
    listId={lastListId.current}
/>
```
### `MailChimpSurveyForm`
 Component for stand-alone mailchimp survey (one intrest group question at a time )forms served via Caldera API

* Wraps `<MailChimpForm />`.
* Handles logic to provide one question at a time.

```jsx
<MailChimpSurveyForm
    submitUrl={submitUrl}
    listId={listId}
    emailField={getEmailField(form)}
    questions={getGroupFields(form)}
/>
```

