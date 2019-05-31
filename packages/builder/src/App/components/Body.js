import React, {useContext} from 'react';
import {FormsList} from "../..";
import {MenuContext} from "../MenuContext";
import {FormContext} from "../FormContext";

export const Body = ({tab, forms}) => {
    const {name} = tab;
    const onFormAction = (formId, action) => console.log(formId, action);
    switch (name) {
        case 'forms':
            const props = {forms, panelTitle: 'Forms', classname: '', onFormAction};
            return <FormsList {...props} />;
        default:
            return <div>{name}</div>;
    }
};

export const BodyWithContext = ({children}) => {
    const {
        getActiveTab
    } = useContext(MenuContext);
    const {forms} = useContext(FormContext);

    return <Body tab={getActiveTab()} forms={forms}/>


};
