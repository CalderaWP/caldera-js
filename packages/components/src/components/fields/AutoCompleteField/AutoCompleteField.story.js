import React, { useState, useMemo } from "react";
import { storiesOf } from "@storybook/react";
import { AutoCompleteField } from "./AutoCompleteField";
import ReactAutocomplete from "react-autocomplete";
import {
	textField,
	checkboxField,
} from "@calderajs/forms/src/CalderaForm/fields.fixtures";

const onChange = newValue => {
	console.log(newValue);
};
const onBlur = event => {};

const STORY_NAME = "Auto Complete field";

function Wrapped() {
	const [value, onChange] = useState("");
	return (
		<AutoCompleteField
			label={"Select A Hat"}
			onChange={onChange}
			description={"selection of hats"}
			fieldId={"selection-hats"}
			value={value}
			required={false}
			options={[
				{ value: "large", label: "Large" },
				{ value: "small", label: "Small" },
			]}
		/>
	);
}

storiesOf(STORY_NAME, module).add("Default Variant ", () => <Wrapped />);
