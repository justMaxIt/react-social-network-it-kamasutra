import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  console.log(props);
  return (
    <div>
      <div className={s.topImg}>
        <img
          src="https://sun9-32.userapi.com/impf/c840726/v840726099/4a2d9/MtJq_SzHBfs.jpg?size=807x188&quality=96&sign=d31c730e64c6a4a37c095583b7f79dc1&type=album"
          alt="img"
        ></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="img" />
        <div className={s.userInformation}>
          <h3>{props.profile.fullName}</h3>

          <div>About me: {props.profile.aboutMe}</div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
