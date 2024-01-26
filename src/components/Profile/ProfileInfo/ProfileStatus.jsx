import React from "react";
import classes from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    };
    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    };

    componentDidUpdate(prevProps, prevState) {
        // Проверяем, изменился ли статус
        if (prevProps.status !== this.props.status) {
            // Обновляем состояние только если статус изменился
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode && (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || "-------"}
                        </span>
                    </div>
                )}
                {this.state.editMode && (
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deActivateEditMode}
                            value={this.state.status}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;
