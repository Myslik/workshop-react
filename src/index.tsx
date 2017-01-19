import * as React from "react";
import * as ReactDOM from "react-dom";
import { Grid } from "./grid";
import { DemoAdapter } from "./demo";

var adapter = new DemoAdapter();

ReactDOM.render(
    <Grid adapter={adapter} />,
    document.getElementById("example")
);