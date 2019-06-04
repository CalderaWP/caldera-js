import React, {useContext,useState} from 'react';
import {FormEditor, FormsList} from "../..";
import {MenuContext} from "../MenuContext";
import {FormContext} from "../FormContext";
import {FormEntryViewer} from '../../'
export const Body = ({tab, forms,activeForm, setActiveItem,setActiveFormId}) => {
    const {name} = tab;

    const [showSingleForm,setShowSingleForm] = useState(false);
    const [formView,setFormView] = useState('form');
    const onFormAction = (formId, action) => {
        switch (action) {
            case 'view-entries':
                setActiveFormId(formId);
                setActiveItem('forms');
            break;
            case 'edit':
                setActiveFormId(formId);
                setActiveItem('forms');
                setShowSingleForm(true);
                break;
            default:
                setActiveFormId(formId);
                setActiveItem('forms');
                break;
        }
    };
    let props = {};
    switch (name) {
        case 'forms':
            props = {forms, panelTitle: 'Forms', classname: '', onFormAction, hideTabs: ['editor', 'layout']};
            if( showSingleForm ){
                return <FormEditor form={activeForm} {...props} />
            }
            return <FormsList {...props} />;
        case 'settings':
            return  <div>Settings</div>
        case 'entries':
            if( ! activeForm ){
                return  <div>No Form Selected</div>
            }
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
