import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

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
  let addNewMessage = (values) => {
    alert(values.newTextMes)
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <h3>New message</h3>
    <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

const AddMessageForm = (props) =>{
  return ( 
    <form onSubmit={props.handleSubmit}>
    <div>
      <Field component="textarea" name="newTextMes" placeholder="Enter your message" />
      {/* <textarea
        placeholder="Enter your message"
        onChange={onMesChange}
        value={state.newTextMes}
      /> */}
    </div>
    <div>
      <button>Add message</button>
    </div>
  </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;
