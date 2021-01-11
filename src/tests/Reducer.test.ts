import userReducer from './../reducers/index';
import { EDIT_USER } from './../constants';
import users from '../users.json';
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

describe('userReducer', () => {
  test('should return the initial state', () => {
    expect(userReducer({ users }, {
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
})
