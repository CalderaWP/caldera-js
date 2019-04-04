//Based on https://github.com/lukashala/react-simply/blob/master/tools/state/src/index.js
import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const ComponentContext = createContext();

export const ComponentProvider = ({ reducer, initialState, children }) => (
	<ComponentContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</ComponentContext.Provider>
);

ComponentProvider.propTypes = {
	/**
	 * @return {React.Node}
	 */
	children: PropTypes.node.isRequired,

	/**
	 * Object containing initial state value.
	 */
	initialState: PropTypes.shape({}).isRequired,

	/**
	 *
	 * @param {object} state
	 * @param {object} action
	 */
	reducer: PropTypes.func.isRequired
};

export const getState = () => useContext(ComponentContext);
