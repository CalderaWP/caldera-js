import React from "react";
import { Control } from "./Control";
import { render, fireEvent } from "react-testing-library";
test("Control change handler", () => {
	const { container } = render(
		<Control fieldType={"input"} onChange={jest.fn()} fieldId={"test-11"} />
	);
	const input = container.querySelector("input");
	const event = { target: { value: 200 } };
	fireEvent.change(input, event);
	expect(input.value).toBe("200");
});
