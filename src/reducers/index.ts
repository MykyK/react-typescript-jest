import { IEditUserAction, IUserData } from './../interfaces/index';


const initialState = {
  users:[]
}

const userReducer = (state:IUserData | undefined = initialState, action:IEditUserAction):IUserData => {
  switch (action.type) {
    case "EDIT_USER":
      return {
        users: [...state.users].map(user => {
          if (user.id === action.payload.user.id) {
            user = action.payload.user;
          }
          return user;
        })
      };
    default:
      return state;
  }
}
export default userReducer;
