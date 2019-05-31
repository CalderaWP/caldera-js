import React,{createContext,useState} from 'react';
import PropTypes from 'prop-types';
export const FormContext = createContext({});

export const FormProvider = ({initialForms: initialForms,children}) => {

    const [forms, setForms] = useState(initialForms||[]);
    return (
        <FormContext.Provider
            value={{
                forms,
                setForms
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
