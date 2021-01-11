import { render, fireEvent, screen } from '@testing-library/react'
import EditForm from '../components/editForm';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';




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


describe('EditForm', () => {
  beforeEach(() => {
    render(<Provider store={store}>
      <BrowserRouter>
        <EditForm user={user} />
      </BrowserRouter>
    </Provider>)
  })

  test('should render TextField with FirstName default value', () => {
    let firstNameInput = screen.getByTestId(/first-name-input/i) as HTMLInputElement | HTMLTextAreaElement
    expect(firstNameInput.value).toContain('Leanne')
    expect(firstNameInput.value).toMatchSnapshot()
  });

  test('should render TextField with LastName default value', () => {
    let LastNameInput = screen.getByTestId(/last-name-input/i) as HTMLInputElement | HTMLTextAreaElement
    expect(LastNameInput.value).toContain('Graham')
    expect(LastNameInput.value).toMatchSnapshot()
  });


  test('should render TextField with Email default value', () => {
    let EmailInput = screen.getByTestId(/email-input/i) as HTMLInputElement | HTMLTextAreaElement
    expect(EmailInput.value).toContain('Sincere@april.biz')
    expect(EmailInput.value).toMatchSnapshot()
  });

  test('should render TextField with Age default value', () => {
    let ageInput = screen.getByTestId(/age-input/i) as HTMLInputElement | HTMLTextAreaElement
    expect(ageInput.value).toContain('21')
    expect(ageInput.value).toMatchSnapshot()
  });


  describe('Edit handlers', () => {




    test('should render TextField with change First Name value', () => {
      let firstNameInput = screen.getByTestId(/first-name-input/i) as HTMLInputElement | HTMLTextAreaElement
      fireEvent.change(firstNameInput, {
        target: { value: 'Test' }
      })
      expect(firstNameInput.value).toBe('Test')
      expect(firstNameInput.value).toMatchSnapshot()

    });

    test('should render TextField with change Last Name value', () => {
      let LastNameInput = screen.getByTestId(/last-name-input/i) as HTMLInputElement | HTMLTextAreaElement
      fireEvent.change(LastNameInput, {
        target: { value: 5 }
      })
      expect(LastNameInput.value).toBe('5')
      expect(LastNameInput.value).toMatchSnapshot()
    });
    test('should render TextField with change Email value', () => {
      let EmailInput = screen.getByTestId(/email-input/i) as HTMLInputElement | HTMLTextAreaElement
      fireEvent.change(EmailInput, {
        target: { value: 'Test@gmail.com' }
      })
      expect(EmailInput.value).toBe('Test@gmail.com')
      expect(EmailInput.value).toMatchSnapshot()
    });

    test('should render TextField with change Age value', () => {
      let ageInput = screen.getByTestId(/age-input/i) as HTMLInputElement | HTMLTextAreaElement
      fireEvent.change(ageInput, {
        target: { value: 5 }
      })
      expect(ageInput.value).toBe('5')
      expect(ageInput.value).toMatchSnapshot()

    });

  })

})
