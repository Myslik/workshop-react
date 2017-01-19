import * as React from "react";
import { IRow, IColumn } from "./adapter";
import { Row } from "./row";

export interface IBodyProps {
    columns: IColumn[];
    rows: IRow[];
    selection: string[];
    onSelect: (rowId: string, checked: boolean) => void;
}

export class Body extends React.Component<IBodyProps, void> {
    render() {
        return (
            <div className="react-grid-body">
                {
                    this.props.rows.map((row) => {
                        var checked = this.props.selection.indexOf(row.id) != -1;
                        return (
                            <Row
                                key={row.id}
                                checked={checked}
                                onCheck={(checked) => { this.props.onSelect(row.id, checked) }}
                                row={row}
                                columns={this.props.columns} />
                        );
                    })
                }
            </div>
        );
    }
}