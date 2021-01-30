import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  activateEditMode() {
    this.state.EditMode = true;
    this.forceUpdate();
  }
  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input value={this.props.status}></input>
          </div>
        )}
      </>
    );
  }
}
export default ProfileStatus;
