import React, {useState,useEffect, Fragment} from 'react';
import useHover from 'react-use';
import {MagicField} from '../MagicField/MagicField';
import {SelectField,ButtonField} from '@calderajs/components';
import {ConditionalGroupTop} from './ConditionalGroupTop';
const SelectFormField = ({fields,value,onChange,label}) => {
    const options = fields.forEach( field => {
        return {value: field.id,label:field.label}
    });
    return <SelectField
            options={options}
            hideLabel
            label={label}
            value={value}
            onChange={onChange}
        />

}
const comparisonOptions = [ 
    ['is', 'Is' ],
    [ 'isnot', 'Is Not' ],
    [ 'greater', 'More Than' ],
    [ 'smaller', 'Smaller Than'],
    ['startswith', 'Begins With' ],
    ['endswith', 'Ends With' ],
    [ 'contains', 'Contains' ]
];

const ConditonalEditorLine = ({fields,line,onChange,magics,isFirst}) => {
    const displayInline = {display: 'inline'};
    const {compare,value,parent,field,id} = line;
    const setCompareType = compare => onChange({...line,compare});
	return (
        <div className={`caldera-condition-line condition-line-${id}`}>
            <span style={{display: 'inline-block'}} >
                {isFirst ? 'if' : 'and'}
            </span>
            <div>
                <SelectFormField
                    onChange={field => onChange({...line,field})}
                    style={displayInline}
                    fields={fields}
                    value={field}
                    label={'Comparison Field'}
                    fieldId={`compare-field-${id}`}
                />
                <SelectField
                    onChange={compare => onChange({...line,compare})}
                    style={displayInline}
                    options={comparisonOptions}
                    value={compare}
                    label={'Comparison Type'}
                    fieldId={`compare-type-${id}`}
                />
                <MagicField
                    style={displayInline}
                    magics={magics}
                    value={value}
                    onChange={value => onChange({...line,value})}
                    label={'Comparison Value'}
                    fieldId={`compare-value-${id}`}
                />
            </div>
        </div>		
	);
};

const ConditionalEditorLines = ({fields,lines,onChange,addGroup,magics}) =>  (
    <div className="caldera-condition-group caldera-condition-lines">
        {Object.keys(lines).map( lineKey => 
            <ConditonalEditorLine 
                magics={magics}
                line={{...lines[lineKey],id:lineKey}}
                fields={fields}
                onChange={(line) => {
                    onChange({
                        ...lines,
                        [lineKey]: line,
                    })
                } }
                isFirst={Object.keys(lines).indexOf(lineKey) === lines.length - 1 }
            /> 
        )}
        <ButtonField 
                className="button button-small"
                onClick={addGroup}
            >
                Add Condition
        </ButtonField>
    </div>
);


const RemoveCondition = ({onClick}) => ( 
    <ButtonField 
        onClick={onClick}
    >
        Remove Condition
    </ButtonField>
);


function randomString(prefix){
    return prefix + [Math.random(),Math.random(),Math.random()].join();
}

function addLine(lines,parent = null){
    const lineId = randomString('cl');
    return {
        ...lines,
        [lineId]: {
            parent,
            field: '',
            compare: '',
            value: '' 
    }};
};

function addGroup(condition){
    const groupId = randomString('rw');
    return {

        ...condition,
        group: { 
            ...condition.group,
            [groupId]: addLine( {}, groupId )
        }
}
}

export const ConditionalEditor = ({ condition, onChange, fields, magics  }) => {
    const {
         name,
        group,
        id,
        type
    } =  condition;
   
    
	const onChangeName = name => onChange({ ...condition, name });
    const onChangeType = type => onChange({ ...condition, type });
    
    const addLine = () => console.log(addLine(condition.group));
    const addGroup = () => addGroup(condition);
    const topProps = {onChangeName,onChangeType,id,type,name,addLine};
    const groupIds = Object.keys(group);
    const onEditLines = lines => {
    
        onChange({...condition,group:lines,felds});
    }

	return (
		<div className="caldera-editor-condition-config caldera-forms-condition-edit">
            <ConditionalGroupTop { ...topProps } />
            {groupIds.map( groupId => {
                const isLast = groupIds.indexOf(  groupId ) === groupIds.length -1
                ? true : false;
                return (
                    <Fragment>
                        <ConditionalEditorLines
                            lines={group[groupId]}
                            key={groupId} 
                            onChange={onEditLines} 
                            fields={fields}
                            addLine={addLine}
                            addGroup={addGroup}
                            magics={magics}
                        />
                        { ! isLast && <span>or</span> }
                    </Fragment> 
                )
            })}
		</div>
	);
};