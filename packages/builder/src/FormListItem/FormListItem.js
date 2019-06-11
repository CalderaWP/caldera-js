import React from 'react';
import { Toolbar, IconButton } from '@wordpress/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FormListItemButton = ({
	icon,
	label,
	formId,
	actionName,
	onFormAction,
}) => (
	<IconButton
		icon={icon}
		label={label}
		className={`form-list-item form-list-item-${actionName}`}
		onClick={() => {
			onFormAction(formId, actionName);
		}}
	/>
);

FormListItemButton.propTypes = {
	icon: PropTypes.string,
	label: PropTypes.string.isRequired,
	formId: PropTypes.string.isRequired,
	actionName: PropTypes.string.isRequired,
};

FormListItemButton.defaultProps = {
	icon: 'edit',
};
/**
 *
 * @param form
 * @param onFormAction
 * @return {*}
 * @constructor
 */
export const FormListItem = ({ form, onFormAction, items }) => {
	const formId = form.id;
	return (
		<div>
			<div>{form.name}</div>
			<Toolbar>
				{items.map(item => (
					<FormListItemButton
						key={item.actionName}
						formId={formId}
						onFormAction={onFormAction}
						{...item}
					/>
				))}
			</Toolbar>
		</div>
	);
};
const items = [
	{
		icon: 'edit',
		label: 'Edit Form',
		actionName: 'edit',
	},
	{
		icon: 'list-view',
		label: 'View Entries',
		actionName: 'view-entries',
	},
	{
		icon: 'download',
		label: 'Export',
		actionName: 'export',
	},
	{
		icon: 'feedback',
		label: 'Preview Form',
		actionName: 'preview',
	},
	{
		icon: 'admin-settings',
		label: 'Form Settings',
		actionName: 'settings',
	},
];
FormListItem.defaultProps = {
	classNames: {
		edit: 'form-list-item-edit',
		'view-entries': 'form-list-item-view-entries',
		preview: 'form-list-item-preview',
		settings: 'form-list-item-settings',
	},
	items,
};
FormListItem.propTypes = {
	form: PropTypes.object,
	onFormAction: PropTypes.func.isRequired,
	items: PropTypes.array,
};
