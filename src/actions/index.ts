import { EDIT_USER } from "../constants";
import { IEditUserAction, IUser } from "../interfaces";

export const actionEditUser = (user: IUser): IEditUserAction => ({
  type: EDIT_USER,
  payload: {
    user
  }
});
