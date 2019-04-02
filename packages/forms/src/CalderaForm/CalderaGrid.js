import PropTypes from 'prop-types';
import React, {createElement, Fragment} from 'react';
import classNames from 'classnames';
import {ConditionalState} from "./state/ConditionalState";
import {Column, Row, FieldArea} from '@calderajs/components';
/**
 *
 * @param rows
 * @param onAnyChange Function that runs when any supplied field value changes. Current field values are passed to callback.
 * @param onAnyBlur Function that runs when any field inside of this layout is blurred. Current field values are passed to callback.
 * @param {*} fieldValues Current field values used in layout. {fieldId: fieldValue}
 * @param {*} fieldErrors Current field errors. {fieldId: 'Invalid!'}
 * @param {*} fieldTouched
 * @param {function} setFieldValue
 * @return {*}
 * @constructor
 */
export const CalderaGrid = ({
								rows,
								onAnyChange,
								onAnyBlur,
								fieldValues,
								fieldErrors,
								fieldTouched,
								setFieldValue,
								conditionalState,
								applyConditionalRules
							}) => (
	<Fragment>
		{rows.map(row => {
			const {rowId, columns, render} = row;

			if (render) {
				return createElement(render, {
					...row,
					key: rowId
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
							key
						} = column;
						if (render) {
							return createElement(render, {
								...column,
								key: columnId
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
									const {fieldId, render, key} = field;
									field.value = fieldValues[fieldId];

									const _key = render ? key : fieldId;
									return (
										<FieldArea
											render={render}
											key={_key ? _key : `${columnId}-${fieldId}`}
											field={field}
											onChange={newValue => {
												conditionalState.setValue(fieldId, newValue);
												applyConditionalRules();
												setFieldValue(
													fieldId,
													conditionalState.getValue(fieldId),
													true
												);
												onAnyChange(fieldValues);
											}}
											onBlur={onAnyBlur}
											fieldErrors={fieldErrors}
											fieldsTouch={fieldTouched}
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
);

CalderaGrid.propTypes = {
	applyConditionalRules: PropTypes.func,
	conditionalState: PropTypes.instanceOf(ConditionalState),
	rows: PropTypes.array,
	onAnyChange: PropTypes.func,
	onAnyBlur: PropTypes.func,
	fieldValues: PropTypes.object,
	fieldErrors: PropTypes.object,
	fieldTouched: PropTypes.object,
	setFieldValue: PropTypes.func
};

const _noop = () => {
};
CalderaGrid.defaultProps = {
	onAnyChange: _noop,
	onAnyBlur: _noop,
	setFieldValue: _noop,
	fieldValues: {}
};
