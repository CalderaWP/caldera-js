import React from "react";
import { storiesOf } from "@storybook/react";
import { FormEntryViewer } from "./FormEntryViewer";

import { forms, entriesContactForm } from "./forms.fixtures";
const entries = entriesContactForm;

storiesOf("FormEntryViewer", module).add("Views entries", () => (
	<FormEntryViewer form={forms["contact-form"]} entries={entries} />
));

storiesOf("FormEntryViewer", module).add("No entries provided", () => (
	<FormEntryViewer form={forms["contact-form"]} entries={{}} />
));

storiesOf("FormEntryViewer", module).add("No form or entries provided", () => (
	<FormEntryViewer form={false} entries={{}} />
));
