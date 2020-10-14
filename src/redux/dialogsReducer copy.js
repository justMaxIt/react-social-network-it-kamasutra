const ADD_MES = "ADD-MES"
const UPDATE_NEW_MES = "UPDATE-NEW-MES"

const dialogsReducer = (state, action) => {
    
    if (action.type === "ADD-MES") {
      let newMes = {
      id: 6,
      message: state.newTextMes,
    };
    state.messages.push(newMes);
    state.newTextMes = "";
  
    }
    else if (action.type === "UPDATE-NEW-MES") {
    state.newTextMes = action.text;
    }
    return state
}
export default dialogsReducer