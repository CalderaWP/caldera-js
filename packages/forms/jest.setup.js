/**
 * Prevent `ReferenceError: regeneratorRuntime is not defined`
 *
 * @see https://babeljs.io/docs/en/babel-polyfill
 */
import "@babel/polyfill";

/**
 * Mock the global fetch
 *
 * @see https://www.npmjs.com/package/jest-fetch-mock
 *
 *
 */
global.fetch = require('jest-fetch-mock');

/**
 * Defines the React 16 Adapter for Enzyme.
 *
 * @link http://airbnb.io/enzyme/docs/installation/#working-with-react-16
 * @copyright 2017 Airbnb, Inc.
 */
const Adapter = require('enzyme-adapter-react-16');

import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
