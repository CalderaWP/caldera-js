import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { HorizontalForm } from "./HorizontalForm";
import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField,
} from "@calderajs/components";

storiesOf("HorizontalForm", module).add("Works with a bunch of fields", () => (
	<HorizontalForm
		fields={[
			checkboxFieldset,
			selectField,
			checkboxField,
			numberField,
			textField,
			emailField,
			radioField,
		]}
		onChange={values => console.log(values)}
		onBlur={values => console.log(values)}
		onClose={values => console.log(values)}
	/>
));
