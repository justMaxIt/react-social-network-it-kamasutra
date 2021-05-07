import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.topImg}>
        </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} alt="img" />
        <div className={s.userInformation}>
          <h3>{profile.fullName}</h3>
          <div>About me: {profile.aboutMe}</div>
        </div>
      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};
export default ProfileInfo;
