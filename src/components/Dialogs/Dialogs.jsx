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
  let dialogsData = [
    { id: "1", name: "Max" },
    { id: "2", name: "Vova" },
    { id: "3", name: "Denis" },
    { id: "4", name: "Sveta" },
    { id: "5", name: "Tanya" },
  ];
  let messagesData = [
    { id: "1", message: "Hi" },
    { id: "2", message: "friend" },
    { id: "3", message: "yo" },
    { id: "4", message: "yo" },
    { id: "5", message: "yo" },
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        {/* <DialogItem name="Denis" id="3" />
        <DialogItem name="Sveta" id="4" />
        <DialogItem name="Tanya" id="5" /> */}
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        {/* <Message message="yo" />
        <Message message="yo" />
        <Message message="yo" /> */}
      </div>
    </div>
  );
};

export default Dialogs;
