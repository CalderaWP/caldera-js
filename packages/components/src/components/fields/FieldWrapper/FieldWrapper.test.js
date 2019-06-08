import * as React from "react";
import { cleanup, render } from "react-testing-library";
import { shallow } from "enzyme";

import { FieldWrapper } from "./FieldWrapper";

describe("Field wrapper", () => {
	afterEach(cleanup);

	it("Matches snapshot", () => {
		const component = render(
			<FieldWrapper fieldType={"checkbox"} legend={"Check All options"}>
				<label htmlFor="one">One</label>
				<input id="one" type={"checkbox"} />
				<label htmlFor="two">Two</label>
				<input id="two" type={"checkbox"} />
			</FieldWrapper>
		);
		expect(component).toMatchSnapshot();
	});

	it.skip("applies an array of classnames", () => {
		const component = shallow(
			<FieldWrapper
				fieldType={"checkbox"}
				className={["strange", "has-error"]}
			>
				found
			</FieldWrapper>
		);
		expect(component.hasClass("has-error")).toBe(true);
		expect(component.hasClass("strange")).toBe(true);
	});

	it.skip("applies an string of classnames", () => {
		const component = shallow(
			<FieldWrapper fieldType={"checkbox"} className={"strange"}>
				found
			</FieldWrapper>
		);
		expect(component.hasClass("strange")).toBe(true);
	});
});
