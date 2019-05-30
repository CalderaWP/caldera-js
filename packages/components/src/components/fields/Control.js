import React from 'react';
import {Form} from "react-bootstrap";
import {fieldClassNames} from "./util";
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const Control = ({fieldId, fieldType, placeholder, value, onChange, onBlur, required, attributes, as}) => {
    return <Form.Control
        as={as ? as : fieldType ? fieldType : 'input'}
        id={fieldId}
        type={fieldType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        {...attributes}
        className={classNames(fieldClassNames(fieldType))}
    />;
};
const noop = () => {};
Control.defaultProps = {
    onChange: noop,
    onBlur:noop,
    required: false,
    attributes: {}
};

Control.propTypes = {
    fieldId: PropTypes.string,
    fieldType: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
    onChange: PropTypes.func,
    onBlur:PropTypes.func,
    required: PropTypes.bool,
    attributes: PropTypes.object,
    as: PropTypes.string
};
