import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbTpHdtV8eT5v6ZN1XDJkUMA7R_jVw1wiNeQ&usqp=CAU"></img>

      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};
export default ProfileInfo;
