import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme';
import EditPage from '../pages/EditPage';
import EditForm from './../components/editForm/index';
import { useSelector } from 'react-redux';
import configureStore from 'redux-mock-store';
import { userState } from '../interfaces';

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
}


jest.mock('react-router-dom', () => ({
  useParams: () => ({
    id: 1,
  }),
}));


jest.mock("react-redux", () => ({
  useSelector: jest.fn()
}));


describe('<EditPage />', () => {
  let component: ShallowWrapper

  beforeEach(() => {
    // state = store.getState()
    useSelector.mockImplementation(() => (state.users))
    component = shallow(<EditPage />)
  })

  afterEach(() => {
    useSelector.mockClear();
  });

  it('should render EditPage component', () => {
    console.log(component.debug())
    expect(component.find(EditForm).exists()).toBeTruthy()
  })

})
