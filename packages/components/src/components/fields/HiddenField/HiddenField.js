import {fieldClassNames, FieldWrapper} from "../../..";
import React from "react";
import {parseAttributes} from "../util";

export const HiddenField = ({value,fieldId,onChange,attributes,wrapperClassNames}) => {
    const fieldType = 'hidden';
    const _attributes = parseAttributes(attributes, fieldType);


    return (
        <FieldWrapper
            fieldType={fieldType}
            fieldId={fieldId}
            wrapperClassNames={wrapperClassNames}
        >
            <input
                className={fieldClassNames(fieldType)}
                type={'hidden'}
                id={fieldId}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                {..._attributes}
            />
        </FieldWrapper>
    )
}
