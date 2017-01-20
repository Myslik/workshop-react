import * as React from "react";

export interface IHeaderCellProps {
    title: string;
    width?: number;
    onClick: () => void;
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
            <div 
                onClick={() => { this.props.onClick() }} 
                style={style} 
                className="react-grid-header-cell">
                {this.props.title}
            </div>
        );
    }
}