import React, { createElement } from 'react';
const merge = require('deepmerge');
export class Header extends React.Component {
	render() {
		const { children, headingLevel } = this.props;
		const styles = merge(
			{
				header: {
					height: 54,
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					padding: 8,
					backgroundColor: '#2196f3',
					color: '#ffffff'
				},
				heading: {
					fontSize: 20,
					fontWeight: 'normal'
				}
			},
			this.props.styles || {}
		);
		return (
			<div style={styles.header}>
				{createElement(
					headingLevel ? headingLevel : 'h1',
					{ styles },
					children
				)}
			</div>
		);
	}
}
