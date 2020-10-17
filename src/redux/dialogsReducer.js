const ADD_MES = "ADD-MES"
const UPDATE_NEW_MES = "UPDATE-NEW-MES"

let initialState = {
dialogs: [
        { id: "1", name: "Max" },
        { id: "2", name: "Vova" },
        { id: "3", name: "Denis" },
        { id: "4", name: "Sveta" },
        { id: "5", name: "Tanya" },
      ],
      messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: "friend" },
        { id: "3", message: "yo" },
        { id: "4", message: "yo" },
        { id: "5", message: "yo" },
      ],
      newTextMes: ""
}

const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case ADD_MES: {
        let newMes = {
          id: 6,
          message: state.newTextMes,
        };
        let stateCopy = { ...state };
        stateCopy.messages.push(newMes);
        stateCopy.newTextMes = "";
        return stateCopy;
      }
      case UPDATE_NEW_MES: {
        let stateCopy = { ...state };
        stateCopy.newTextMes = action.text;
        return stateCopy;
      }
        default: return state
    }
}

export const addMesActionCreator = () => ({ type: ADD_MES });
export const updateNewMesActionCreator = (text) =>
  ({type: UPDATE_NEW_MES, text: text})  


export default dialogsReducer