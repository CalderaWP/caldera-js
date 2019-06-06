import React from "react";
import {isValidHtml5type} from "../../components/fields/util";

import {
    FieldWrapper,
    RadioField,
    CheckboxField,
    InputField,
    HiddenField,
    SelectField,
    SubmitButton,
    TextAreaField,
    ButtonField,
    AutoCompleteField,
    FormFieldsAutoComplete,
    FORM_FIELDS_AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER,
    AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER
} from "../../components/fields";

import {RadioOrCheckboxControl} from "../../components/fields/RadioOrCheckboxControl";

function RadioOrCheckboxFieldSet(props) {
    const {
        options,
        label,
        onBlur,
        fieldType,
        onChange
    } = props;
    let {value} = props;
    if ('checkbox' === fieldType ) {
        if (!Array.isArray(value)) {
            value = [value];
        }
    } else {
        if (Array.isArray(value)) {
            if (value.length) {
                value = value[0];
            } else {
                value = false;
            }
        }
    }

    function changeHandler(optionId, checked) {
        if ('checkbox' === fieldType ) {
            if (checked) {
                value.push(optionId)
            } else {
                const index = value.indexOf(optionId);
                if (index > -1) {
                    value.splice(index, 1);
                }
            }
            onChange(value);
        }else{
            value=optionId;
            onChange(value);
        }

    }

    return (
        <FieldWrapper {...props}>
            <fieldset>
                <legend>{label}</legend>
                {options.map(option => {

                    const optionLabel = option.label;
                    const optionId = option.id;
                    const key = option.hasOwnProperty('key') ? option.key : optionId;
                    const isChecked = 'radio' === fieldType ? value === optionId : value.includes(optionId);

                    return (<RadioOrCheckboxControl
                        fieldId={optionId}
                        key={key}
                        label={optionLabel}
                        fieldType={fieldType}
                        value={isChecked}
                        onChange={() => {
                            changeHandler(optionId, !isChecked)
                        }}
                        onBlur={onBlur}
                    />);
                })}
            </fieldset>
        </FieldWrapper>
    );
}


export const fieldFactory = (
    field, onChange, onBlur, wrapperClassNames, MessageZone
) => {
    const {
        fieldType,
        render,
        required,
        isRequired
    } = field;

    let {attributes} = field;

    function isFieldRequired() {
        return required || isRequired;
    }

    if (!attributes || undefined === typeof attributes) {
        attributes = {};
    }
    if (isFieldRequired()) {
        attributes.required = true;
    }

    if (render) {
        return React.createElement(render, field);
    }

    let props = {
        ...field,
        wrapperClassNames,
        onChange,
        onBlur,
        required: isFieldRequired(),
        isRequired: isFieldRequired()
    };

    switch (fieldType) {
        case FORM_FIELDS_AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER : 
            props = {...props, fieldType};
            return <FormFieldsAutoComplete {...props } />;
            
        case AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER : 
            props = {...props, fieldType};
            return <AutoCompleteField {...props } />;
        case "checkboxes":
            props = {...props, fieldType: 'checkbox'};
            return (
                <RadioOrCheckboxFieldSet { ...props}/>
            );

        case "radios":
            props = {...props, fieldType: 'radio'};

            return (
                <RadioOrCheckboxFieldSet { ...props}/>

            );

        case "textarea":
            return (
                <TextAreaField
                    {...props}
                />
            );
        case "hidden":
            return (
                <HiddenField
                    {...props}
                />
            );
        case "radio":
            return (
                <RadioField
                    {...props}
                />
            );
        case "checkbox":
            return (
                <CheckboxField
                    {...props}
                />
            );
        case "select":
        case "dropdown":
            return (
                <SelectField
                    {...props}
                />
            );
        case "button":
            const inside = props.hasOwnProperty('children') ? props.children : props.value;
            props = {...props};
            return  <ButtonField {...props } >{inside}</ButtonField>
        case "submit":
            delete field.value;
            delete field.onBlur;
            delete field.onChange;
            return <SubmitButton {...props} />;
        case "text":
        case "email":
        case "number":
        case "input":
        default:
            if (isValidHtml5type(fieldType)) {
                if (field.html5type !== fieldType) {
                    field = {...field, html5type: fieldType};
                }
            } else {
                field.html5type = "text";
            }

            return (
                <InputField
                    {...{
                        ...props,
                        field,
                    }}
                />
            );
    }
};
