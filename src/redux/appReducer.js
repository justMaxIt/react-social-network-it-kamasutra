// import { stopSubmit } from "redux-form";
// import { authAPI } from "../api/api";
import { getAuthUserData } from "./authReducer";
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true
      };
    }

    default:
      return state;
  }
};

export const initializedSuccess = () => ({  type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(()=>dispatch(initializedSuccess() ))
 };

// export const login = (email, password, rememberMe) => (dispatch) => {
//   authAPI.login(email, password, rememberMe).then((data) => {
//     if (data.resultCode === 0) {
//       dispatch(getAuthUserData());
//     } else {
//       let message = data.messages.length > 0 ? data.messages[0] : "Some error"
//       dispatch(stopSubmit("login", {_error: message}));
//     }
//   });
// };

// export const logout = () => (dispatch) => {
//   authAPI.logout().then((data) => {
//     if (data.resultCode === 0) {
//       dispatch(setAuthUserData(null, null, null, false));
//     }
//   });
// };

export default appReducer;
