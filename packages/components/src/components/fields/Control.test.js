import React from 'react';
import {Control} from "./Control";
import {shallow} from 'enzyme';

test.only( 'Control change handler', () => {
    const onChange = jest.fn();
    const componet = shallow(<Control fieldType={'input'} onChange={onChange} fieldId={'test-11'} /> );
    console.log(componet.debug());
})
