import { createStore } from "redux";
import { IUserData } from "./interfaces";
import userReducer from "./reducers";

import users from "./users.json";

const configureStore = (preloadedState: IUserData) =>
  createStore(userReducer, preloadedState);

const store = configureStore({ users });

export default store;
