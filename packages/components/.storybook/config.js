//https://github.com/storybooks/storybook/issues/489#issuecomment-297426989
import 'babel-polyfill';
import { configure } from '@storybook/react';

function loadStories() {
    require('glob-loader!./stories.pattern')
}

configure(loadStories, module);
