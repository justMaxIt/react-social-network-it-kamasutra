const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_MES = "ADD-MES"
const UPDATE_NEW_MES = "UPDATE-NEW-MES"

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hi, how are you?", likesCount: "15" },
        { id: "2", message: "It's ok", likesCount: "20" },
        { id: "3", message: "third", likesCount: "2" },
        { id: "4", message: "fourth", likesCount: "5" },
      ],
      newPostText: "Handsome",
    },
    dialogsPage: {
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
      newTextMes: "",
    },
    sidebar: [
      {
        name: "Vladimir",
        foto:
          "https://i.pinimg.com/564x/04/ac/eb/04aceb77808768551fc933f947b9f522.jpg",
      },
      {
        name: "Andrew",
        foto:
          "https://1.bp.blogspot.com/-FhJMnK7Vh6c/Xh83jC-KCJI/AAAAAAAAA3s/PIffolpR7jsA307VXZERWoCTV9PVvoxrQCEwYBhgL/s1600/Pass%2B2%2B%25282%2529.jpg",
      },
      {
        name: "Denis",
        foto:
          "https://1.bp.blogspot.com/--GbsSRnGBsI/XVGB0bdzXgI/AAAAAAAAApo/2i8u_9sww5YGwvT5B_TU0-1hEBUwF0rUACLcBGAs/s600/IMG-20190812-WA0006.jpg",
      },
    ],
  },
   _callSubscriber() {
    console.log("hello");
  },
  getState() {
    return this._state;
  },
subscribe(observer) {
    this._callSubscriber = observer;
  },
dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
    }
    else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(this._state);
    }
    else if (action.type === "ADD-MES") {
      let newMes = {
      id: 6,
      message: this._state.dialogsPage.newTextMes,
    };
    this._state.dialogsPage.messages.push(newMes);
    this._state.dialogsPage.newTextMes = "";
    this._callSubscriber(this._state);
    }
    else if (action.type === "UPDATE-NEW-MES") {
    this._state.dialogsPage.newTextMes = action.text;
    this._callSubscriber(this._state);}
  }
};
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: newText })
export const addMesActionCreator = () => ({type: ADD_MES})
export const updateNewMesActionCreator = (text) =>
  ({type: UPDATE_NEW_MES, text: text})  


export default store;
window.store = store;
