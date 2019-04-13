import React, {Component} from 'react';

export const MainSection = ({title, className, children}) => (
	<div
		className={className}
	>
		<h2>{title}</h2>
		{children}
	</div>
);
