import * as React from "react";
import { render } from "react-testing-library";
import { FormsList } from "./FormsList";

describe("FormsList", () => {
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
	let onFormAction;
	beforeEach(() => {
		onFormAction = jest.fn();
	});

	it("Matches snapshot ", () => {
		expect(
			render(
				<FormsList
					forms={forms}
					panelTitle={"Panel Title"}
					noFormsMessage={"Custom No Forms Found"}
					onFormAction={() => {}}
				/>
			)
		).toMatchSnapshot();
	});
});
