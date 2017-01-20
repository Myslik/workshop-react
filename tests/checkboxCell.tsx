import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { CheckboxCell } from "../src/checkboxCell";

it("CheckboxCell fires event on click", () => {
    let onChecked = (checked: boolean) => {
        expect(checked).toBeTruthy();
    };

    const checkboxCell = TestUtils.renderIntoDocument(
        <CheckboxCell ref="checkbox" checked={false} onCheck={onChecked} />
    );

    TestUtils.Simulate.click(this.refs.checkbox);
});