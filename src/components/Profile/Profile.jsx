import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbTpHdtV8eT5v6ZN1XDJkUMA7R_jVw1wiNeQ&usqp=CAU"></img>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
