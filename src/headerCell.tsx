import * as React from "react";

export enum SortState {
    Enabled,
    Ascending,
    Descending
}

export interface IHeaderCellProps {
    title: string;
    width?: number;
    sortState?: SortState;
    onClick: () => void;
}

export class HeaderCell extends React.Component<IHeaderCellProps, void> {
    static defaultProps = {
        width: 100,
        sortState: SortState.Enabled
    };

    render() {
        const style = {
            width: this.props.width + "px"
        };

        return (
            <div
                onClick={() => { this.props.onClick(); }}
                style={style}
                className="react-grid-header-cell">
                {this.props.title}
                <SortingIcon sortState={this.props.sortState} />
            </div>
        );
    }
}

interface ISortingIconProps {
    sortState: SortState;
}

class SortingIcon extends React.Component<ISortingIconProps, void> {
    render() {
        switch (this.props.sortState) {
            case SortState.Ascending:
                return <div className="icon-sort-up"></div>;
            case SortState.Descending:
                return <div className="icon-sort-down"></div>;
            case SortState.Enabled:
                return <div className="icon-sort"></div>;
        }
    }
}