import React, { Fragment, Component } from 'react';
import { HorizontalForm } from '../../HorizontalForm/HorizontalForm';
import { TabPanel } from '@wordpress/components';
import { Row, Column,FormFieldsAutoComplete } from"@calderawp/components";
import PropTypes from 'prop-types';

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
		let {props} = this;
		const {fields,form} = this.props;
		const formFields = form.fields;
		fields.forEach( (field,i) => {
			const {fieldType} = field;
			if( FormFieldsAutoComplete.IDENTIFIER === fieldType ){
				props.fields[i] = {
					...field,
					form
				}
			}
		});
		return props;
	};

	render() {
		const { onClose, onRemove } = this.props;
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
									<HorizontalForm
										{...this.formProps()}
										className={'caldera-processor-settings'}
									/>
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
