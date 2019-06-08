import * as React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import { CalderaNotice } from "./CalderaNotice";

describe("CalderaNotice", () => {
	it("Matches snapshot with Success message", () => {
		const component = renderer.create(
			<CalderaNotice isError={false}>Good Things!</CalderaNotice>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it("Matches snapshot with error message", () => {
		const component = renderer.create(
			<CalderaNotice isError={true}>Bad Things!</CalderaNotice>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
