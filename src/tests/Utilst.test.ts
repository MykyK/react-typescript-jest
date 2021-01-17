import { emailValidator } from './../utils/index';


describe('emailValidator util', () => {
  it('Positive validation case', () => {
    expect(emailValidator('Test@gmail.com')).toBe('')
  })
  it('Negative validation case', () => {
    expect(emailValidator('Testgmail.com')).toBe('Please enter a valid email.')
    expect(emailValidator('Test@gmailcom')).toBe('Please enter a valid email.')
    expect(emailValidator(123)).toBe('Please enter a valid email.')
  })
})
