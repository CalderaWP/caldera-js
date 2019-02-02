

### Prepare Email Message
```js
const EmailAddress = require( '../routers/sendgrid/EmailAddress');
const email = new EmailAddress('roy@hiroy.club');
//{email: 'roy@hiroy.club', name: '' }

const email2 = new EmailAddress({email:'RedStone@GreenStone.com', name: 'Green Stone'});
//{email:'RedStone@GreenStone.com', name: 'Green Stone'}

```
