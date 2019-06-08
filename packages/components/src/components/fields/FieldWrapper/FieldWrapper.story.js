import React from "react";
import { storiesOf } from "@storybook/react";
import { FieldWrapper } from "./FieldWrapper";
import { InputField } from "../InputField/InputField";
const onChange = newValue => {};
storiesOf("FieldWrapper", module).add("Wraps an input", () => (
	<FieldWrapper fieldType={"text"}>
		<input />
	</FieldWrapper>
));

storiesOf("FieldWrapper", module).add("With checkboxes inside", () => (
	<FieldWrapper fieldType={"text"}>
		<InputField
			label={"Not Checked"}
			html5type={"checkbox"}
			value={false}
			onChange={onChange}
		/>
		<InputField
			label={"Checked"}
			html5type={"checkbox"}
			value={true}
			onChange={onChange}
		/>
	</FieldWrapper>
));
