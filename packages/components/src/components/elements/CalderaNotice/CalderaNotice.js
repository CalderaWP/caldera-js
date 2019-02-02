import React from 'react';

import { Notice } from '@wordpress/components';
export const CalderaNotice = ({ children, isError }) => (
	<Notice status={isError ? 'error' : 'success'}>{children}</Notice>
);
