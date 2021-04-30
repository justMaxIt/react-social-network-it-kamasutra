import React, { useState } from "react";


const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false)

let activateEditMode = ()=> {
  setEditMode(true)
}

      return (
      <>
        {!editMode && (
          <div>
            <span onDoubleClick={activateEditMode}>
              {props.status || "-----"}
            </span>
          </div>
        )}
        {editMode && (
          <div>
            <input
             
              autoFocus={true}
                         />
          </div>
        )}
      </>
    );
  }

export default ProfileStatusWithHooks;
