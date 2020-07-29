import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('Header', () => {
  it('Should print name', () => {
    const component = shallow(<Sidebar name="FreightHub" />);

    expect(component.text()).toEqual('FreightHub');
  });
});
