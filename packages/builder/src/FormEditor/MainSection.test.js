import * as React from "react";
import { render } from "react-testing-library";
import { MainSection } from "./MainSection";

describe("Main Section component", () => {
	it("should match snapshot", () => {
		expect(
			render(
				<MainSection className={"class-one"} title={"The Title"}>
					Insides
				</MainSection>
			)
		).toMatchSnapshot();
	});
});
