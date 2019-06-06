import React, {Component, Fragment, createElement} from 'react';
import PropTypes from 'prop-types';
import {Processors, processorsCollectionPropType} from './Processors/Processors';
import {TabPanel} from '@wordpress/components';
import {Row, Column,fieldAreaFactory} from "@calderajs/components";
import {processorTypesPropType} from './propTypes';
import {MainSection} from './MainSection';
import {defaultProcessorTypes} from './Processors/processorTypes/defaultProcessorTypes';
import {FormEntryViewer} from "..";

export class FormEditor extends Component {
	state = {
		activeTab: 'processors',
		newProcessorType: '', //the next processor to be created will use this type
	};

	onSetTab = activeTab => {
		if( 'entries' !== activeTab ){
			this.props.setEntryViewerOpen(false);
		}else{
			this.props.setEntryViewerOpen(open);
		}
		this.setState({activeTab});
	};

	updateProcessors = processors => {
		const {updateForm, form} = this.props;
		updateForm({
			...form,
			processors
		});
	};

	getFormProcessors = () => {
		const {form} = this.props;
		return form.processors ? form.processors : [];
	};

	getFormFields = () => {
		const {form} = this.props;
		return form.fields ? form.fields : [];
	};

	tabs = [
		{
			name: 'editor',
			title: 'Layout',
			className: 'caldera-forms-editor-layout-tab-btn',
			classNameForComponent: 'caldera-forms-editor-layout'
		},
		{
			name: 'entries',
			title: 'Entries',
			className: 'caldera-forms-editor-entries-tab-btn',
			classNameForComponent: 'caldera-forms-editor-entries'
		},
		{
			name: 'processors',
			title: 'Processors',
			className: 'caldera-forms-editor-processors-tab-btn',
			classNameForComponent: 'caldera-forms-editor-processors'

		},
		{
			name: 'mailer',
			title: 'Mail',
			className: 'caldera-forms-editor-mailer-tab-btn',
			classNameForComponent: 'caldera-forms-editor-mailer'
		},
		{
			name: 'settings',
			title: 'Settings',
			className: 'caldera-forms-editor-settings-tab-btn',
			classNameForComponent: 'caldera-forms-editor-settings'
		},
	];

	getTabs(){
		const {hideTabs} = this.props;
		if( ! hideTabs.length ){
			return this.tabs;
		}

		return  this.tabs.filter( tab =>!hideTabs.includes(tab.name) );
	}


	setNewProcessorType = (newProcessorType) => this.setState({newProcessorType});

	getProcessorTypes = (processorTypes,defaultProcessorTypes) =>{
		defaultProcessorTypes.forEach(processorType => {
			console.log(processorType);
		});
		
		return [
			...processorTypes,
			...defaultProcessorTypes
		];
	};
	render() {
		const {form, processorTypes, updateForm,entries,entryViewerOpen} = this.props;
		const theProcessorTypes = this.getProcessorTypes(processorTypes,defaultProcessorTypes);
		console.log(theProcessorTypes);
		return (
			<div>
				<Row>
					<Column>
						<p>{form.name}</p>
					</Column>
				</Row>
				<TabPanel
					className="caldera-processor"
					activeClass="active-tab"
					onSelect={this.onSetTab}
					initialTabName={'processors'}
					tabs={this.getTabs()}
				>
					{tab => {
						let  {name, classNameForComponent, title} = tab;
						if (entryViewerOpen) {
							 name = this.tabs.find( tab => 'entries' === tab.name );
							 console.log(name);
						}

						if ('processors' === name) {
							return (
								<MainSection
									className={classNameForComponent}
									title={title}
								>
									<Processors
										processorTypes={theProcessorTypes}
										processors={this.getFormProcessors()}
										form={form}
										formFields={this.getFormFields()}
										updateProcessors={this.updateProcessors}
									/>
								</MainSection>
							);
						}
						if ('settings' === name) {
							const nameField = {
								fieldType: 'text',
								value: form.name,
								label: 'Form Name',
								fieldId: 'formName',
								required: true,
							};
							return (
								<MainSection
									className={classNameForComponent}
									title={title}
								>
									{fieldAreaFactory(
										nameField,
										(name) => {
											updateForm({
												...form,
												name
											})
										}
									)}
								</MainSection>
							)
						}
						if ('entries' === name) {
							let entryViewerProps ={
								form,
								noItemsMessage: `No Entries Found For ${form.id}`,
								entries: false,//@todo change to props.entries
							};

							return (
								<MainSection
									className={classNameForComponent}
									title={title}
								>
									<FormEntryViewer {...entryViewerProps} />
								</MainSection>
							)
						}
						return (
							<MainSection
								className={classNameForComponent}
								title={title}
							>
								{tab.title}
							</MainSection>
						);
					}}
				</TabPanel>
			</div>
		);
	}
}


FormEditor.propTypes = {
	processorsTypes: processorTypesPropType,
	updateForm: PropTypes.func,
	form: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		fields: PropTypes.array,
		conditionals: PropTypes.array,
		settings: PropTypes.array,
		processors: processorsCollectionPropType,
	}),
	hideTabs: PropTypes.array,
	entryViewerOpen: PropTypes.bool,
	setEntryViewerOpen: PropTypes.func
};

FormEditor.defaultProps = {
	processorTypes: [],
	setEntryViewerOpen: () => {},
	updateForm: () => {},
	hideTabs: [],
	entryViewerOpen: false,
};

