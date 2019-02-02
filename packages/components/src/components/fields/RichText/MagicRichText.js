import React from 'react';
import {RichText} from './RichText';
import PropTypes from 'prop-types';

export const MagicRichText = (props) => {
	let {modules,fieldCompletes,otherCompletes} = props;
	modules = {
		...modules,
		mention: {
			allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
			mentionDenotationChars: ["{", "%"],
			source: function (searchTerm, renderList, mentionChar) {
				let values;

				if (mentionChar === "%") {
					values = fieldCompletes;
				} else {
					values = otherCompletes;
				}

				if (searchTerm.length === 0) {
					renderList(values, searchTerm);
				} else {
					const matches = [];
					for (i = 0; i < values.length; i++)
						if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) matches.push(values[i]);
					renderList(matches, searchTerm);
				}
			},
		},
	}
	return  (
		<RichText
			{...props}
			modules={modules}
		/>
	);
}


MagicRichText.propTypes = {
	...RichText.propTypes,
	fieldCompletes: PropTypes.object,
	otherCompletes: PropTypes.object
};

MagicRichText.defaultProps = RichText.defaultProps;
