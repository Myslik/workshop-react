import * as React from "react";

export interface ICheckboxCellProps {
    checked: boolean;
    onCheck: (checked: boolean) => void;
}

export class CheckboxCell extends React.Component<ICheckboxCellProps, void> {
    static defaultProps = {
        checked: false
    };

    render() {
        const style = {
            padding: "1px",
            width: "24px"
        };

        return (
            <div
                onClick={() => { this.props.onCheck(!this.props.checked) }}
                style={style}
                className="react-grid-row-cell">
                <input type="checkbox" checked={this.props.checked} readOnly />
            </div>
        );
    }
}