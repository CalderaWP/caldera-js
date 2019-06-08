import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { CalderaForm } from "../CalderaForm/CalderaForm";

/**
 * Displays a form, one field per row
 *
 * @param fields
 * @param initialValues
 * @param onClose
 * @param onChange
 * @param instanceId
 * @return {*}
 * @constructor
 */
export const HorizontalForm = ({
	fields,
	initialValues,
	onClose,
	onChange,
	instanceId,
	conditionals,
}) => {
	const rows = [];
	let i = 0;
	fields.forEach(field => {
		rows.push({
			rowId: `${instanceId}-${i}`,
			columns: [
				{
					columnId: `c-${instanceId}-${i}`,
					fields: [field],
					width: "1",
				},
			],
		});
		i++;
	});
	const form = {
		id: `horizontal-form-${instanceId}`,
		ID: `horizontal-form-${instanceId}`,
		fields,
		rows,
		conditionals,
	};

	return (
		<Fragment>
			<CalderaForm
				form={form}
				initialValues={initialValues}
				onSubmit={onClose}
				onChange={onChange}
			/>
		</Fragment>
	);
};

HorizontalForm.propTypes = {
	fields: PropTypes.array,
	initialValues: PropTypes.object,
	onSubmit: PropTypes.func,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	onClose: PropTypes.func,
	conditionals: PropTypes.array,
};

HorizontalForm.defaultProps = {
	fields: [],
	initialValues: {},
	conditionals: [],
};
