import React,{createContext,useState} from 'react';
import PropTypes from 'prop-types';
export const FormContext = createContext({});

export const FormProvider = ({initialForms: initialForms,children}) => {

    const [forms, setForms] = useState(initialForms||[]);
    const [activeFormId, setActiveFormId] = useState('');


    return (
        <FormContext.Provider
            value={{
                forms,
                setForms,
                activeFormId,
                setActiveFormId,
                getActiveForm(){
                    if( ! activeFormId ){
                        return null;
                    }
                    return  forms.find( form => activeFormId === form.id );

                }
            }}
        >
            {children}
        </FormContext.Provider>
    );
};


FormProvider.defaultProps = {
    initialForms: [],
};
FormProvider.propTypes = {
    initialForms: PropTypes.array
};
