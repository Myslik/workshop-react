import * as React from "react";
import { IRow, IColumn, IAdapter } from "./adapter";
import { Header } from "./header";

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

    fetchColumns() {
        this.props.adapter.fetchColumns().then(columns => {
            this.setState((prevState, props) => {
                prevState.columns = columns;
                return prevState;
            });
        });
    }

    componentDidMount() {
        this.fetchColumns();
    }

    render() {
        return (
            <div className="react-grid">
                <Header columns={this.state.columns} />
            </div>
        );
    }
}