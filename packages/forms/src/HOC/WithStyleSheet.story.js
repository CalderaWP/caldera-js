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

    return (

    <WithStylesheet Loading={'Loading'} href={'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'} >
        <div className={'container'}>
            <div className={'row'}>
                <input
                    className="btn btn-primary"
                    type="submit"
                    value="Click Me Primary Button"
                />
            </div>

            <div className={'row'}>
                <div className={'col-sm-4'}>1 of 3</div>
                <div className={'col-sm-4'}>2 of 3</div>
                <div className={'col-sm-4'}>3 of 3</div>
            </div>
        </div>
    </WithStylesheet>

)});
