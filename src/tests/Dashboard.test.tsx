
import { shallow } from 'enzyme';
import Dashboard from '../pages/Dashboard';
import UserList from './../components/userList/index';
import React from 'react';


describe('<Dashboard />', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Dashboard />)
  })
  it('Should render child component', () => {
    expect(component.containsMatchingElement( <UserList />)).toEqual(true)
  })
})
