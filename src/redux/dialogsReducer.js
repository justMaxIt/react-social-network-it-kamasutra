const ADD_MES = "ADD-MES";

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
  ] 
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MES: {
      let newMes = {
        id: 6,
        message: action.newTextMes,
      };
      return {
        ...state,
         messages: [...state.messages, newMes],
      };
    }
    default:
      return state;
  }
};

export const addMesActionCreator = (newTextMes) => ({ type: ADD_MES, newTextMes });

export default dialogsReducer;
