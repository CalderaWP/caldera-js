import * as React from "react";
import { mount } from "enzyme";
import { render } from "react-testing-library";
import { Processor } from "./Processor";

import {
	checkboxFieldset,
	selectField,
	checkboxField,
} from "@calderajs/components";

describe("Processor", () => {
	let onClose;
	let onChange;
	let onBlur;

	const form = {
		ID: "cf1",
		fields: [checkboxFieldset, selectField, checkboxField],
	};

	beforeEach(() => {
		onClose = jest.fn();
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it("Matches snapshot", () => {
		const component = render(
			<Processor
				fields={[checkboxFieldset, selectField, checkboxField]}
				initialValues={{}}
				onClose={onClose}
				onChange={onChange}
				onBlur={onBlur}
				instanceId={"test-1"}
				form={form}
			/>
		);
		expect(component).toMatchSnapshot();
	});

	it("Can switch to conditionals", () => {
		const component = mount(
			<Processor
				fields={[checkboxFieldset, selectField, checkboxField]}
				initialValues={{}}
				onClose={onClose}
				onChange={onChange}
				onBlur={onBlur}
				initialActiveTab={"conditionals"}
				instanceId={"test-1"}
				form={form}
			/>
		);
		component.instance().onSetTab("conditionals");
		expect(component.state("activeTab")).toBe("conditionals");
	});

	it("Can show conditionals", () => {
		const component = mount(
			<Processor
				fields={[checkboxFieldset, selectField, checkboxField]}
				initialValues={{}}
				onClose={onClose}
				onChange={onChange}
				onBlur={onBlur}
				initialActiveTab={"conditionals"}
				instanceId={"test-1"}
				form={form}
			/>
		);
		expect(component.find(".caldera-processor-conditionals").length).toBe(
			0
		);
		component.setState({ activeTab: "conditionals" });
		expect(component.state("activeTab")).toBe("conditionals");
	});
});
