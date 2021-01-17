import React from 'react';
import UserList from '../components/userList';
import { shallow, ShallowWrapper } from 'enzyme';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
const state = {
  users: [
    {
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
  ],
  loading: false
}

const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: initial => [initial, mockSetState]
}));


const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

describe("UserList component", () => {
  let component: ShallowWrapper
  beforeEach(() => {
    useSelector
      .mockImplementation(() => (state.users))
      .mockImplementation(() => (state.loading))
    component = shallow(<UserList />)
  })

  afterEach(() => {
    useSelector.mockClear();
  });
  test("Button onClick should dispatch request action", () => {
    expect(component.find(Button).exists()).toBeTruthy()
    component.find(Button).prop('onClick')!()
    expect(mockDispatch).toHaveBeenCalledTimes(1)
    expect(mockDispatch).toHaveBeenCalledWith({ "type": "REQUEST_POSTS" })
  })

})
