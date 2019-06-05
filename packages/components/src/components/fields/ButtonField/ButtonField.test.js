import * as React from 'react';
import {render,fireEvent,cleanup} from 'react-testing-library';

import {ButtonField} from './ButtonField';

describe('ButtonField  component', () => {
    let onClick;
    beforeEach(() => {
        onClick = jest.fn();
    });
    afterEach(cleanup);
    it('Shows children', () => {
        expect(render(
            <ButtonField
            >
                Click Me
            </ButtonField>
        )).toMatchSnapshot();
    });

    it('Fires on click event', () => {
        const { container } = render(
            <ButtonField
                label={'With Callback'}
                onClick={onClick}
                variant={'primary'}
            >
                Trigger Alert
            </ButtonField>
        );
        const input = container.querySelector('button')
        fireEvent.click(input);
        expect(onClick.mock.calls[0].length).toBe(1)

    });
});
