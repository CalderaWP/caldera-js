import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex, Box } from '@rebass/grid';
import { Column } from './Column';
/**
 *
 * @param columns
 * @param onChange
 * @param onBlur
 * @param className
 * @param rowId
 * @param children
 * @return {*}
 * @constructor
 */
export const Row = ({
	columns,
	onChange,
	onBlur,
	className,
	rowId,
	children
}) => {
	return (
		<Flex className={classNames('caldera-row', className)} id={rowId}>
			{columns ? (
				<Fragment>
					{columns.map(column => {
						let { width, padding, columnId } = column;

						return (
							<Column
								key={columnId}
								id={columnId}
								width={width}
								px={padding}
								py={padding}
							>
								{children}
							</Column>
						);
					})}
				</Fragment>
			) : (
				<Fragment>{children}</Fragment>
			)}
		</Flex>
	);
};

/**
 * Row prop types
 *
 * @type {{columns: shim, rowId: *, onChange: *, onBlur: shim, className: shim}}
 */
export const rowPropTypes = {
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			width: PropTypes.string.isRequired,
			columnId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		})
	),
	rowId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	className: PropTypes.string
};
Row.propTypes = rowPropTypes;
