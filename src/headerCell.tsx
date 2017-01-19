import * as React from "react";

export interface IHeaderCellProps {
    title: string;
    width?: number;
}

export class HeaderCell extends React.Component<IHeaderCellProps, void> {
    static defaultProps = {
        width: 100
    };

    render() {
        var style = {
            width: this.props.width + "px"
        };
        return (
            <div style={style} className="react-grid-header-cell">
                {this.props.title}
            </div>
        );
    }
}