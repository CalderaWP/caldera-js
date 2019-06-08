import * as React from "react";
import { mount } from "enzyme";
import { FormEntryViewer } from "./FormEntryViewer";
import { forms, entriesContactForm } from "./forms.fixtures";

describe("Form EntryViewer component", () => {
	test("Views entries", () => {
		const component = mount(
			<FormEntryViewer
				form={forms["contact-form"]}
				entries={entriesContactForm}
			/>
		);
		expect(component.find("div").children().length).toBeGreaterThan(2);
	});

	test("No entries", () => {
		const component = mount(
			<FormEntryViewer form={forms["contact-form"]} entries={{}} />
		);
		expect(component.find("div").children().length).toBeGreaterThan(1);
	});

	test("No entries or forms", () => {
		const component = mount(
			<FormEntryViewer
				form={false}
				entries={{}}
				noItemsMessage={"No Items"}
			/>
		);
		expect(component.find(".has-error").length).toEqual(1);
	});

	test("onGridRowsUpdated", () => {
		const component = mount(
			<FormEntryViewer
				form={false}
				entries={{}}
				noItemsMessage={"No Items"}
			/>
		);
		expect(component.find(".has-error").length).toEqual(1);
	});
});
