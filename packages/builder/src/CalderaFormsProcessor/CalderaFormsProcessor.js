import React, {useState} from 'react';
import {Processor} from '../FormEditor/Processors/Processor';
import {ConditionalEditor} from '../Conditionals/ConditionalEditor';
import PropTypes from 'prop-types';
const calderaFormsProcessor = processor => {
    return {
            ...{
                id: '',
                label: '',
            fields:[],
            config: {},
            type: '',
            label: '',
            conditionals: [],
            typeLabel: '',
            form: {
                fields: [],
                ID: ''
            },
                
        },
        ...processor,
    };
};



export const CalderaFormsProcessor = ({   
        magics,
        processor,
        onChange,
        formFields
    }) => {
    processor = calderaFormsProcessor(processor);
    const {config,conditionals} = processor;

    const condition = conditionals;

    const condtionalEditorProps = {
        magics,
        condition,
        fields: formFields,
        onChange: conditionals => {
			onChange({ ...processor,conditionals })
		}

    }
    const props = {
        conditionalPanel(){ 
            return (
                <ConditionalEditor {...condtionalEditorProps} />
            )
        },
        initialValues: config,
        ...processor,
        onChange
    }

    return <Processor {...props } />
};

CalderaFormsProcessor.PropTypes = {
    magics: PropTypes.object.isRequired,
    processor: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    formFields: PropTypes.array.isRequired
}
