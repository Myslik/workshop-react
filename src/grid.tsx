import * as React from "react";
import { IRow, IColumn, IAdapter } from "./adapter";
import { Header } from "./header";
import { Body } from "./body";

export interface IGridProps {
    adapter: IAdapter;
}

export interface IGridState {
    columns: IColumn[];
    rows: IRow[];
    selection: string[];
}

export class Grid extends React.Component<IGridProps, IGridState> {
    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            rows: [],
            selection: []
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleSelectAll = this.handleSelectAll.bind(this);
    }

    fetchColumns() {
        this.props.adapter.fetchColumns().then(columns => {
            this.setState((prevState, props) => {
                prevState.columns = columns;
                return prevState;
            }, () => { this.fetchRows(); });
        });
    }

    fetchRows() {
        this.props.adapter.fetchRows().then(rows => {
            this.setState((prevState, props) => {
                prevState.rows = rows;
                return prevState;
            });
        });
    }

    componentDidMount() {
        this.fetchColumns();
    }

    handleSelect(rowId: string, checked: boolean) {
        this.setState((prevState, props) => {
            if (checked) {
                prevState.selection.push(rowId);
            } else {
                var index = prevState.selection.indexOf(rowId);
                prevState.selection.splice(index, 1);
            }
            return prevState;
        });
    }

    handleSelectAll(all: boolean) {
        this.setState((prevState, props) => {
            if (all) {
                prevState.selection = prevState.rows.map(r => r.id);
            } else {
                prevState.selection = [];
            }
            return prevState;
        });
    }

    get width(): number {
        return this.state.columns
            .map(c => c.width)
            .reduce((p, c) => { return p + c }, 24);
    }

    render() {
        var style = {
            width: this.width + "px"
        };

        return (
            <div style={style} className="react-grid">
                <Header 
                    columns={this.state.columns}
                    selection={this.state.selection}
                    onSelect={this.handleSelectAll} />
                <Body 
                    columns={this.state.columns}
                    rows={this.state.rows}
                    selection={this.state.selection}
                    onSelect={this.handleSelect} />
            </div>
        );
    }
}