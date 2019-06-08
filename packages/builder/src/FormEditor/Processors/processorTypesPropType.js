import PropTypes from "prop-types";

export const processorTypesPropType = PropTypes.arrayOf(
	PropTypes.shape({
		type: PropTypes.string,
		fields: PropTypes.array,
		conditionals: PropTypes.arrayOf(
			PropTypes.shape({
				rule: PropTypes.func,
				fields: PropTypes.arrayOf(PropTypes.string),
			})
		),
	})
);
