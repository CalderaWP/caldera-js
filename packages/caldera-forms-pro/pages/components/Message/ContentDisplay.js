import React from 'react';

export const ContentDisplay = ({content}) => {
	const createMarkup = () => {
		const {rendered} = content;
		return {__html:rendered};
	};
	return <div dangerouslySetInnerHTML={createMarkup()}/>


};

