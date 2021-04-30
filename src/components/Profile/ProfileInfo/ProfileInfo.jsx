import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.topImg}>
        </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="img" />
        <div className={s.userInformation}>
          <h3>{props.profile.fullName}</h3>
          <div>About me: {props.profile.aboutMe}</div>
        </div>
      </div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
    </div>
  );
};
export default ProfileInfo;
