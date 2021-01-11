import React from 'react';
import UserList from '../components/userList';
import { shallow, ShallowWrapper } from 'enzyme';
import { IUserData } from '../interfaces';
import users from '../users.json';
import { Provider } from 'react-redux';
import store from './../store';






describe("UserList component", () => {

  test("should rendered UserList component with default array in object props", () => {
    const component = shallow(
      <Provider store={store}>
        <UserList />
      </Provider>)
    expect(component).toMatchSnapshot()
  })

})
