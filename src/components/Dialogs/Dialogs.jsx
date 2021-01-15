import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let addMes = () => {
    props.addMes();
  };
  let onMesChange = (e) => {
    let text = e.target.value;
    props.updateNewMes(text);
  };
  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <h3>New message</h3>
        <div>
          <div>
            <textarea
              placeholder="Enter your message"
              onChange={onMesChange}
              value={state.newTextMes}
            />
          </div>
          <div>
            <button onClick={addMes}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
