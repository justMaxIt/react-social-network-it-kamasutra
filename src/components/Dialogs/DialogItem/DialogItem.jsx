import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw94OjqMOjukkF1EOn9cO3VUske1EwoWfkkA&usqp=CAU" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
