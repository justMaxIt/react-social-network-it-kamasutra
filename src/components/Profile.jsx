import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://lh3.googleusercontent.com/proxy/wBSbX6PluWaLUubAqHY7PGu5LIhRhkiGeLumggi6H12YEWB4AkcgLgyDhIwAK4CVBGQSQryrw4VBd4yZxBhyos4BHMQQkDitZ0syNZERIZD6gMed9tyAiwKFKoy2_Q8psR6owwHv"></img>
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>post1</div>
          <div className={s.item}>post2</div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
