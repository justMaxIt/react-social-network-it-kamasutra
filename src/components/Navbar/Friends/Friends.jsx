import React from "react";
import Friend from "./Friend/Friend";
import s from "./../Navbar.module.css";

const Friends = (props) => {

  let friendsElements = props.state.map((f) => (
    <Friend name={f.name} foto={f.foto} />
  ));

  return (
    <div className={s.friends}>
      <div className={s.articleFriends}>Friends</div>
      <div className={s.iconsFriends}>{friendsElements}</div>
    </div>
  );
};
export default Friends;
