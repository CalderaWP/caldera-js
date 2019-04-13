
import { isFunction } from 'lodash';
import classnames from 'classnames';
import React from 'react';
import { Component } from '@wordpress/element';
import {SVG,Path} from "./primitives/svg";
import BaseControl from "./BaseControl";
import {fieldClassNames,labelClassNames} from "../fields/util";



function FormToggle( { className, checked, id, onChange = noop, ...props } ) {
	const wrapperClasses = classnames(
		'components-form-toggle',
		className,
		{ 'is-checked': checked },
	);

	return (
		<span className={ wrapperClasses }>
			<input
				className={fieldClassNames('toggle')}
				id={ id }
				type="checkbox"
				checked={ checked }
				onChange={ onChange }
				{ ...props }
			/>
			<span className="components-form-toggle__track"></span>
			<span className="components-form-toggle__thumb"></span>
			{ checked ?
				<SVG className="components-form-toggle__on" width="2" height="6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 6"><Path d="M0 0h2v6H0z" /></SVG> :
				<SVG className="components-form-toggle__off" width="6" height="6" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6"><Path d="M3 1.5c.8 0 1.5.7 1.5 1.5S3.8 4.5 3 4.5 1.5 3.8 1.5 3 2.2 1.5 3 1.5M3 0C1.3 0 0 1.3 0 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" /></SVG>
			}
		</span>
	);
}





class ToggleControl extends Component {
	constructor() {
		super( ...arguments );

		this.onChange = this.onChange.bind( this );
	}

	onChange( event ) {
		if ( this.props.onChange ) {
			this.props.onChange( event.target.checked );
		}
	}

	render() {
		const { label, checked, help, fieldId, className } = this.props;
		const id = fieldId;

		let describedBy, helpLabel;
		if ( help ) {
			describedBy = id + '__help';
			helpLabel = isFunction( help ) ? help( checked ) : help;
		}

		return (
			<BaseControl
				id={ id }
				help={ helpLabel }
				className={fieldClassNames('toggle')}
			>
				<FormToggle
					id={ id }
					checked={ checked }
					onChange={ this.onChange }
					aria-describedby={ describedBy }
				/>
				<label
					htmlFor={ id }
					className={labelClassNames('toggle')}
				>
					{ label }
				</label>
			</BaseControl>
		);
	}
}

export default ToggleControl;
