import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-addons-test-utils";
import { Cell } from "../src/cell";

it("Cell shows correct text", () => {
    const cell = TestUtils.renderIntoDocument(
        <Cell value="text" width={100} />
    );

    const cellNode = ReactDOM.findDOMNode(cell);

    expect(cellNode.textContent).toEqual("text");
});