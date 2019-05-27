

## Usage
### Quick Start

* ListId is the Mailchimp List ID.
* ListId must correspond to an account authorized with Caldera Mailchimp.
* Do not put a trailingslash on API root.
```jsx
import {
    CalderaMailChimpForm,
    CalderaMailChimpSurveyForm,
} from '@calderajs/forms';

<div>
    <CalderaMailChimpForm
        apiRoot={'https://calderawp.lndo.site/wp-json/caldera-api/v1/messages/mailchimp/v1'}
        listId={'45907f0c59'}
        onSubmit={(values) => alert(JSON.stringify(values))}
    />
    <CalderaMailChimpSurveyForm
        apiRoot={'https://calderawp.lndo.site/wp-json/caldera-api/v1/messages/mailchimp/v1'}
        listId={'45907f0c59'}
        onSubmit={(values) => alert(JSON.stringify(values))}
    />
</div>
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
    //hooks
    useCalderaMailChimpFormConfig
} from '@calderajs/forms';
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

