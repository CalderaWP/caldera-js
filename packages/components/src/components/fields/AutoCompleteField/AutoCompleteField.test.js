import * as React from 'react';
import {render, fireEvent, cleanup} from 'react-testing-library';

import {AutoCompleteField} from './AutoCompleteField';
import {SelectField} from "..";

describe('AutoCompleteField  component', () => {
    let onChange;
    beforeEach(() => {
        onChange = jest.fn();
    });
    afterEach(cleanup);
    it('Matches snapshot with items', () => {
        expect(render(
            <AutoCompleteField
                label={'Select A Hat'}
                onChange={onChange}
                description={'selection of hats'}
                fieldId={'selection-hats'}
                required={true}
                options={[{value: 1, label: 'One'}, {value: 2, label: 'Two'}]}
            />
        )).toMatchSnapshot();
    });

    it('Matches snapshot with no items', () => {
        expect(render(
            <AutoCompleteField
                label={'Select A Hat'}
                onChange={onChange}
                description={'selection of hats'}
                fieldId={'selection-hats'}
            />
        )).toMatchSnapshot();
    });


    test('calls onChange prop when clicked', () => {
        const {container} = render(
            <AutoCompleteField
                label={'label'}
                onChange={onChange}
                description={'selection of hats'}
                fieldId={'selection-hats'}
                required={false}
                options={[{value: '1one', label: 'One'}, {value: '2', label: 'Two'}]}
            />
        );
        fireEvent.change(container.querySelector('input'),{ target: { value: '1one' } });
        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith('1one')

    });
});

