import React from "react";


const ProfileStatusWithHooks = (props) => {
  // state = {
  //   editMode: false,
  //   status: this.props.status,
  // };
  // activateEditMode = () => {
  //   this.setState({ editMode: true });
  // };
  // deActivateEditMode = () => {
  //   this.setState({ editMode: false });
  //   this.props.updateStatus(this.state.status);
  // };

  // onStatusChange = (e) => {
  //   this.setState({ status: e.currentTarget.value });
  // };

      return (
      <>
        {true && (
          <div>
            <span>
              {props.status || "-----"}
            </span>
          </div>
        )}
        {false && (
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
