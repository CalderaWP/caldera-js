//https://github.com/storybooks/storybook/issues/489#issuecomment-297426989
import 'babel-polyfill';
import { configure,addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';


addDecorator(withA11y)
function loadStories() {
    require('glob-loader!./stories.pattern')
}
configure(loadStories, module);
