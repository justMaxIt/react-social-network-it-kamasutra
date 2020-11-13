const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    //   {
    //     id: "1",
    //     followed: false,
    //     fullName: "Maxym F",
    //     status: "I am boss",
    //     location: { city: "Kiyv", country: "Ukraine" },
    //   },
    //   {
    //     id: "2",
    //     followed: true,
    //     fullName: "Dmitriy",
    //     status: "teacher",
    //     location: { city: "Minsk", country: "Belarus" },
    //   },
    //   {
    //     id: "3",
    //     followed: false,
    //     fullName: "Minin",
    //     status: "Mentor",
    //     location: { city: "Moscow", country: "Russia" },
    //   },
    //
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET - USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};
export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({
  type: UNFOLLOW,
  userID,
});
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});

export default usersReducer;
