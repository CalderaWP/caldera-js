import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Box } from '@rebass/grid';
import {classNameService} from "../../..";

export const Column = ({ columnId, padding, width, children, className }) => (
	<Box

		className={classNames( className, classNameService.getFormColumnClassNames(columnId,width))}
		key={columnId}
		id={columnId}
		width={width}
		px={padding}
		py={padding}
	>
		{children}
	</Box>
);
