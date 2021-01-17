import React, { useState } from 'react';
import EditMenu from '../components/editMenu';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { shallow, ShallowWrapper } from 'enzyme';

type Props = {
  id: number
}

const props: Props = {
  id: 1
}

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));




describe('<EditMenu />', () => {




  describe('should contain IconButton element', () => {
    let component: ShallowWrapper
    beforeEach(() => {
      component = shallow(
        <EditMenu {...props} />
      );
    })

    it('IconButton pass onClick event with handleClick', () => {
      const event = {
        currentTarget: component.find(IconButton)
      };
      let handleClick = component.find(IconButton).prop('onClick')
      if (handleClick) {
        handleClick(event as any);
      }
      expect(component.find(Menu).prop('open')).toBeTruthy()
    });

    it('IconButton pass onCLick event with handleRoute', () => {
      let handleRoute = component.find(Menu).find(MenuItem).prop('onClick')
      if (handleRoute) {
        handleRoute({} as any);
      }
      expect(mockHistoryPush).toBeCalledWith(`user/${props.id}`)
    })

    it('IconButton pass handleClick event', () => {
      const outerNode = document.createElement('div');
      document.body.appendChild(outerNode);
      outerNode.dispatchEvent(new Event('click'));
      document.body.removeChild(outerNode)
      expect(component.find(Menu).prop('open')).toBeFalsy()
    });
  });
})
