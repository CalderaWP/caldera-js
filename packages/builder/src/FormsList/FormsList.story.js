import React from "react";
import { storiesOf } from "@storybook/react";
import { FormsList } from "./FormsList";

const forms = [
	{
		id: "contact-form",
		name: "Contact Form",
	},
	{
		id: "other-form",
		name: "Other Form",
	},
];
storiesOf("FormsList", module).add("No forms", () => (
	<FormsList
		forms={[]}
		panelTitle={"Panel Title"}
		noFormsMessage={"Custom No Forms Found"}
		onFormAction={() => {}}
	/>
));

storiesOf("FormsList", module).add("With forms", () => (
	<FormsList
		forms={Object.values(forms)}
		panelTitle={"Panel Title"}
		noFormsMessage={"Custom No Forms Found"}
		onFormAction={(formId, actionName) => {
			console.log(formId, actionName);
		}}
	/>
));
