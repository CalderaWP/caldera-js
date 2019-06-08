import React from "react";
import { storiesOf } from "@storybook/react";
import { AppWithCss } from "./AppWithCss";
import { WithBootstrapStyle } from "@calderajs/forms";

const props = {};
storiesOf("AppWithCss", module).add(
	"The Form Builder Application With CSS",
	() => <AppWithCss {...props} />
);
