let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hi, how are you?", likesCount: "15" },
        { id: "2", message: "It's ok", likesCount: "20" },
        { id: "3", message: "third", likesCount: "2" },
        { id: "4", message: "fourth", likesCount: "5" },
      ],
      newPostText: "success 2020",
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
      newTextMes: "Handsome",
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
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("hello");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMes() {
    let newMes = {
      id: 6,
      message: this._state.dialogsPage.newTextMes,
    };
    this._state.dialogsPage.messages.push(newMes);
    this._state.dialogsPage.newTextMes = "";
    this._callSubscriber(this._state);
  },
  updateNewMes(text) {
    this._state.dialogsPage.newTextMes = text;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;