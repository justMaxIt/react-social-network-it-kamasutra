import {
  addMesActionCreator,
  updateNewMesActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMes: () => {
      dispatch(addMesActionCreator());
    },
    updateNewMes: (text) => {
      let action = updateNewMesActionCreator(text);
      dispatch(action);
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
