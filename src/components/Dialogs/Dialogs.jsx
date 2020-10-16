import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMesActionCreator, updateNewMesActionCreator } from "../../redux/dialogsReducer"

const Dialogs = (props) => {
let state= props.dialogsPage
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));
 
  let addMes = () => {
    props.addMes();
  };
  let onMesChange = (e) => {
    let text = e.target.value;
    props.updateNewMes(text)
    // let action = updateNewMesActionCreator(text);
    // props.store.dispatch(action)
    
  };

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
