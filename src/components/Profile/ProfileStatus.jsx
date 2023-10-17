import { useState } from "react";
function ProfileStatus(props) {
    const [editMode, setEditMode] = useState(false);
    const [currentStatus] = useState(props.status);
    const setNewStatus = () => {
        setEditMode(!editMode);
        if(props.status !== currentStatus) {
            props.setStatus(props.status);
        }
        
    }
    const changeStatus = (e) => {
        props.setNewUserStatusText(e.target.value);
    }
    const showInput = () => {
        if(props.profileId === props.authUserId) {
            setEditMode(!editMode);
        }
    }
    return (
        <div>
            {!editMode ? <span onDoubleClick={showInput}>{props.status !== '' ? props.status : 'no status'}</span> : <input onChange={changeStatus} autoFocus={true} onBlur={setNewStatus} value={props.status}/>}
        </div>
    )
}
export default ProfileStatus;