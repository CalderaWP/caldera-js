import PropTypes from 'prop-types';
import React,{useMemo} from 'react';

import {AutoCompleteField} from "../AutoCompleteField/AutoCompleteField";

export const FORM_FIELDS_AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER = 'form-fields-auto-complete';



export const FormFieldsAutoComplete = props => {
    const {
        form,
        required,
        onChange,
        onBlur,
        value,
        label,
        description,
        fieldId
    } = props;



    const options = useMemo( () => form.fields.map( field => {
        return {
            label: field.label,
            value: field.fieldId
        }
    }),[form]);
    return (
        <AutoCompleteField
            label={label}
            onChange={onChange}
            description={description}
            fieldId={fieldId}
            value={value}
            onBlur={onBlur}
            required={required}
            options={options}
        />
    )
};

FormFieldsAutoComplete.propTypes = {
    ...AutoCompleteField.propTypes,
    form: PropTypes.shape({
        id: PropTypes.string,
        fields: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number]
            ).isRequired,
        }))
    })
};

FormFieldsAutoComplete.defaultProps = {
    ...AutoCompleteField.defaultProps,
};
