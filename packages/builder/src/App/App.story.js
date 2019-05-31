import React from 'react';
import { storiesOf } from '@storybook/react';
import { App } from './App';
import {WithBootstrapStyle} from "@calderajs/forms";

const componentsCss = 'https://cdn.jsdelivr.net/gh/WordPress/WordPress@5.2/wp-includes/css/dist/components/style.min.css';

const AppWithCSS = ({children})=> <WithBootstrapStyle>{children}</WithBootstrapStyle>


storiesOf('App', module).add('The Form Builder Application', () => (
	<App />
));
storiesOf('App', module).add('The Form Builder Application With CSS', () => (
	<AppWithCSS >Hi</AppWithCSS>
));
