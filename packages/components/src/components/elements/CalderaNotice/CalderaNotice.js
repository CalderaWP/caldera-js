import React from 'react';

export const CalderaNotice = ({ children, isError }) => {
	return (
		<div className={isError ? 'error' : 'success'}>{children}</div>

	)
};
