import React, { Fragment, Component } from 'react';
import { TabPanel } from '@wordpress/components';
import { Row, Column,SelectFieldl,InputField } from "@calderajs/components";
import { HorizontalForm } from"@calderajs/forms";
import PropTypes from 'prop-types';
import {AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER} from "../../index";


const ProcessorLabel = ({label}) => <div>{label}</div>;

const ProcessorLabelEdit = ({label,onChange,id,value}) => (
	<InputField 
		label={'Processor Label'} 
		value={value} onChange={onChange} 
		html5type={'text'} 
		fieldId={`processor-label-${id}`}
	/>
);
export class Processor extends Component {
	state = {
		activeTab: 'settings'
	};

	onSetTab = activeTab => {
		this.setState({ activeTab });
	};

	tabs = [
		{
			name: 'settings',
			title: 'Settings',
			className: 'caldera-processor-settings-tab-btn'
		},
		{
			name: 'conditionals',
			title: 'Conditionals',
			className:
				'caldera-processor-conditionals-tab-btn'
		}
	];

	/**
	 * Prepare props for the processor editing form
	 *
	 * @return {Processor.props}
	 */
	formProps = () => {
		let props = {...this.props};
		const {fields} = this.props;
		fields.forEach( (field,i) => {
			const {fieldType} = field;
			if( AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER === fieldType ){
				props.options = props.hasOwnProperty('options' ) ? props.options : [];
				props.options[i] = [
					{'value':null, label: 'Should be field select'}
				];
			}
		});
		return props;
	};

	render() {
		const { onClose, onRemove,label} = this.props;
		return (
			<Fragment>
				<Row>
					<TabPanel
						className="caldera-processor"
						activeClass="active-tab"
						onSelect={this.onSetTab}
						initialTabName={'settings'}
						tabs={this.tabs}
					>
						{() => {
							const {activeTab} = this.state;
							const tab =  this.tabs.find( t => t.name === activeTab );
							const { name } = tab;
							if ('settings' === name) {
								return (
									<div>
										<ProcessorLabel label={label} />
										<HorizontalForm
										{...this.formProps()}
										className={'caldera-processor-settings'}
									/>
									</div>
									
								);
							}
							return (
								<div
									className={'caldera-processor-conditionals'}
								>
									Conditionals
								</div>
							);
						}}
					</TabPanel>
				</Row>
				<Row>
					<Column width={'1/2'}>
						<button
							className={'caldera-processor-close'}
							onClick={onClose}>
							Close
						</button>
					</Column>
					<Column width={'1/2'}>
						<button
							className={'caldera-processor-remove'}
							onClick={onRemove}>
							Remove
						</button>
					</Column>
				</Row>
			</Fragment>
		);
	}
}

//should have label!
Processor.propTypes = {
	...HorizontalForm.propTypes,
	initialActiveTab: PropTypes.string,
	onRemove: PropTypes.func,
	type: PropTypes.string,
	id: PropTypes.string,
};

Processor.defaultProps = {
	...HorizontalForm.defaultProps,
	initialActiveTab: 'settings'
};
