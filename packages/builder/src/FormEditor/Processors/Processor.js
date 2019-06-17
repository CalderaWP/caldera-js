import React, { Fragment, Component } from 'react';
import { TabPanel } from '@wordpress/components';
import {
	Row,
	Column,
	InputField,
	FORM_FIELDS_AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER,
} from '@calderajs/components';
import { HorizontalForm } from '@calderajs/forms';
import PropTypes from 'prop-types';
import { AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER } from '@calderajs/components';

const ProcessorLabel = ({ label }) => <div>{label}</div>;

const ProcessorLabelEdit = ({ label, onChange, id }) => (
	<InputField
		label={'Processor Label'}
		value={label}
		onChange={onChange}
		html5type={'text'}
		fieldId={`processor-label-${id}`}
	/>
);

const SettingsPanel = ({
	label,
	id,
	type,
	formProps,
	onEditLabel,
}) => {
	return (
		<div>
			<ProcessorLabel label={label ? label : type} />
			<ProcessorLabelEdit label={label} onChange={onEditLabel} id={id} />
			<HorizontalForm
				{...formProps}
				className={'caldera-processor-settings'}
			/>
		</div>
	);
};

export class Processor extends Component {
	state = {
		activeTab: 'settings',
	};

	onSetTab = activeTab => {
		this.setState({ activeTab });
	};

	tabs = [
		{
			name: 'settings',
			title: 'Settings',
			className: 'caldera-processor-settings-tab-btn',
		},
		{
			name: 'conditionals',
			title: 'Conditionals',
			className: 'caldera-processor-conditionals-tab-btn',
		},
	];

	/**
	 * Prepare props for the processor editing form
	 *
	 * @return {Processor.props}
	 */
	formProps = () => {
		const { form } = this.props;
		let props = { ...this.props };
		props.fields.map(field => {
			if (
				FORM_FIELDS_AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER ===
				field.fieldType
			) {
				field.form = form;
			}
			return field;
		});
		return props;
	};

	onEditLabel = label => {
		this.props.onChange({ label });
	};



	render() {
		console.log(this.props.conditonalPanel);
		const {
			onClose,
			onRemove,
			conditionalPanel,
		} = this.props;
		return (
			<Fragment>
				<Row>
					<TabPanel
						className="caldera-processor"
						activeClass="active-tab"
						onSelect={this.onSetTab}
						initialTabName={'settings'}
						tabs={
							this.props.conditonalPanel
								? this.tabs
								: [this.tabs[0]]
						}
					>
						{() => {
							const { activeTab } = this.state;
							const tab = this.tabs.find(
								t => t.name === activeTab
							);
							const { name } = tab;
							if ('settings' === name) {
								return (
									<SettingsPanel
										{...this.props}
										formProps={this.formProps()}
										onEditLabel={this.onEditLabel}
									/>
								);
							}
							return (
								<div
									className={'caldera-processor-conditionals'}
								>
									{conditionalPanel}
								</div>
							);
						}}
					</TabPanel>
				</Row>
				<Row>
					<Column width={'1/2'}>
						<button
							className={'caldera-processor-close'}
							onClick={onClose}
						>
							Close
						</button>
					</Column>
					<Column width={'1/2'}>
						<button
							className={'caldera-processor-remove'}
							onClick={onRemove}
						>
							Remove
						</button>
					</Column>
				</Row>
			</Fragment>
		);
	}
}

Processor.propTypes = {
	...HorizontalForm.propTypes,
	label: PropTypes.string,
	initialActiveTab: PropTypes.string,
	onRemove: PropTypes.func,
	type: PropTypes.string,
	id: PropTypes.string,
	form: PropTypes.shape({
		id: PropTypes.string.isRequired,
		fields: PropTypes.array.isRequired,
	}).isRequired,
};

Processor.defaultProps = {
	...HorizontalForm.defaultProps,
	initialActiveTab: 'settings',
	conditionalPanel: null,
};
