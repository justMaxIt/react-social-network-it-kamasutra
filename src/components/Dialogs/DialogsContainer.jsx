import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMesActionCreator, updateNewMesActionCreator } from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state= props.store.getState().dialogsPage
  
 
  let addMes = () => {
    props.store.dispatch(addMesActionCreator());
  };
  let onMesChange = (text) => {
    let action = updateNewMesActionCreator(text);
    props.store.dispatch(action)
  };

  return (
    <Dialogs updateNewMes={onMesChange} addMes={addMes} dialogsPage={state}/>
  );
};

export default DialogsContainer;
