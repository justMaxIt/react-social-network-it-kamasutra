import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageElement = React.createRef();
  let addMes = () => {
    props.addMes();
  };
  let onMesChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMes(text);
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
              onChange={onMesChange}
              ref={newMessageElement}
              value={props.dialogsPage.newTextMes}
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
