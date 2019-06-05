import PropTypes from 'prop-types';
import React from 'react';
import {FieldWrapper} from "..";
import {SelectField} from "..";
import Autocomplete from 'react-autocomplete'
import {Control} from "../Control";

export const AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER = 'auto-complete';





export const AutoCompleteField = props => {
    const {
        options,
        fieldId,
        required,
        onChange,
        onBlur,
        placeholder,
        value
    } = props;    const fieldProps = {
        ...props,
        fieldType: AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER,
    };


    function handleChange(eventOrValue) {
        if( 'object' === typeof  eventOrValue ){
            onChange(eventOrValue.target.value);
        }else {
            onChange(eventOrValue);
        }
    }

    return (
            <Autocomplete
                items={[
                    { value: 'foo', label: 'foo' },
                    { value: 'bar', label: 'bar' },
                    { value: 'baz', label: 'baz' },
                ]}
                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.value}
                renderItem={(item, highlighted) =>
                    <div
                        key={item.id ? item.id : item.value }
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                    >
                        {item.label}
                    </div>
                }
                value={value}
                onChange={e => handleChange(e )}
                onSelect={value => handleChange( value )}
            />

    );
};

AutoCompleteField.propTypes = {
    ...SelectField.propTypes,
};

AutoCompleteField.defaultProps = {
    ...SelectField.defaultProps,
};
