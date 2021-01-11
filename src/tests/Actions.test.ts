import configureStore from 'redux-mock-store';
import { actionEditUser } from '../actions';



const mockStore = configureStore();
const store = mockStore();
const user = {
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
  },
}

describe('select_actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });

  describe('actionEditUser', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions =
    [
      {
        'payload': {user},
        'type': 'EDIT_USER',
      },
    ]

      store.dispatch(actionEditUser(user));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
