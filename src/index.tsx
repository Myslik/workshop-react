import * as React from "react";
import * as ReactDOM from "react-dom";
import { Grid } from "./grid";
import { ODataAdapter } from "./odata";

var adapter = new ODataAdapter(
    "http://services.odata.org/TripPinRESTierService/People", 
    [
        { key: "UserName", width: 100 },
        { key: "FirstName", width: 100 },
        { key: "LastName", width: 100 }
    ], 
    "UserName");

ReactDOM.render(
    <Grid adapter={adapter} />,
    document.getElementById("example")
);