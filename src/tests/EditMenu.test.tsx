import React from 'react';
import EditMenu from '../components/editMenu';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import { Provider } from 'react-redux';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { mount, ReactWrapper } from 'enzyme';


describe('<EditMenu />', () => {
  describe('should contain IconButton element', () => {


    let component: ReactWrapper
    beforeEach(() => {
      component = mount(
        <Provider store={store}>
          <BrowserRouter>
            <EditMenu
              id={1}
            />
          </BrowserRouter>
        </Provider>
      );
    })

    afterEach(() => {
      component.unmount()
    })

    it('should render IconButton component', () => {
      expect(component.find(IconButton).at(0).exists()).toBe(true)
    });

    it('IconButton pass handleClick event', () => {
      expect(component.find(Menu).at(0).prop('open')).toBeFalsy()
      expect(component.find(Menu).at(0).prop('anchorEl')).toBe(null)
      component.find(IconButton).at(0).simulate('click')
      expect(component.find(Menu).at(0).prop('open')).toBeTruthy()
      expect(component.find(Menu).at(0).prop('anchorEl')).not.toBe(null)
      expect(component.find(Menu).at(0).prop('open')).toMatchSnapshot()
    });

    it('should render MenuItem element', () => {
      expect(component.find(MenuItem).at(0).text()).toContain('Edit')
    });

    it('IconButton pass handleRoute event', () => {
      expect(component.find(MenuItem).at(0).text()).toContain('Edit')
    });
  });
})
