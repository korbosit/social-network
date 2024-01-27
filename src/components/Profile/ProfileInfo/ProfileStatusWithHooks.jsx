import { useState } from "react";

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const activateEditMode = () => {
        setEditMode(true);
    };
    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };
    return (
        <div>
            {!editMode && (
                <div>
                    <span onDoubleClick={activateEditMode}>
                        {props.status || "-------"}
                    </span>
                </div>
            )}
            {editMode && (
                <div>
                    <input
                        onChange={onStatusChange}
                        onBlur={deActivateEditMode}
                        value={status}
                    />
                </div>
            )}
        </div>
    );
};

export default ProfileStatusWithHooks;
