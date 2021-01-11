import React from 'react';
import UserList from '../components/userList';
import { shallow, ShallowWrapper } from 'enzyme';
import { IUserData } from '../interfaces';
import users from '../users.json';




// const setUp = (props: IUserData): ShallowWrapper => shallow(<UserList {...props} />)

// describe("UserList component", () => {
//   describe("Has props", () => {
//     const component = setUp({ users })

//     test("should render UserList component", () => {
//       const userList = component.find("columns")
//     })
//   });

//   // describe("Has empty props", () => {

//   // });
// })



//////////

describe("UserList component", () => {
  // let component:ShallowWrapper;
  // beforeEach(() => {
  //   component = setUp({ users })
  // })

  test("should rendered div .user-list-wrapper", () => {
    const component = shallow(<UserList users={[]}/>)
    const userListWrapper = component.find(".user-list-wrapper")
    expect(userListWrapper.length).toBe(1)

  })


  test("should rendered UserList component with default array in object props", () => {
    const component = shallow(<UserList users={users} />)
    expect(component).toMatchSnapshot()
  })

  test("should rendered UserList component with empty array in object props", () => {
    const component = shallow(<UserList users={[]}/>)
    expect(component).toMatchSnapshot()
  })

})
