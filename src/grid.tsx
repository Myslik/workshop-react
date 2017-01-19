import * as React from "react";
import { IRow, IColumn, IAdapter } from "./adapter";

export interface IGridProps {
    adapter: IAdapter;
}

export interface IGridState {
    columns: IColumn[];
    rows: IRow[];
}

export class Grid extends React.Component<IGridProps, IGridState> {
    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            rows: []
        };
    }

    render() {
        return (
            <div className="react-grid">
                Grid
            </div>
        );
    }
}