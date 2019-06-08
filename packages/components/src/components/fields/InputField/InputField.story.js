import React from "react";
import { storiesOf } from "@storybook/react";
import { InputField } from "./InputField";

let value = "Hi Roy";
const onChange = newValue => {
	console.log(newValue);
};
const onBlur = event => {};

const STORY_NAME_INPUT = "InputField";
const STORY_NAME_INPUT_NUMBER = "InputField as number field";
const STORY_NAME_INPUT_EMAIL = "InputField as email field";
const STORY_NAME_INPUT_CHECKBOX = "InputField as checkbox";
storiesOf(STORY_NAME_INPUT, module).add("With no value", () => (
	<InputField
		label={"Text Input"}
		html5type={"text"}
		onChange={onChange}
		onBlur={onBlur}
	/>
));

storiesOf(STORY_NAME_INPUT, module).add("With placeholder", () => (
	<InputField
		label={"Text Input"}
		placeholder={"Hi Roy"}
		html5type={"text"}
		onChange={onChange}
		onBlur={onBlur}
	/>
));

storiesOf(STORY_NAME_INPUT, module).add("With description", () => (
	<InputField
		label={"Text Input With Description"}
		html5type={"text"}
		description={"Text field description"}
		onChange={onChange}
		onBlur={onBlur}
	/>
));
storiesOf(STORY_NAME_INPUT, module).add("With value", () => (
	<InputField
		label={"Text Input"}
		value={value}
		html5type={"text"}
		onChange={onChange}
		onBlur={onBlur}
	/>
));
storiesOf(STORY_NAME_INPUT, module).add("Disbaled", () => (
	<InputField
		label={"Text Input"}
		value={value}
		html5type={"text"}
		onChange={onChange}
		onBlur={onBlur}
		attributes={{
			disabled: true,
		}}
	/>
));

storiesOf(STORY_NAME_INPUT_NUMBER, module).add("With attributes", () => (
	<InputField
		label={"Number"}
		html5type={"number"}
		onChange={onChange}
		onBlur={onBlur}
		attributes={{
			min: 40,
			max: 100,
			step: 10,
		}}
	/>
));
storiesOf(STORY_NAME_INPUT_EMAIL, module).add("Required", () => (
	<InputField
		label={"Email"}
		html5type={"email"}
		required={true}
		onChange={onChange}
		description={"Minimum 40, Max 100, Step 10"}
		onBlur={onBlur}
	/>
));
storiesOf(STORY_NAME_INPUT_EMAIL, module).add("Multiple", () => (
	<InputField
		label={"Emails"}
		html5type={"email"}
		required={true}
		onChange={onChange}
		description={"Multiples allowed"}
		onBlur={onBlur}
		attributes={{
			multiple: true,
		}}
	/>
));

storiesOf(STORY_NAME_INPUT_CHECKBOX, module).add("Checked", () => (
	<InputField
		label={"Option"}
		html5type={"checkbox"}
		value={true}
		onChange={onChange}
		description={"Set to checked"}
	/>
));

storiesOf(STORY_NAME_INPUT_CHECKBOX, module).add("Not Checked", () => (
	<InputField
		label={"Option"}
		html5type={"checkbox"}
		value={false}
		onChange={onChange}
		description={"Not  checked"}
	/>
));

storiesOf(STORY_NAME_INPUT_CHECKBOX, module).add("Disabled", () => (
	<InputField
		label={"Option"}
		html5type={"checkbox"}
		value={false}
		onChange={onChange}
		description={"Not  checked"}
		attributes={{
			disabled: true,
		}}
	/>
));
