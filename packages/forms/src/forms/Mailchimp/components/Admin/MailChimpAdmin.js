import React, { useState, Fragment } from 'react';
import { Row, Column } from '@calderajs/components';
import { HorizontalForm } from '@calderajs/forms';
import { TabPanel } from '@wordpress/components';
import PropTypes from 'prop-types';

function useTabs({ initialTabs, initalTab }) {
	const [currentTab, setCurrentTab] = useState(initalTab);
	const tabs = [];
	initialTabs.forEach(tab => (tab.className = `caldera-tab-${tab.name}`));
	return [currentTab, setCurrentTab, tabs];
}

const AccountsPanel = () => {
	return <div>Accounts</div>;
};

const SettingsPanel = () => {
	return <div>Settings</div>;
};
export const MailChimpAdmin = ({ accounts, apiRoot, apiToken }) => {
	const [currentTab, setCurrentTab, tabs] = useTabs(
		[
			{
				name: 'settings',
				title: 'Settings',
			},
			{
				name: 'accounts',
				title: 'Accounts',
			},
		],
		'settings'
	);

	const Inside = ({ tab }) => {
		const { name } = tab;
		const props = {};
		switch (name) {
			case 'accounts':
				return <AccountsPanel {...props} />;
			case 'settings':
			default:
				return <SettingsPanel {...props} />;
		}
	};
	return (
		<div>
			<Row>
				<Column width={0.66}>Preview Form</Column>
				<Column width={0.33}>
					<Inside />
				</Column>
			</Row>
		</div>
	);
};
