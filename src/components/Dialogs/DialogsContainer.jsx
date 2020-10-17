import React from "react";
import { addMesActionCreator, updateNewMesActionCreator } from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer> 
      {
      (store) => {
  let state = store.getState().dialogsPage
   
  let addMes = () => {
    store.dispatch(addMesActionCreator());
        };
        
  let onMesChange = (text) => {
    let action = updateNewMesActionCreator(text);
    store.dispatch(action)
  };
     return (   <Dialogs updateNewMes={onMesChange} addMes={addMes} dialogsPage={state} />)
      }}
    </StoreContext.Consumer>
      )};

export default DialogsContainer;
