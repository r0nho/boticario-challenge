import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
    it('Should print name', () => {
      const component = shallow(<Header name="FreightHub" />);

      expect(component.text()).toEqual('FreightHub');
    });
  });