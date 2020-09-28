import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>Max</div>
        <div className={s.dialog}>Vova</div>
        <div className={s.dialog}>Denis</div>
        <div className={s.dialog}>Sveta</div>
        <div className={s.dialog}>Tanya</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>friend</div>
        <div className={s.message}>yo</div>
      </div>
    </div>
  );
};
export default Dialogs;
