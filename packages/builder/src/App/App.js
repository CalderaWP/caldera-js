import React,{useState} from 'react';
import { Toolbar, IconButton } from '@wordpress/components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TextControl } from '@wordpress/components';
/**
 *
 * @param form
 * @param onFormAction
 * @return {*}
 * @constructor
 */
export const App = ({ className}) => (

	<div>
		<TextControl
			label="Additional CSS Class"
			value={ className }
			onChange={ ( className ) => console.log(  className  ) }
		/>
	</div>
);




App.defaultProps = {

};
App.propTypes = {

};
