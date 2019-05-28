import {Form} from "react-bootstrap";
import React from 'react';
export const RadioOrCheckboxControl = props => {
    const {
        label,
        fieldId,
        required,
        fieldType,
        value,
        onChange,
        onBlur,
        attributes
    } = props;

    return (
        <Form.Check
            onBlur={onBlur}
            required={required}
            checked={value}
            onClick={() => onChange(!value)}
            type={fieldType}
            label={label}
            id={fieldId}
            attributes={attributes}
        />
    )
}
