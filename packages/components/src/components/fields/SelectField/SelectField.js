import PropTypes from 'prop-types';
import React from 'react';
import {FieldWrapper} from "..";
import {Form} from 'react-bootstrap'
import {fieldClassNames} from "../util";
import classNames from 'classnames'
const emptyOption = {
    label: '--',
    value: null,
};
export const SelectField = props => {

    const {
        options,
        fieldId,
        required,
        onChange,
        onBlur,
        placeholder
    } = props;

    let {value} = props;

    if (!value) {
        options.unshift(emptyOption);
        if (placeholder) {
            value = placeholder;
        }

    }

    function changeHandler(event) {
        onChange(event.target.value);
    }

    const wrapperProps = {
        ...props,
        fieldType: 'select'
    };

    return (
        <FieldWrapper {...wrapperProps}>
            <Form.Control
                className={classNames(fieldClassNames('select'))}
                as="select"
                id={fieldId}
                value={value}
                required={required}
                onChange={changeHandler}
                          onBlur={onBlur}
            >
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </Form.Control>
        </FieldWrapper>
    );

};

SelectField.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    fieldId: PropTypes.string,
    required: PropTypes.bool,
    multiple: PropTypes.bool,
    options: PropTypes.array
};

SelectField.defaultProps = {
    required: false,
    multiple: false,
    description: '',
    options: [emptyOption]
};
