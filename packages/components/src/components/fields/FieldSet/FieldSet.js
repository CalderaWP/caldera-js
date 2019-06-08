import { fieldSetClassNames, parseAttributes } from "../util";
import PropTypes from "prop-types";
import React from "react";

/**
 *
 * @param fieldType
 * @param attributes
 * @param children
 * @return {*}
 * @constructor
 */
export const FieldSet = ({ fieldType, attributes, children, legend }) => {
	attributes = parseAttributes(attributes, "fieldset");
	return (
		<fieldset className={fieldSetClassNames(fieldType)} {...attributes}>
			<legend>{legend}</legend>
			{children}
		</fieldset>
	);
};

FieldSet.propTypes = {
	fieldType: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	attributes: PropTypes.object,
};
