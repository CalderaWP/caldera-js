import * as React from 'react';
import {render,fireEvent,cleanup} from 'react-testing-library';

import {CheckboxField} from './CheckboxField';

describe('Checkbox Field component', () => {
    let onChange;
    beforeEach(() => {
        onChange = jest.fn();
    });
    afterEach(cleanup);
    it('matches snapshot', () => {
        const component = render(
            <CheckboxField
                fieldId={'r1'}
                label={'Select A Hat!'}
                description={'selection of hats'}
                fieldId={'selection-hats'}
                options={[
                    {value: 100, label: 'Hat One'},
                    {value: 200, label: 'Hat Two'}
                ]}
            />
        );
        expect(component).toMatchSnapshot();
    });

    it('Fires on change event', () => {
        const { container } = render(
            <CheckboxField
                label={'Select A Hat'}
                onChange={onChange}
                description={'selection of hats'}
                fieldId={'selection-hats'}
                required={true}
                multiple={true}
                options={[
                    {value: 100, label: 'One'},
                    {value: 200, label: 'Two'}
                ]}
            />
        );
        const input = container.querySelector('input')
        const event = {target: {value: 200}};
        fireEvent.change(input, event);
        expect(input.value).toBe('200')

    });
});
