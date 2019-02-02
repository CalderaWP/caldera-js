/**
 * Defines the React 16 Adapter for Enzyme.
 *
 * @link http://airbnb.io/enzyme/docs/installation/#working-with-react-16
 */
const Adapter = require('enzyme-adapter-react-16');
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

/**
 * Setup Jest mocking
 * @link https://www.npmjs.com/package/jest-fetch-mock#usage
 */
global.fetch = require('jest-fetch-mock');

