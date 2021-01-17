import { takeEvery } from 'redux-saga/effects';
import { sagaWatcher, workUsers, sagaWorker } from './../sagas';
import { hideLoader, showLoader, actionGetUsers, actionUser } from "./../actions";
import { runSaga } from "redux-saga";




const dummyUsers = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "is_admin": true,
    "age": 21,
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874"
    }
  }
]


describe('fetchUsers tests', () => {
  it('should call api and dispatch success action', async () => {
    const requestUsers = jest.spyOn(workUsers, 'getUsers').mockImplementation(() => Promise.resolve(dummyUsers));
    const dispatched: any[] = [];
    const result = await runSaga({
      dispatch: (action: actionUser) => dispatched.push(action),
    }, sagaWorker);

    expect(requestUsers).toHaveBeenCalledTimes(1);

    expect(dispatched).toEqual([showLoader(), actionGetUsers(dummyUsers), hideLoader()]);
    requestUsers.mockClear();
  });

  it('should call api and dispatch error action', async () => {
    const requestAuthors = jest.spyOn(workUsers, 'getUsers')
      .mockImplementation(() => Promise.reject());
    const dispatched: any[] = [];
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, sagaWorker);

    expect(requestAuthors).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([showLoader(), hideLoader()]);
    requestAuthors.mockClear();
  });
})
