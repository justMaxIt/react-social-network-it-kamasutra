import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Max" id="1" />
        <DialogItem name="Vova" id="2" />
        <DialogItem name="Denis" id="3" />
        <DialogItem name="Sveta" id="4" />
        <DialogItem name="Tanya" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="friend" />
        <Message message="yo" />
        <Message message="yo" />
        <Message message="yo" />
      </div>
    </div>
  );
};
export default Dialogs;
