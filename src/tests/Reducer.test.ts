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
  users: [],
  loading: false
};
const mockState: userState = {
  users,
  loading: false
};

describe('userReducer', () => {
  it('should render with default state', () => {
    expect(userReducer(initialState, {
      type: 'TEST',
    })).toEqual(initialState)
  })
  it('handles EDIT_USER action', () => {
    expect(userReducer(mockState, {
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
    expect(userReducer(mockState, {
      type: GET_USERS,
      payload: users
    })).toEqual({ ...mockState, users })
  })
  it('handles SHOW_USER action', () => {
    expect(userReducer(mockState, {
      type: SHOW_LOADER,
    })).toEqual({ ...mockState, loading: true })
  })
  it('handles HIDE_LOADER action', () => {
    expect(userReducer(mockState, {
      type: HIDE_LOADER,
    })).toEqual({ ...mockState, loading: false })
  })
})
