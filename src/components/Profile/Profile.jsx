import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";
const Profile = () => {
  let posts = [
    { id: "1", message: "Hi, how are you?", likesCount: "15" },
    { id: "2", message: "It's ok", likesCount: "20" },
  ];
  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  return (
    <div className={s.content}>
      <ProfileInfo />
      <div>
        <MyPosts postsElements={postsElements} />
      </div>
    </div>
  );
};
export default Profile;
