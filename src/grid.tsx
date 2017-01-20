import * as React from "react";
import { IRow, IColumn, IAdapter, IQuery, ISorting } from "./adapter";
import { Header } from "./header";
import { Body } from "./body";

export interface IGridProps {
    adapter: IAdapter;
}

export interface IGridState {
    columns: IColumn[];
    rows: IRow[];
    selection: string[];
    sorting?: ISorting;
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
        this.handleSort = this.handleSort.bind(this);
    }

    fetchColumns() {
        this.props.adapter.fetchColumns().then(columns => {
            this.setState((prevState, props) => {
                prevState.columns = columns;
                return prevState;
            }, () => { this.fetchRows(); });
        });
    }

    get query(): IQuery {
        return {
            sorting: this.state.sorting
        };
    }

    fetchRows() {
        this.props.adapter.fetchRows(this.query).then(rows => {
            this.setState((prevState, props) => {
                prevState.selection = [];
                prevState.rows = rows;
                return prevState;
            });
        });
    }

    handleSort(key: string) {
        this.setState((prevState, props) => {
            if (!prevState.sorting || prevState.sorting.key !== key) {
                prevState.sorting = {
                    key: key,
                    asc: true
                };
            } else {
                if (prevState.sorting.asc === true) {
                    prevState.sorting.asc = false;
                } else {
                    prevState.sorting = undefined;
                }
            }
            prevState.rows = [];
            return prevState;
        }, () => { this.fetchRows(); });
    }

    componentDidMount() {
        this.fetchColumns();
    }

    handleSelect(rowId: string, checked: boolean) {
        this.setState((prevState, props) => {
            if (checked) {
                prevState.selection.push(rowId);
            } else {
                const index = prevState.selection.indexOf(rowId);
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
        const style = {
            width: this.width + "px"
        };

        return (
            <div style={style} className="react-grid">
                <Header
                    columns={this.state.columns}
                    selection={this.state.selection}
                    sorting={this.state.sorting}
                    onSelect={this.handleSelectAll}
                    onSort={this.handleSort} />
                <Body
                    columns={this.state.columns}
                    rows={this.state.rows}
                    selection={this.state.selection}
                    onSelect={this.handleSelect} />
            </div>
        );
    }
}