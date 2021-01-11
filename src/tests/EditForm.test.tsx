import EditForm from '../components/editForm';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { mount, ReactWrapper } from 'enzyme';
import { TextField, Button } from '@material-ui/core';
import { IUser } from './../interfaces/index';




const user: IUser = {
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

describe('EditForm', () => {

  let component: ReactWrapper
  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <BrowserRouter>
          <EditForm user={user} />
        </BrowserRouter>
      </Provider>
    );
  })

  afterEach(() => {
    component.unmount()
  })

  describe('TextFields', () => {
    it('should render TextField with FirstName default value', () => {
      let firstName = component.find(TextField).at(FieldTypes.FirstName)
      expect(firstName.exists()).toBe(true)
      expect(firstName.prop('value')).toBe('Leanne')
    });

    it('should render TextField with LastName default value', () => {
      let lastName = component.find(TextField).at(FieldTypes.LastName)
      expect(lastName.exists()).toBe(true)
      expect(lastName.prop('value')).toBe('Graham')
    });

    it('should render TextField with Email default value', () => {
      let email = component.find(TextField).at(FieldTypes.Email)
      expect(email.exists()).toBe(true)
      expect(email.prop('value')).toBe('Sincere@april.biz')
    });

    it('should render TextField with Age default value', () => {
      let age = component.find(TextField).at(FieldTypes.Age)
      expect(age.exists()).toBe(true)
      expect(age.prop('value')).toBe(21)
    });
  })


  describe('Edit handlers', () => {

    it('should render TextField with FirstName new value', () => {
      const event = {
        target: { value: 'Test' },
      }
      expect(component.find(TextField).at(FieldTypes.FirstName).find('input').at(0).prop('value')).toBe('Leanne')
      component.find(TextField).at(FieldTypes.FirstName).find('input').at(0).simulate('change', event)
      component.update();

      expect(component.find(TextField).at(FieldTypes.FirstName).find('input').at(0).prop('value')).toBe('Test')
    });

    it('should render TextField with LastName new value', () => {
      const event = {
        target: { value: 'Test' },
      }
      expect(component.find(TextField).at(FieldTypes.LastName).find('input').at(0).prop('value')).toBe('Graham')
      component.find(TextField).at(FieldTypes.LastName).find('input').at(0).simulate('change', event)
      component.update();
      expect(component.find(TextField).at(FieldTypes.LastName).find('input').at(0).prop('value')).toBe('Test')
    });

    it('should render TextField with Email new value', () => {
      const event = {
        target: { value: 'Test@gmail.com' },
      }
      expect(component.find(TextField).at(FieldTypes.Email).find('input').at(0).prop('value')).toBe('Sincere@april.biz')
      component.find(TextField).at(FieldTypes.Email).find('input').at(0).simulate('change', event)
      component.update();
      expect(component.find(TextField).at(FieldTypes.Email).find('input').at(0).prop('value')).toBe('Test@gmail.com')
    });

    it('should render TextField with Age new value', () => {
      const event = {
        target: { value: 18 },
      }
      expect(component.find(TextField).at(FieldTypes.Age).find('input').at(0).prop('value')).toBe(21)
      component.find(TextField).at(FieldTypes.Age).find('input').at(0).simulate('change', event)
      component.update();
      expect(component.find(TextField).at(FieldTypes.Age).find('input').at(0).prop('value')).toBe(18)
    });
  })

})
