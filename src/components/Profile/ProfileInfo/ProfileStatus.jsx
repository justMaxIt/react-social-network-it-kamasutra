import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
  return (
    <>
      <div>
        <span>{props.status}</span>
      </div>
      <div>
        <input value={props.status}></input>
      </div>
    </>
  );
};
export default ProfileStatus;
