import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import {isValidHtml5type} from "../util";
import {FieldWrapper} from "..";
import Button from "react-bootstrap/Button";
import {InputField} from "..";
export const ButtonField = props => {
    const {variant,children} = props;
    const fieldProps = {
        ...props,
        fieldType: 'button',
        variant,
    };

    return (
        <FieldWrapper {...fieldProps}>
            <Button {...fieldProps} >
                {children}
            </Button>
        </FieldWrapper>
    );
};

ButtonField.propTypes = {
    ...InputField.propTypes,
    variant: PropTypes.string,
};

ButtonField.defaultProps = {
    ...InputField.defaultProps,
    variant: 'secondary'
};
