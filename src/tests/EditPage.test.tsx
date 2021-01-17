import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme';
import EditPage from '../pages/EditPage';
import EditForm from './../components/editForm/index';
import { useSelector } from 'react-redux';

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
    useSelector.mockImplementation(() => (state.users))
    component = shallow(<EditPage />)
  })

  afterEach(() => {
    useSelector.mockClear();
  });

  it('should render EditPage component with user', () => {
    console.log(component.debug())
    console.log(component.find(EditForm).prop('user'))
  })

})
