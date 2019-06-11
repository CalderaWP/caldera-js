import React, { Fragment, useContext, createElement } from 'react';
import { TabPanel } from '@wordpress/components';
import { MenuContext } from '../MenuContext';

export const MainMenu = ({
	className,
	menuItems,
	activeItem,
	setActiveItem,
	children,
}) => {
	return (
		<TabPanel
			className={className}
			activeClass="active-tab"
			onSelect={setActiveItem}
			initialTabName={activeItem}
			tabs={menuItems}
		>
			{tab => createElement(Fragment, { tab }, children)}
		</TabPanel>
	);
};

export const MainMenuWithContext = ({ children }) => {
	const { menuItems, activeItem, setActiveItem } = useContext(MenuContext);
	return (
		<MainMenu
			{...{
				menuItems,
				activeItem,
				setActiveItem,
			}}
		>
			{children}
		</MainMenu>
	);
};
