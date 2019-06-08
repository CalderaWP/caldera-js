import React from "react";
import { storiesOf } from "@storybook/react";
import { SelectField } from "./SelectField";

const onChange = newValue => {
	console.log(newValue);
};
const onBlur = event => {};

const STORY_NAME_SELECT = "SelectField";
storiesOf(STORY_NAME_SELECT, module).add(
	"With no value selected and placeholder",
	() => (
		<SelectField
			label={"Select A Hat"}
			onChange={onChange}
			description={"selection of hats"}
			fieldId={"selection-hats"}
			placeholder={"---"}
			required={true}
			options={[{ value: 1, label: "One" }, { value: 2, label: "Two" }]}
		/>
	)
);
storiesOf(STORY_NAME_SELECT, module).add(
	"With no value selected and no placeholder",
	() => (
		<SelectField
			label={"Select A Hat"}
			onChange={onChange}
			description={"selection of hats"}
			fieldId={"selection-hats"}
			required={true}
			options={[{ value: 1, label: "One" }, { value: 2, label: "Two" }]}
		/>
	)
);
storiesOf(STORY_NAME_SELECT, module).add("With value selected", () => (
	<SelectField
		label={"Select A Hat"}
		onChange={onChange}
		description={"selection of hats"}
		fieldId={"selection-hats"}
		required={true}
		value={2}
		options={[{ value: 1, label: "One" }, { value: 2, label: "Two" }]}
	/>
));
