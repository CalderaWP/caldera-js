import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
export const MenuContext = createContext({});

export const MenuProvider = ({ children, menuItems, initialActiveItem }) => {
	const [activeItem, setActiveItem] = useState(initialActiveItem);

	const getIntialActiveTab = () =>
		menuItems.find(menuItem => initialActiveItem === menuItem.name);
	const getActiveTab = () => {
		if (!activeItem) {
			return getIntialActiveTab();
		}
		return menuItems.find(menuItem => activeItem === menuItem.name);
	};

	return (
		<MenuContext.Provider
			value={{
				menuItems,
				activeItem,
				setActiveItem,
				getActiveTab,
			}}
		>
			{children}
		</MenuContext.Provider>
	);
};

MenuProvider.defaultProps = {
	items: [],
	initialActiveItem: "forms",
};
MenuProvider.propTypes = {
	items: PropTypes.array,
	initialActiveItem: PropTypes.string,
};
