import userReducer from './../reducers/index';
import { EDIT_USER, GET_USERS, SHOW_LOADER, HIDE_LOADER } from './../constants';
import users from '../users.json';
import { userState } from '../interfaces';
const user = {
  "id": 1,
  "name": "Test Test",
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

const initialState: userState = {
  users,
  loading: false
};

describe('userReducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(initialState, {
      type: EDIT_USER,
      payload: {
        user
      }
    })).toEqual({
      users: users.map(u => {
        if (u.id === user.id) {
          return u = user
        }
        return u
      })
    })
  })
  it('handles GET_USER action', () => {
    expect(userReducer(initialState, {
      type: GET_USERS,
      payload: users
    })).toEqual({ ...initialState, users })
  })
  it('handles SHOW_USER action', () => {
    expect(userReducer(initialState, {
      type: SHOW_LOADER,
    })).toEqual({ ...initialState, loading: true })
  })
  it('handles HIDE_LOADER action', () => {
    expect(userReducer(initialState, {
      type: HIDE_LOADER,
    })).toEqual({ ...initialState, loading: false })
  })
})
