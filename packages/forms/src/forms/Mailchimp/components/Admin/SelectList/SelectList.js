import React, { Fragment } from 'react';
import { InputField } from '@calderajs/components';

/**
 * Select a MailChimp List
 *
 * @param listFieldConfig
 * @param listId
 * @param setList
 * @param instanceId
 * @return {*}
 * @constructor
 */
export const SelectList = ({
	listFieldConfig,
	listId,
	setListId,
	instanceId,
}) => (
	<Fragment>
		<InputField
			{...listFieldConfig}
			fieldId={`caldera-mc-select-list-${instanceId}`}
			value={listId}
			onChange={newValue => {
				setListId(newValue);
			}}
		/>
	</Fragment>
);
