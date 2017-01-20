import * as React from "react";
import { IColumn, ISorting } from "./adapter";
import { HeaderCell, SortState } from "./headerCell";
import { CheckboxHeaderCell } from "./checkboxHeaderCell";

export interface IHeaderProps {
    columns: IColumn[];
    selection: string[];
    sorting: ISorting;
    onSelect: (all: boolean) => void;
    onSort: (key: string) => void;
}

export class Header extends React.Component<IHeaderProps, void> {
    get checked(): boolean {
        return this.props.selection.length > 0;
    }

    getSortState(column: IColumn): SortState {
        if (this.props.sorting && this.props.sorting.key === column.key) {
            return this.props.sorting.asc ? SortState.Ascending : SortState.Descending;
        } else {
            return SortState.Enabled;
        }
    }

    render() {
        return (
            <div className="react-grid-header">
                <CheckboxHeaderCell
                    checked={this.checked}
                    onCheck={(checked) => { this.props.onSelect(checked); }} />
                {
                    this.props.columns.map((column) => {
                        const sortState = this.getSortState(column);
                        return (
                            <HeaderCell
                                key={column.key}
                                title={column.key}
                                width={column.width}
                                sortState={sortState}
                                onClick={() => { this.props.onSort(column.key); }} />
                        );
                    })
                }
            </div>
        );
    }
}