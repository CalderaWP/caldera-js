import React from 'react';
import { storiesOf } from '@storybook/react';
import { App } from './App';
import { WithBootstrapStyle } from '@calderajs/forms';

storiesOf('App', module).add('The Form Builder Application', () => <App />);
