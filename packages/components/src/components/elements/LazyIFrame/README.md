# Lazy-Loading iFrame Loader

## Usage
### Using Default Width & Height (100%)
```js
import {LazyIFrame} from '@calderajs/components';

<LazyIFrame   
    src={'https://hiroy.club'}// URL for iframe, required
    className="admin- iframe"//class for iframe - optional
/>
```

### Setting Width and Height

Height and width can be passed to iFrame `height` and `width` attribute
```js
import {LazyIFrame} from '@calderajs/components';

<LazyIFrame   
    src={'https://hiroy.club'}
    width={'500px'}
    height={'100%'}
/>
```
