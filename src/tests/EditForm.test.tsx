import EditForm from '../components/editForm';
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';

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
  }
}
enum FieldTypes {
  FirstName,
  LastName,
  Email,
  Age
}

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));


const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));


describe('EditForm', () => {
  let component: ShallowWrapper;
  beforeEach(() => {
    let props = {
      user,
      useDispatch,
    }
    component = shallow(<EditForm {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should set new FirstName value", () => {
    let e = { target: { value: 'TestFirstName' } };
    component.find(TextField).at(FieldTypes.FirstName).prop('onChange')!(e)
    expect(component.find(TextField).at(FieldTypes.FirstName).prop('value')).toBe('TestFirstName')
  })

  it("should set new LastName value", () => {
    component.find(TextField).at(FieldTypes.LastName).prop('onChange')!({ target: { value: 'TestLastName' } })
    expect(component.find(TextField).at(FieldTypes.LastName).prop('value')).toBe('TestLastName')
  })


  it("should set new Email value", () => {
    component.find(TextField).at(FieldTypes.Email).prop('onChange')!({ target: { value: 'TestEmail@gmail.com' } })
    expect(component.find(TextField).at(FieldTypes.Email).prop('value')).toBe('TestEmail@gmail.com')
  })

  it("should set new Age value", () => {
    component.find(TextField).at(FieldTypes.Age).prop('onChange')!({ target: { value: '18' } })
    expect(component.find(TextField).at(FieldTypes.Age).prop('value')).toBe('18')
  })

  it("should open and close alert", () => {
    jest.useFakeTimers()
    component.find(Button).at(0).prop('onClick')!(user)
    expect(component.find(Snackbar).prop('open')).toBeTruthy()
    setTimeout(() => {
      expect(component.find(Snackbar).prop('open')).toBeFalsy()
      expect(mockHistoryPush).toBeCalledWith('/')
    }, 600)
    jest.runAllTimers()
  })

  it('"Back" - button should call history push with "/"', () => {
    let handler = component.find(Button).at(1).prop('onClick')
    if (handler) {
      handler({} as any);
    }
    expect(mockHistoryPush).toBeCalledWith('/')
  })
})
