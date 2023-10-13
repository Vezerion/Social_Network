import { useState } from "react";
function ProfileStatus(props) {
    const [editMode, setEditMode] = useState(false);
    return (
        <div>
            {!editMode ? <span onDoubleClick={()=> setEditMode(!editMode)}>{props.status}</span> : <input autoFocus={true}  onBlur={()=> setEditMode(!editMode)} value={props.status}/>}
        </div>
    )
}
export default ProfileStatus;