import React, { Fragment } from 'react';

import {TextInput, SelectField} from '@calderajs/components'
const NewConditionalGroup = ({placeholder,name,onChange}) => {

    return (
        <TextInput
        label={'New Group'}
                        value={name}
                        onChange={onChange}
                          placeholder={placeholder}
                        style={{width:'100%'}}
                />
    );
};

NewConditionalGroup.defaultProps = { placeholder: 'New Group Name'};
const ConditionalsListItem = ({name,id,_open_condition,onChooseGroup}) => {
    const className = `caldera-condition-nav  ${id === _open_condition ? 'active' : ''}  caldera-forms-condition-group condition-point-${id}`;
    return (
        <li className={className} >
            <ButtonField
                    onClick={onChooseGroup}
                    variant={'secondary'}
                >
                {name}
            </ButtonField>
        </li>
    );
}
const ConditionalsList = ({conditions}) => {
    const panelStyle = {marginBottom: '32px'};
    return (
        <div className="caldera-editor-conditions-panel" style={panelStyle} >
		<ul className="active-conditions-list">
			{conditions.map( condition => <ConditionalsListItem key={condition.id} condition={condition} /> )}
		</ul>
	</div>
    )
};

const MagicList = ({fields,systemTags,value,onChange})=> {
    const [whichList,setWhichList] = React.useState('fields');
    const fieldId = '---';

    React.useEffect( () => {
        const options =  fields.map(field => {
            const {label,ID} = field;
            return {
                label,
                value: ID,
            };
        });
    },[whichList]);
  
    
    if( 'fields' === whichList ){
        return <AutoCompleteField
			label={'Choose Field'}
			onChange={onChange}
			fieldId={fieldId}
			value={value}
			onBlur={onBlur}
			required={required}
			options={options}
			RenderItem={RenderItem}
		/>
    }

};
const ConditonalsEditorLine = ({}) => {

    return (
        <div className="caldera-condition-group caldera-condition-lines">
        <div className={`caldera-condition-line condition-line-${id}`}>
            <span style="display:inline-block;">
                {isFirst ? 'if' : 'and' }
            </span>
            <SelectField

            />
            
        </div>
    
    </div>
    );

};
const ConditionalsEditors = ({condition,fields,onChange}) => {
    const {type,name,group} = condition;
    const onChangeName = name => onChange({...condition,name});
    const onChangeType = type => onChange({...condition,type});
    const addLine = () => console.log(condition);
    return (
        <div className="caldera-editor-condition-config caldera-forms-condition-edit">
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
                            label: 'Show'
                        },
                        {
                            value: 'hide',
                            label: 'Hide'
                        },
                        {
                            value: 'disable',
                            label: 'Disable'
                        },
                    ]}
                />
                        {type && 
                            <ButtonField
                                onClick={addLine}
                                className="pull-right button button-small"
                            >
                                Add Conditional Line
                            </ButtonField>
                        
                        }
                    </div>
                </div>
                 
               
    );
						
					
							
                               
								

				
}

export const Conditionals = ({_open_condition,conditions,fields}) => {
    const marginBottom32 = {marginBottom: '32px'};
    return (
        <div id="caldera-forms-conditions-panel">
        <input type="hidden" name="_open_condition" value={_open_condition} />
        <ConditionalsList conditions={conditions} />
        </div>
    
	
		
    )
}