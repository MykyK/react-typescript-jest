import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_POSTS } from "./constants";
import { hideLoader, showLoader, actionGetUsers } from "./actions";
import axios from "axios";
export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

export function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(workUsers.getUsers);
    yield put(actionGetUsers(payload));
    yield put(hideLoader());
  } catch (e) {
    yield put(hideLoader());
  }
}

export const workUsers = {
  getUsers: async function(){
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return await response.data;
  }
}


