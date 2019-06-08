import React from "react";
import { storiesOf } from "@storybook/react";
import { CalderaNotice } from "./CalderaNotice";

storiesOf("CalderaNotice", module).add("Success message", () => (
	<CalderaNotice isError={false}>Good Things!</CalderaNotice>
));

storiesOf("CalderaNotice", module).add("Error message", () => (
	<CalderaNotice isError={true}>Bad Things!</CalderaNotice>
));
