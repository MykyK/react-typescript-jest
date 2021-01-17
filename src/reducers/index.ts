import { actionUser, ILoaderAction } from "../actions";
import { EDIT_USER, GET_USERS, HIDE_LOADER, SHOW_LOADER } from "../constants";
import { userState } from "../interfaces";

const initialState: userState = {
  users: [],
  loading: false
};

function userReducer(
  state: userState = initialState,
  action: actionUser | ILoaderAction
) {
  switch (action.type) {
    case EDIT_USER:
      return {
        users: [...state.users].map(user => {
          if (user.id === action.payload.user.id) {
            user = action.payload.user;
          }
          return user;
        })
      };
    case GET_USERS:
      return {
        ...state,
        users: [...action.payload]
      };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
}
export default userReducer;
