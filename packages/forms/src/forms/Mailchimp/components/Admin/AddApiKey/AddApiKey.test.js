import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import { AddApiKey } from "./AddApiKey";

const field = [
	{
		fieldType: "select",
		required: true,
		fieldId: "mc-select-field",
		options: [{ value: "45907f0c59", label: "Future Capable" }],
	},
];
describe("AddApiKey Mailchimp", () => {
	afterEach(cleanup);
	it("Shows list", () => {
		expect(
			render(
				<AddApiKey
					onChange={jest.fn()}
					instanceId={"test"}
					label={"The Label"}
				/>
			)
		).toMatchSnapshot();
	});

	it.skip("Changes list", () => {
		const onChange = jest.fn();
		const label = "The Label";
		const { container, getByLabelText } = render(
			<AddApiKey onChange={onChange} instanceId={"test"} label={label} />
		);

		const input = container.querySelector("#caldera-mc-api-key");
		const event = { target: { value: "45907f0c59" } };
		fireEvent.change(input, event);
		expect(select.value).toBe("45907f0c59");

		expect(onChange.mock.calls.length).toBe(1);
	});
});
