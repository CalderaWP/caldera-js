import { ConditionalState } from './state/ConditionalState';
import PropTypes from 'prop-types';
import React, {
	isValidElement,
	createElement,
	Fragment,
	Component,
} from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { updateRows } from './util/updateRows';
import {
	collectFieldValues,
	classNameService,
	Row,
	Column,
	FieldArea,
} from '@calderajs/components';
import { applyRuleToState } from './state/applyRule';

import classNames from 'classnames';

export class CalderaForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formRows: [],
			initialValues: {},
			conditionalState: null,
		};
	}

	/**
	/**
	 * Run conditional logic and update state
	 */
	applyConditionalRules = () => {
		const { form } = this.props;
		const { fields, rows, conditionals } = form;
		if (conditionals) {
			const conditionalState = this.state.conditionalState
				? this.state.conditionalState
				: new ConditionalState(collectFieldValues(fields));

			if (Array.isArray(conditionals)) {
				conditionals.forEach(rule => {
					applyRuleToState(rule, conditionalState);
				});
			} else if ('function' === typeof conditionals) {
				conditionals(conditionalState, form);
			} else {
				return; //no state change needed.
			}

			this.setState({
				formRows: updateRows(conditionalState, rows, fields),
				conditionalState,
			});
		}
	};

	/**
	 * On mount, calculate initial state and rows
	 */
	componentDidMount = () => {
		const { fields, rows } = this.props.form;
		const intialValues = collectFieldValues(fields);
		const conditionalState = this.state.conditionalState
			? this.state.conditionalState
			: new ConditionalState(intialValues);
		const formRows = updateRows(conditionalState, rows, fields);
		this.setState({ intialValues, formRows, conditionalState });
		this.applyConditionalRules(); //initial hide/show logic
	};

	renderForm = ({
		errors,
		status,
		touched,
		isSubmitting,
		handleChange,
		handleBlur,
		setFieldValue,
		handleSubmit,
		values,
	}) => {
		const { onSubmit, onChange, form } = this.props;
		const { state, applyConditionalRules } = this;
		const { conditionalState, formRows } = state;

		return (
			<form
				onSubmit={handleSubmit}
				className={classNameService.getFormElementClassNames(form.ID)}
			>
				<Fragment>
					{formRows.map(row => {
						const { rowId, columns, render } = row;

						if (render) {
							return createElement(render, {
								...row,
								key: rowId,
							});
						}

						return (
							<Row
								className={classNames('caldera-form-row')}
								key={rowId}
								id={rowId}
							>
								{columns.map(column => {
									const {
										padding,
										width,
										columnId,
										fields,
										render,
										key,
									} = column;
									if (render) {
										return createElement(render, {
											...column,
											key: columnId,
										});
									}
									return (
										<Column
											key={columnId}
											columnId={columnId}
											width={width}
											padding={padding}
										>
											{fields.map(field => {
												if (!field) {
													return;
												}
												const {
													fieldId,
													render,
													key,
												} = field;
												field.value = values[fieldId];

												const _key = render
													? key
													: fieldId;
												return (
													<FieldArea
														render={render}
														key={
															_key
																? _key
																: `${columnId}-${fieldId}`
														}
														field={field}
														onChange={newValue => {
															conditionalState.setValue(
																fieldId,
																newValue
															);
															applyConditionalRules();
															setFieldValue(
																fieldId,
																conditionalState.getValue(
																	fieldId
																),
																true
															);
															onChange(values);
														}}
														onBlur={handleBlur}
														fieldErrors={errors}
														fieldsTouch={touched}
													/>
												);
											})}
										</Column>
									);
								})}
							</Row>
						);
					})}
				</Fragment>
			</form>
		);
	};

	render() {
		const { onSubmit, form } = this.props;
		const { initialValues } = this.state;

		return (
			<div className={classNameService.getFormWrapperClassNames(form.ID)}>
				<Formik
					className={'caldera-form'}
					initialValues={initialValues}
					onSubmit={onSubmit}
					render={props => (
						<Fragment>{this.renderForm(props)}</Fragment>
					)}
				/>
			</div>
		);
	}
}

CalderaForm.propTypes = {
	form: PropTypes.shape({
		ID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	}),
	onSubmit: PropTypes.func,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	conditionals: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
};

const noop = () => {};
CalderaForm.defaultProps = {
	onChange: noop,
	onBlur: noop,
};
