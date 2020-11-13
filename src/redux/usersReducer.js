const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  users: [
    {
      id: "1",
      fullName: "Maxym F",
      status: "I am boss",
      location: { city: "Kiyv", country: "Ukraine" },
    },
    {
      id: "2",
      fullName: "Dmitriy",
      status: "teacher",
      location: { city: "Minsk", country: "Belarus" },
    },
    {
      id: "3",
      fullName: "Minin",
      status: "Mentor",
      location: { city: "Moscow", country: "Russia" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default usersReducer;
