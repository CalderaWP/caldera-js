

```jsx 
import {WithStyleSheet} from '@calderajs/forms';

function(){
    return (
        <WithStylesheet Loading={'Loading'} href={'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'} >
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


```jsx harmony
import {WithBootstrapStyle} from '@calderajs/forms';

function(){
    return (
        <WithBootstrapStyle Loading={'Loading'} version={'4.3.1'} >
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
