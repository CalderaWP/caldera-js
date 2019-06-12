import React from 'react';
import {InputField,SelectField,ButtonField} from '@calderajs/components';

export const ConditionalGroupTop = ({onChangeName,onChangeType,id,type,name,addLine}) => {
    return (
        <div className={'caldera-condition-group caldera-condition-lines'} >
            <div className={`condition-point-${id}`}>
                <InputField
                    label={'Name'}
                    html5type={'text'}
                    onChange={onChangeName}
                    value={name}
                    fieldId={`condition-group-name-${id}`}
                />
                <SelectField
                    label={'Type'}
                    onChange={onChangeType}
                    value={type}
                    fieldId={`condition-group-type-${id}`}
                    options={[
                        {
                            value: 'show',
                            label: 'Show',
                        },
                        {
                            value: 'hide',
                            label: 'Hide',
                        },
                        {
                            value: 'disable',
                            label: 'Disable',
                        },
                    ]}
                />
                {type && (
                    <ButtonField
                        onClick={addLine}
                        className="pull-right button button-small"
                    >
                        Add Conditional Line
                    </ButtonField>
                )}
              
                            
            </div>
        </div>
    );
};