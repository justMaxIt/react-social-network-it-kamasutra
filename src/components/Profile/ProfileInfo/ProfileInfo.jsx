import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbTpHdtV8eT5v6ZN1XDJkUMA7R_jVw1wiNeQ&usqp=CAU"></img>

      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="img" />+ description
      </div>
    </div>
  );
};
export default ProfileInfo;
