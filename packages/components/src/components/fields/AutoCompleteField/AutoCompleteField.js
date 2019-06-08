import PropTypes from "prop-types";
import React from "react";
import { FieldWrapper } from "../FieldWrapper/FieldWrapper";
import Autocomplete from "react-autocomplete";
import { Control } from "../Control";

export const AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER = "auto-complete";

const RenderInput = props => <Control {...props} />;
const RenderMenu = (items, value, style) => (
	<ul style={{ ...style }} children={items} />
);

const RenderItem = (item, highlighted) => (
	<li
		className={"tag"}
		key={item.id ? item.id : item.value}
		style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}
	>
		{item.label}
	</li>
);

export const AutoCompleteField = props => {
	const {
		options,
		required,
		onChange,
		onBlur,
		value,
		RenderItem,
		fieldId,
		label,
	} = props;

	const fieldProps = {
		...props,
		required,
		onBlur,
		fieldType: AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER,
	};

	const wrapperProps = {
		fieldId,
		fieldType: AUTO_COMPLETE_FIELD_TYPE_IDENTIFIER,
		label,
		required,
	};

	function handleChange(eventOrValue) {
		if ("object" === typeof eventOrValue) {
			onChange(eventOrValue.target.value);
		} else {
			onChange(eventOrValue);
		}
	}

	return (
		<FieldWrapper {...wrapperProps}>
			<Autocomplete
				items={options}
				shouldItemRender={(item, value) =>
					item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
				}
				getItemValue={item => item.value}
				renderItem={RenderItem}
				renderMenu={RenderMenu}
				RenderInput={props => (
					<RenderInput {...{ ...props, ...fieldProps }} />
				)}
				value={value}
				onChange={e => handleChange(e)}
				onSelect={value => handleChange(value)}
			/>
		</FieldWrapper>
	);
};

AutoCompleteField.propTypes = {
	RenderItem: PropTypes.func,
};

AutoCompleteField.defaultProps = {
	RenderItem,
};
