import React from 'react';
import UserList from '../components/userList';
import { shallow, ShallowWrapper } from 'enzyme';
import { IUserData } from '../interfaces';
import users from '../users.json';






describe("UserList component", () => {

  test("should rendered UserList component with default array in object props", () => {
    const component = shallow(<UserList users={users} />)
    expect(component).toMatchSnapshot()
  })

  test("should rendered UserList component with empty array in object props", () => {
    const component = shallow(<UserList users={[]}/>)
    expect(component).toMatchSnapshot()
  })

})
