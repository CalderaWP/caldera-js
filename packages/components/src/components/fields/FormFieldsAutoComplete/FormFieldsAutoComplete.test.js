import * as React from 'react';
import {render, fireEvent, cleanup} from 'react-testing-library';

import {FormFieldsAutoComplete} from './FormFieldsAutoComplete';
import {textField,checkboxField} from "../../../factory";
const  form = {
    id: 'test',
    fields: [
        checkboxField,
        textField
    ]
};

describe('FormFieldsAutoComplete  component', () => {
    let onChange;
    beforeEach(() => {
        onChange = jest.fn();
    });
    afterEach(cleanup);
    it('Matches snapshot with form', () => {
        expect(render(
            <FormFieldsAutoComplete
                label={'Select A Field'}
                onChange={onChange}
                fieldId={'selection-field'}
                form={form}
            />
        )).toMatchSnapshot();
    });

    it('Matches snapshot when form has no fields', () => {
        expect(render(
            <FormFieldsAutoComplete
                label={'Select A Field'}
                onChange={onChange}
                fieldId={'selection-field'}
                form={{
                    id: '1',
                    fields: []
                }}
            />
        )).toMatchSnapshot();
    });


    test('calls onChange prop when clicked', () => {
        const {container} = render(
            <FormFieldsAutoComplete
                label={'Select A Field'}
                onChange={onChange}
                fieldId={'selection-field'}
                form={form}
            />
        );
        fireEvent.change(container.querySelector('input'),{ target: { value: textField.fieldId} });
        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith(textField.fieldId)

    });
});

