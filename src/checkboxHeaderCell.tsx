import * as React from "react";

export interface ICheckboxHeaderCellProps {
    checked: boolean;
    onCheck: (checked: boolean) => void;
}

export class CheckboxHeaderCell extends React.Component<ICheckboxHeaderCellProps, void> {
    static defaultProps = {
        checked: false
    }

    render() {
        var style = {
            padding: "1px",
            width: "24px"
        };

        return (
            <div
                onClick={() => { this.props.onCheck(!this.props.checked) }}
                style={style}
                className="react-grid-header-cell">
                <input type="checkbox" checked={this.props.checked} readOnly />
            </div>
        );
    }
}