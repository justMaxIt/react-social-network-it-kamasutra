const ADD_MES = "ADD-MES"
const UPDATE_NEW_MES = "UPDATE-NEW-MES"

const dialogsReducer = (state, action) => {
    
    switch (action.type) {
        case ADD_MES:
            let newMes = {
                id: 6,
                message: state.newTextMes,
            };
            state.messages.push(newMes);
            state.newTextMes = "";
            return state;
    
        case UPDATE_NEW_MES:
            state.newTextMes = action.text;
            return state;
        default: return state
    }
}

export const addMesActionCreator = () => ({ type: ADD_MES });
export const updateNewMesActionCreator = (text) =>
  ({type: UPDATE_NEW_MES, text: text})  


export default dialogsReducer