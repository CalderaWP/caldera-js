

## Load One stylesheet
```jsx 
import {WithStyleSheet} from '@calderajs/forms';

function(){
    return (
        <WithStylesheet loading={(<div>LOADING!!!</div>)} href={'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'} >
                <div className={'container'}>
                    <div className={'row'}>
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Click Me Primary Button"
                        />
                    </div>
        
                    <div className={'row'}>
                        <div className={'col-sm-4'}>1 of 3</div>
                        <div className={'col-sm-4'}>2 of 3</div>
                        <div className={'col-sm-4'}>3 of 3</div>
                    </div>
                </div>
        </WithStylesheet>
    );
}

## Load Many stylesheets
```jsx 
import {WithStyleSheets} from '@calderajs/forms';

function(){
    return (
        <WithStylesheets 
            loading={(<div>LOADING!!!</div>)} 
            hrefs={
                [
                    'https://cdn.jsdelivr.net/gh/WordPress/WordPress@5.2/wp-includes/css/dist/components/style.min.css',
                    'https://cdn.jsdelivr.net/gh/WordPress/WordPress@5.2/wp-includes/css/dist/editor/style.min.css',
                ]
            }
            >
                <div>Gutes</div>
        </WithStylesheets>
    );
}

```
## Load With Bootstap stylesheet. Provide version. jsdelivr is used as CDN.

```jsx
import {WithBootstrapStyle} from '@calderajs/forms';

function(){
    return (
        <WithBootstrapStyle loading={(<div>LOADING!!!</div>)} version={'4.3.1'} >
                <div className={'container'}>
                    <div className={'row'}>
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Click Me Primary Button"
                        />
                    </div>
        
                    <div className={'row'}>
                        <div className={'col-sm-4'}>1 of 3</div>
                        <div className={'col-sm-4'}>2 of 3</div>
                        <div className={'col-sm-4'}>3 of 3</div>
                    </div>
                </div>
        </WithStylesheet>
    );
}

```
