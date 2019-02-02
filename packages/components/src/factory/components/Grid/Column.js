import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Box } from '@rebass/grid';

export const Column = ({ columnId, padding, width, children, className }) => (
	<Box
		className={classNames('caldera-column', className)}
		key={columnId}
		id={columnId}
		width={width}
		px={padding}
		py={padding}
	>
		{children}
	</Box>
);
