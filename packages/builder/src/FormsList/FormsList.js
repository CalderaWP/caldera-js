import React from 'react';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormListItem } from '../FormListItem/FormListItem';

/**
 *
 * @param forms
 * @param panelTitle
 * @param classname
 * @param onFormAction
 * @return {*}
 * @constructor
 */
export const FormsList = ({ forms, panelTitle, classname, onFormAction }) => (
	<Panel classname={classNames(classname)}>
		<PanelBody title={panelTitle} icon="feedback" initialOpen={true}>
			{forms.map(form => {
				return (
					<PanelRow key={form.id}>
						<FormListItem
							key={form.id}
							form={form}
							onFormAction={onFormAction}
						/>
					</PanelRow>
				);
			})}
		</PanelBody>
	</Panel>
);

/**
 * Prop type definitions for the FormsList component
 *
 * @type {{forms: shim, panelTitle: shim, noFormsMessage: shim, onFormAction: *}}
 */
FormsList.propTypes = {
	forms: PropTypes.array,
	panelTitle: PropTypes.string,
	noFormsMessage: PropTypes.string,
	onFormAction: PropTypes.func.isRequired
};

/**
 * Default props for the forms list component.
 *
 * @type {{forms: Array, panelTitle: string, noFormsMessage: string}}
 */
FormsList.defaultProps = {
	forms: [],
	panelTitle: 'All Forms',
	noFormsMessage: 'No Forms Found'
};
