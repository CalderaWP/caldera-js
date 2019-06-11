import React, { Fragment } from 'react';
import { Row, rowPropTypes } from './Row';
import PropTypes from 'prop-types';

export const Rows = ({ rows, onChange, onBlur, className }) => (
	<Fragment>
		{rows.map(row => (
			<Row
				key={row.rowId}
				{...row}
				onChange={onChange}
				onBlur={onBlur}
				className={className}
			/>
		))}
	</Fragment>
);

Rows.propTypes = {
	rows: PropTypes.arrayOf(PropTypes.shape(rowPropTypes)),
	onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func,
	className: PropTypes.string,
};
