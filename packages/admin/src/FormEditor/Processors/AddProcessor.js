import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Row, fieldAreaFactory} from "@calderajs/components";

export const AddProcessor = ({
								 setNewProcessorType,
								 processorTypes,
								 onCreate,
								 children,
								 value
							 }) => {
	const options = [
		{
			value: null,
			label: '--'
		}
	];

	processorTypes.map(processorType => {
		options.push({
			value: processorType.type,
			label: processorType.type
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
			<button onClick={onCreate}
					disabled={!value}
			>
				{children}
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
