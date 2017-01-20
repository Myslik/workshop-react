import * as React from "react";
import { IColumn } from "./adapter";
import { HeaderCell } from "./headerCell";
import { CheckboxHeaderCell } from "./checkboxHeaderCell";

export interface IHeaderProps {
    columns: IColumn[];
    selection: string[];
    onSelect: (all: boolean) => void;
}

export class Header extends React.Component<IHeaderProps, void> {
    get checked(): boolean {
        return this.props.selection.length > 0;
    }

    render() {
        return (
            <div className="react-grid-header">
                <CheckboxHeaderCell
                    checked={this.checked}
                    onCheck={(checked) => { this.props.onSelect(checked) }} />
                {
                    this.props.columns.map((column) => {
                        return (
                            <HeaderCell
                                key={column.key}
                                title={column.key}
                                width={column.width} />
                        );
                    })
                }
            </div>
        );
    }
}