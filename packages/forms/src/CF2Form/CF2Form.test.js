import {CF2Form} from "./CF2Form";
import React, {useEffect} from "react";
import {render, fireEvent, getByTestId} from "react-testing-library";


test('the data is peanut butter', done => {
    expect.assertions(1);
    function fetchData(callback){
        callback('peanut butter')
    }
    function callback(data) {
        expect(data).toBe('peanut butter');
        done();
    }

    fetchData(callback);
});

describe('CF2Form', () => {


    it("calls effect", () => {
        return new Promise(resolve => {
            render(<EffectfulComponent effect={resolve}/>);
        });
    });

    function EffectfulComponent({effect}) {
        useEffect(effect);

        return null;
    }


    let axios = {
        post: jest.fn((config) => Promise.resolve({data: {}})),
        request: jest.fn((config) => Promise.resolve({data: {}}))
    };

    beforeEach(() => {
        axios = {
            post: jest.fn((config) => Promise.resolve({data: {}})),
            request: jest.fn((config) => Promise.resolve({data: {}}))
        };
    });

    const submitButton = {
        fieldId: 'fld_7908577',
        label: 'Click Me',
        fieldType: 'submit',
    };

    const formConfig = {
        ID: 'cf222',
        rows: [
            {
                rowId: 'r3',
                columns: [
                    {
                        fields: [submitButton.fieldId],
                        width: '1',
                        columnId: `r2-${submitButton.fieldId}`
                    },
                ]
            }
        ],
        fields: [
            submitButton
        ],
        conditionals: []
    };

    it('Matches snapshot with cf2 classnames used', () => {
        expect(render(<CF2Form formConfig={formConfig} axios={axios} useCf1ClassNames={true} _tokens={{
            _cf_verify: 'a',
            _sessionPublicKey: 'b'
        }}/>)).toMatchSnapshot();
    });

    it.skip('Matches snapshot', () => {
        expect(render(<CF2Form formConfig={formConfig} axios={axios}/>)).toMatchSnapshot();
    });

    it('calls the onReady', async (done) => {
        expect.assertions(1);
        const onReady = new Promise((resolve) => {
            resolve();
            expect(1).toBe(1);
            done();
        });
        const component = render(
            <CF2Form
                formConfig={formConfig}
                axios={axios}
                onReady={onReady}
                _tokens={{
                    _cf_verify: 'a',
                    _sessionPublicKey: 'b'
                }}
            />
        );
    });


    it.skip('Snapshot with tokens', async () => {
        expect(render(
            <CF2Form
                apiRootUri={'https://localhost/'}
                formConfig={formConfig}
                axios={axios}
                _tokens={{
                    _cf_verify: 'a',
                    _sessionPublicKey: 'b'
                }}
            />)
        ).toMatchSnapshot();

    });
});
