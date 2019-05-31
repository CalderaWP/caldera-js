import React, {useContext} from 'react';
import {FormsList} from "../..";
import {MenuContext} from "../MenuContext";
import {FormContext} from "../FormContext";
import {FormEntryViewer} from '../../'
export const Body = ({tab, forms,activeForm, setActiveItem,setActiveFormId}) => {
    const {name} = tab;
    const onFormAction = (formId, action) => {
        switch (action) {
            case 'view-entries':
                setActiveFormId(formId);
                setActiveItem('entries');
            break;
            default:
                setActiveFormId(formId);
                setActiveItem('forms');
                break;
        }
    }
    let props = {};
    switch (name) {
        case 'forms':
            props = {forms, panelTitle: 'Forms', classname: '', onFormAction};
            return <FormsList {...props} />;
        case 'entries':
            props ={ form:activeForm, noItemsMessage: `No Entries Found For ${activeForm.id}`, entries: {} };
            return <FormEntryViewer {...props} />
        default:
            return <div>{name}</div>;
    }
};

export const BodyWithContext = ({children}) => {
    const {
        getActiveTab,
        setActiveItem,
    } = useContext(MenuContext);
    const {
        forms,
        activeFormId,
        setActiveFormId,
        getActiveForm
    } = useContext(FormContext);

    const props = { forms, tab: getActiveTab(),activeForm: getActiveForm(), setActiveItem,setActiveFormId };
    return <Body { ...props }/>


};
