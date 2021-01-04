import React from "react";
import s from "./../../Navbar.module.css";

const Friend = (props) => {
  return (
    <div className={s.itemFriends}>
      <img src={props.foto} alt="img" />
      <div className={s.friendName}> {props.name}</div>
    </div>
  );
};
export default Friend;
