import PropTypes from 'prop-types';
import React from 'react';
import {FieldWrapper} from "..";
import {SelectField} from "..";
import Autocomplete from 'react-autocomplete'
import {Control} from "../Control";

export const AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER = 'auto-complete';


const RenderInput = props => <Control { ...props} />
const RenderMenu = (items, value, style) => (
     <ul style={{ ...style }} children={items}/>
);

const RenderItem = (item, highlighted) =>
    <li
        key={item.id ? item.id : item.value }
        style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
    >
        {item.label}
    </li>

export const AutoCompleteField = props => {
    const {
        options,
        required,
        onChange,
        onBlur,
        value
    } = props;    const fieldProps = {
        ...props,
        required,
        onBlur,
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
                items={options}
                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.value}
                renderItem={RenderItem}
                renderMenu={RenderMenu}
                RenderInput={(props) => <RenderInput {...{...props,...fieldProps} } />}
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
