import {
  EDIT_USER,
  HIDE_LOADER,
  SHOW_LOADER,
  REQUEST_POSTS,
  GET_USERS
} from "../constants";
import { IUser } from "../interfaces";

//ACTION USER
export const actionGetUsers = (users: IUser[]) => ({
  type: GET_USERS,
  payload: users
});

export const actionEditUser = (user: IUser) => ({
  type: EDIT_USER,
  payload: {
    user
  }
});

export type actionUser =
  | ReturnType<typeof actionGetUsers>
  | ReturnType<typeof actionEditUser>;

//ACTION LOADER

export const showLoader = () => {
  return {
    type: SHOW_LOADER
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  };
};

export function fetchPosts() {
  return {
    type: REQUEST_POSTS
  };
}

export type ILoaderAction =
  | ReturnType<typeof showLoader>
  | ReturnType<typeof hideLoader>
  | ReturnType<typeof fetchPosts>;
