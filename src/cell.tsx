import * as React from "react";

export interface ICellProps {
    value: any;
    width?: number;
}

export class Cell extends React.Component<ICellProps, void> {
    static defaultProps = {
        width: 100
    }

    render() {
        var style = {
            width: this.props.width + "px"
        };

        return (
            <div style={style} className="react-grid-row-cell">
                {this.props.value}
            </div>
        );
    }
}