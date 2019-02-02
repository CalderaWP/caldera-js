import React from 'react';
import { Toolbar, IconButton } from '@wordpress/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 *
 * @param form
 * @param onFormAction
 * @return {*}
 * @constructor
 */
export const FormListItem = ({ form, onFormAction }) => (
	<div>
		<div>{form.name}</div>
		<Toolbar>
			<IconButton
				icon="edit"
				label="Edit Form"
				className={'form-list-item form-list-item-edit'}
				onClick={() => {
					onFormAction(form.id, 'edit');
				}}
			/>
			<IconButton
				icon="list-view"
				label="View Entries"
				className={'form-list-item form-list-item-view-entries'}
				onClick={() => {
					onFormAction(form.id, 'view-entries');
				}}
			/>
			<IconButton
				icon="feedback"
				label="Preview Form"
				className={'form-list-item form-list-item-preview'}
				onClick={() => {
					onFormAction(form.id, 'preview');
				}}
			/>
			<IconButton
				icon="admin-settings"
				label="Form Settings"
				className={'form-list-item form-list-item-settings'}
				onClick={() => {
					onFormAction(form.id, 'settings');
				}}
			/>
		</Toolbar>
	</div>
);

FormListItem.defaultProps = {
	classNames: {
		edit: 'form-list-item-edit',
		'view-entries': 'form-list-item-view-entries',
		preview: 'form-list-item-preview',
		settings: 'form-list-item-settings'
	}
};
FormListItem.propTypes = {
	form: PropTypes.object,
	onFormAction: PropTypes.func.isRequired
};
