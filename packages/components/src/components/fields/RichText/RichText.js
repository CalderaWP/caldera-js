import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import {fieldClassNames} from "../util";
//import 'react-quill/dist/quill.snow.css'; // ES6
//import 'react-quill/dist/quill.snow.css'; // ES6
export const RichText = (
	onChange,
	value,
	modules,
	formats,
	placeholder,
) =>
	 (
		<div
			className={fieldClassNames('richtext')}
		>
			<ReactQuill
				theme={'snow'}
				onChange={onChange}
				value={value}
				modules={modules}
				formats={formats}
				placeholder={placeholder}
			/>
		</div>
	 );

RichText.propTypes = {
	value: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	formats: PropTypes.array,
	modules: PropTypes.object,
};

RichText.defaultProps = {
	formats: [
		'header', 'font', 'size',
		'bold', 'italic', 'underline', 'strike', 'blockquote',
		'list', 'bullet', 'indent',
		'link', 'image', 'video'
	],
	modules: {
		toolbar: [
			[{'header': '1'}, {'header': '2'}, {'font': []}],
			[{size: []}],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[{'list': 'ordered'}, {'list': 'bullet'},
				{'indent': '-1'}, {'indent': '+1'}],
			['link'],
			['clean']
		],
		clipboard: {
			matchVisual: true,
		}
	}

}
