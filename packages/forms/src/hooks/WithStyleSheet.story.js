import {storiesOf} from "@storybook/react";
import {CalderaForm} from "../CalderaForm";
import React from 'react';
import {
    emailField,
    textField,
    submitButton,

} from "../CalderaForm/fields.fixtures";
import {WithStylesheet} from "./WithStylesheet";


const form = {
    rows: [
        {
            rowId: 'r1',
            columns: [
                {
                    fields: [emailField.fieldId],
                    width: '1/2',
                    columnId: '1aaaaa'
                },
                {
                    fields: [textField.fieldId],
                    width: '1/4',
                    columnId: '1b'
                }
            ]
        },
        {
            rowId: 'r2',
            columns: [
                {
                    fields: [submitButton.fieldId],
                    width: '1',
                    columnId: '1r2'
                }
            ]
        }
    ],
    fields: [
        emailField,
        textField,
        submitButton
    ],

};

storiesOf('With Stylesheet', module).add('Forms', () => {
    const Component =  <CalderaForm
        form={form}
        onSubmit={(values, actions) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }, 1000);
        }}
    />;
    return (

    <WithStylesheet Component={Component} Loading={'Loading'} href={'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'} />

)});
