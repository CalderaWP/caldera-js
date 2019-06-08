import { fieldFactory } from "./fieldFactory";
import React from "react";
import { cleanup, render } from "react-testing-library";
import { mount } from "enzyme";
import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField,
	toggleField,
	textAreaField,
	autoCompleteField,
} from "../fields.fixtures";

describe("fieldFactory", () => {
	let onChange;
	let onBlur;
	afterEach(cleanup);

	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});
	it("Creates a text field", () => {
		const component = render(fieldFactory(textField, onChange, onBlur));
		expect(component).toMatchSnapshot();
	});

	it("Creates a text field when field type is bogus", () => {
		const component = render(
			fieldFactory(
				{ ...textField, fieldType: "travels-in-space" },
				onChange,
				onBlur
			)
		);
		expect(component).toMatchSnapshot();
	});
	it("Creates a text field when field type is input", () => {
		const component = render(
			fieldFactory({ ...textField, fieldType: "input" }, onChange, onBlur)
		);
		expect(component).toMatchSnapshot();
	});

	it("Creates a hidden field when field type is hidden", () => {
		const component = mount(
			fieldFactory(
				{ ...textField, fieldType: "hidden" },
				onChange,
				onBlur
			)
		);
		expect(component.find("input").prop("type")).toBe("hidden");
	});

	it("Creates a number field", () => {
		const component = render(fieldFactory(numberField, onChange, onBlur));
		expect(component).toMatchSnapshot();
	});

	it("Creates an email field", () => {
		const component = render(fieldFactory(emailField, onChange, onBlur));
		expect(component).toMatchSnapshot();
	});

	it("Creates an checkbox field field", () => {
		const component = render(fieldFactory(checkboxField, onChange, onBlur));
		expect(component).toMatchSnapshot();
	});

	it("Creates an checkbox field set", () => {
		const component = render(
			fieldFactory(checkboxFieldset, onChange, onBlur)
		);
		expect(component).toMatchSnapshot();
	});

	it("Creates an select field", () => {
		const component = render(fieldFactory(selectField, onChange, onBlur));
		expect(component).toMatchSnapshot();
	});

	it("Creates a radio field", () => {
		const component = render(fieldFactory(radioField, onChange, onBlur));
		expect(component).toMatchSnapshot();
	});

	it("Creates a checkbox fieldset", () => {
		const component = render(
			fieldFactory(checkboxFieldset, onChange, onBlur)
		);
		expect(component).toMatchSnapshot();
	});

	it("Creates a submit button", () => {
		const field = {
			...textField,
			fieldId: "clickButton",
			label: "Click Me",
			fieldType: "submit",
			form: {
				fields: [textField, textAreaField],
			},
		};

		const component = render(fieldFactory(field, onChange, onBlur));
		expect(component).toMatchSnapshot();
	});

	it("Adds option id", () => {
		const component = mount(
			fieldFactory(
				{
					fieldType: "checkboxes",
					label: "Checkbox Field Set Label",
					fieldId: "checkboxFieldSetLabel",
					description: "Checkbox field set description",
					options: [
						{
							value: 1,
							label: "One",
							id: "opt-1",
						},
					],
				},
				onChange,
				onBlur
			)
		);
		expect(
			component
				.find("input")
				.first()
				.props().id
		).toBe("opt-1");
	});

	it("Adds option id based on fieldId if option id not provided", () => {
		const component = mount(
			fieldFactory(
				{
					fieldType: "checkboxes",
					label: "Checkbox Field Set Label",
					fieldId: "test",
					description: "Checkbox field set description",
					options: [
						{
							value: 7,
							label: "One",
						},
					],
					value: [],
				},
				onChange,
				onBlur
			)
		);
		expect(
			component
				.find("input")
				.first()
				.props().id
		).toBe("test");
	});

	it("Creates an select field identified as dropdown", () => {
		const component = render(
			fieldFactory(
				{
					...selectField,
					fieldType: "dropdown",
				},
				onChange,
				onBlur
			)
		);
		expect(component).toMatchSnapshot();
	});

	test("Render props pattern", () => {
		const _Field = props => <input type={"number"} key={88} />;
		const _Rp = ({ render }) => ({ render });

		const component = mount(<_Rp render={_Field} />);
		expect(component.find("input").prop("type")).toEqual("number");
	});

	test("Field can supply a component", () => {
		const _Field = props => <input type={"number"} key={88} />;

		const component = mount(
			fieldFactory({
				render: _Field,
			}),
			onChange,
			onBlur
		);
		expect(component.find("input").prop("type")).toEqual("number");
	});

	test("Field can supply a component and will be provided with field config as props", () => {
		const _Field = ({ fieldId }) => (
			<input id={fieldId} type={"number"} key={88} />
		);

		const component = mount(
			fieldFactory({
				...selectField,
				render: _Field,
			}),
			onChange,
			onBlur
		);
		expect(component.find("#selectFieldId").length).toEqual(1);
	});

	it("should create textarea", () => {
		const component = render(fieldFactory(textAreaField, onChange, onBlur));
		expect(component).toMatchSnapshot();
	});

	it("should create toggle", () => {
		const component = render(fieldFactory(toggleField, onChange, onBlur));
		expect(component).toMatchSnapshot();
	});
});
