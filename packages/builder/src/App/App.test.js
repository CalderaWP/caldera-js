import React from "react";
import { render } from "react-testing-library";
import { App } from "./App";
test("App", () => {
	expect(render(<App />)).toMatchSnapshot();
});
