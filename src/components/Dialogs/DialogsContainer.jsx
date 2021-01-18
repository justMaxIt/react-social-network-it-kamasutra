import {
  addMesActionCreator,
  updateNewMesActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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
let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
