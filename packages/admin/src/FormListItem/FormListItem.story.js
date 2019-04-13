import React from 'react';
import { storiesOf } from '@storybook/react';
import { FormListItem } from './FormListItem';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forms } from '../../EntryViewer/forms.fixtures';

storiesOf('FormListItem', module).add('A form in list', () => (
	<FormListItem form={forms['contact-form']} onFormAction={() => {}} />
));
