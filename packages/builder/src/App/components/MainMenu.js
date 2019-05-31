import React,{useContext} from 'react';
import {TabPanel} from "@wordpress/components";
import {MenuContext} from "../MenuContext";

export const MainMenu = ({
                             className,
                             menuItems,
                             activeItem,
                             setActiveItem,
}) => {
    return(
        <TabPanel className={className}
                  activeClass="active-tab"
                  onSelect={setActiveItem}
                  initialTabName={activeItem}
                  tabs={menuItems}
        >
            {
                (tab) => (
                    <div
                    >
                        {tab.name}
                    </div>
                )
            }
        </TabPanel>
    );

};


export const MainMenuWithContext = ({children}) => {
    const {
        menuItems,
        activeItem,
        setActiveItem
    } = useContext(MenuContext);
    return <MainMenu { ... {
        menuItems,
        activeItem,
        setActiveItem
    } } >{children}</MainMenu>
}
