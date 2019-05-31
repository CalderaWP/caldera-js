import React,{createContext,useState} from 'react';
import PropTypes from 'prop-types';
export const MenuContext = createContext({});

export const MenuProvider = ({children,menuItems,initialActiveItem}) => {

   const [activeItem,setActiveItem] = useState(initialActiveItem);
    return (
        <MenuContext.Provider
            value={{
                menuItems,
                activeItem,
                setActiveItem
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};


MenuProvider.defaultProps = {
    items: [],
    initialActiveItem: '',
};
MenuProvider.propTypes = {
    items: PropTypes.array,
    initialActiveItem: PropTypes.string
};
