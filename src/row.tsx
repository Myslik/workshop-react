import * as React from "react";
import { IColumn, IRow } from "./adapter";
import { Cell } from "./cell";
import { CheckboxCell } from "./checkboxCell";

export interface IRowProps {
    row: IRow;
    columns: IColumn[];
    checked: boolean;
    onCheck: (checked: boolean) => void;
}

export class Row extends React.Component<IRowProps, void> {
    render () {
        return (
            <div className="react-grid-row">
                <CheckboxCell
                    checked={this.props.checked}
                    onCheck={(checked) => { this.props.onCheck(checked) }} />
                {
                    this.props.columns.map((column) => {
                        var value = this.props.row[column.key];
                        return (
                            <Cell
                                key={column.key}
                                value={value}
                                width={column.width} />
                        );
                    })
                }
            </div>
        );
    }
}