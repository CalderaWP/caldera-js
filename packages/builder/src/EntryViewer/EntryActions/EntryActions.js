import PropTypes from 'prop-types';
import React, { Fragment, createElement } from 'react';

export const EntryActions = ({ entryId, formId, actions, onAction }) => {
	return (
		<Fragment>
			{actions.map(ActionComponent => {
				const { actionKey, onClick } = ActionComponent.props;
				return (
					<ActionComponent
						key={actionKey}
						onClick={() => {
							onAction(formId, entryId, actionKey);
						}}
					/>
				);
			})}
		</Fragment>
	);
};

EntryActions.propTypes = {
	formId: PropTypes.string.isRequired,
	entryId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
	actions: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
	),
	onAction: PropTypes.func,
};

EntryActions.defaultProps = {
	required: false,
	multiple: false,
};
