import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Row, fieldAreaFactory} from "@calderajs/components";

const AddProcessorButtonText = ({processorTypes,value}) => {
	const findProcessorLabel = type => {
		const processor = processorTypes.find( processorType => value === processorType.type );
		if(  processor && processor.hasOwnProperty('typeLabel') ){
			return processor.typeLabel;
		}
		return type; 

	}
	if( ! value ){
		return <Fragment>Choose Processor Type</Fragment>
	}

	const label = findProcessorLabel(value);
	return <Fragment>{ `Add ${label} Processor`}</Fragment>
};

export const AddProcessor = (
	{
		setNewProcessorType,
		processorTypes,
		onCreate,
		children,
		value
	}
) => {
	const options = [];
	console.log(processorTypes)
	processorTypes.map(processorType => {
		options.push({
			value: processorType.type,
			label: processorType.hasOwnProperty( 'typeLabel') ? processorType.typeLabel : processorType.type
		});
	});

	const processorTypesField = {
		fieldType: 'select',
		label: 'Processor Type',
		fieldId: 'newProcessorType',
		required: true,
		options,
		onChange: setNewProcessorType,
		value,
	};

	
	

	return (
		<Fragment>
			{fieldAreaFactory(processorTypesField, setNewProcessorType)}
			<button 
				onClick={onCreate}
				disabled={!value}
			>
				<AddProcessorButtonText value={value} processorTypes={processorTypes}/>
			</button>
		</Fragment>
	)
};

AddProcessor.propTypes = {
	processorTypes: PropTypes.array,
	onCreate: PropTypes.func,
	setNewProcessorType: PropTypes.func,
	value: PropTypes.string
};

AddProcessor.defaultProps = {
	processorTypes: [],
	value: ''
};
