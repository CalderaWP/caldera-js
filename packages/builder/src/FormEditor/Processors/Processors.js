import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Processor} from "./Processor";
import {Row, fieldAreaFactory} from "@calderajs/components";
import {processorTypesPropType} from './processorTypesPropType';
import processorFactory from './processorTypes/processorFactory';
import {AddProcessor} from './AddProcessor';
import {defaultProcessorTypes} from "./processorTypes/defaultProcessorTypes";


export class Processors extends Component {

	state = {
		activeProcessorId: '',
		newProcessorType: ''
	};

	/**
	 * Set which processor is active
	 * @param activeProcessorId
	 */
	setActive = (activeProcessorId) => {
		this.setState({activeProcessorId});
	};

	/**
	 * Check if a processor is active by ID
	 * @param processorId
	 * @return {string|boolean}
	 */
	isActiveProcessor = (processorId) => {
		const {activeProcessorId} = this.state;
		return activeProcessorId && processorId === activeProcessorId;
	};

	/**
	 * When a change in value for a processor is received, send all processors up.
	 *
	 * @param processorId
	 * @param updatedProcessor
	 */
	handleProcessorChange = (processorId, updatedProcessor) => {
		const {processors, updateProcessors} = this.props;
		let processorIndex = processors.findIndex(processor => {
			return processorId === processor.id
		});
		if (-1 !== processorIndex) {
			let processor = processors[processorIndex];
			let update = [
				...processors.splice(processorIndex - 1, 1),
				{
					...processor,
					...updatedProcessor
				}
			];
			updateProcessors(update);
		}


	};

	/**
	 * When a processor is removed, send updated list to change handler.
	 *
	 * @param processorId
	 */
	handleRemoveProcessor = (processorId) => {
		const {processors, updateProcessors} = this.props;
		updateProcessors([...processors.filter(processor => {
			return processorId !== processor.id
		})]);
	};

	/**
	 * When a processor is added, create send update list to change handler

	 */
	handleCreateProcessor = () => {
		const {processors, updateProcessors} = this.props;
		const {activeProcessor,newProcessorType} = this.state;
		const newProcessor = processorFactory(newProcessorType,defaultProcessorTypes);
		const {id} = newProcessor;
		updateProcessors([...processors, newProcessor]);
		this.setState({activeProcessorId:id,newProcessorType: ''});
	};

	/**
	 * Set the type of the next processor to be created
	 *
	 * @param newProcessorType
	 * @return {*}
	 */
	setNewProcessorType = (newProcessorType) => this.setState({newProcessorType});

	/** @inheritDoc **/
	render() {
		const {activeProcessor,newProcessorType} = this.state;
		const {processors,processorTypes,form} = this.props;
		return (
			<div>
				<div>
					{processors.map(processor => {
						const {
							id,
							fields,
							config,
							type,
							label,
							conditionals
						} = processor;
						if (this.isActiveProcessor(id)) {
							return (
								<Fragment key={id}>
									<Processor
										form={form}
										className={`caldera-forms-active-processor-${id}`}
										fields={fields}
										conditionals={conditionals}
										initialValues={config}
										label={label}
										type={type}
										onChange={(fieldValues) => this.handleProcessorChange(id, fieldValues)}
										onRemove={() => this.handleRemoveProcessor(id)}
										onClose={() => this.setActive('')}
									/>
								</Fragment>
							)
						}
						return (
							<Row key={id}>
								<button
									className={`caldera-forms-choose-processor caldera-forms-choose-processor-${id}`}
									onClick={() => this.setActive(id)}
								>
									{label ? label : type}
								</button>
							</Row>

						)
					})}
				</div>
				<div>
					<AddProcessor
						setNewProcessorType={this.setNewProcessorType}
						processorTypes={processorTypes}
						value={newProcessorType}
						onCreate={this.handleCreateProcessor}
					>
						Add {! newProcessorType ? '' : newProcessorType } Processor
					</AddProcessor>
				</div>
			</div>
		);
	}
}

export const processorsCollectionPropType = PropTypes.arrayOf(
	PropTypes.shape({
		id: PropTypes.string,
		label: PropTypes.string,
		type: PropTypes.string,
		fields: PropTypes.array,
		config: PropTypes.object
	})
);

Processors.propTypes = {
	processorTypes: processorTypesPropType,
	processors: processorsCollectionPropType,
	updateProcessors: PropTypes.func,
	form: PropTypes.object,
	formFields: PropTypes.array
};

Processors.defaultProps = {
	processors: [],
	processorTypes: []
};
