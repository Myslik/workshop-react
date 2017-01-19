import * as React from "react";
import { IColumn, IRow } from "./adapter";
import { Cell } from "./cell";

export interface IRowProps {
    row: IRow;
    columns: IColumn[];
}

export class Row extends React.Component<IRowProps, void> {
    render () {
        return (
            <div className="react-grid-row">
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