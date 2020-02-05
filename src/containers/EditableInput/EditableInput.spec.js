import React from 'react';
import { shallow, mount } from 'enzyme';

import EditableInput from './EditableInput';
import AutosizeInput from 'react-input-autosize';
import { wrap } from 'module';

describe('EditableInput', () => {
  it('should render AutosizeInput depedency', () => {
    const wrapper = shallow(<EditableInput />);

    expect(wrapper.find(AutosizeInput)).toHaveLength(1);
  });

  it('should print the correct prop value', () => {
    const wrapper = mount(<EditableInput value="Test" fetching={false} disabled={false} />);

    expect(wrapper.text()).toEqual('Test');
  });

  it('should show the correct action icons on default state', () => {
    const wrapper = mount(<EditableInput value="Test" fetching={false} disabled={false} />);

    expect(wrapper.find('svg.blue')).toHaveLength(1);
  });

  it('should show the confirm action when click on edit name', () => {
    const wrapper = mount(<EditableInput value="Test" fetching={false} disabled={false} />);
    const editBtn = wrapper.find('svg.blue');

    editBtn.simulate('click');

    expect(wrapper.find('svg.green')).toHaveLength(1);
  });

  it('should show loading icon when is fetching', () => {
    const wrapper = mount(<EditableInput value="Test" fetching={true} disable={true} />);

    // Confirm button shouldn't exist
    expect(wrapper.find('svg.green')).toHaveLength(0);
    
    // Edit button shouldn't exist
    expect(wrapper.find('svg.blue')).toHaveLength(0);

    expect(wrapper.find('div.loading')).toHaveLength(1);
  });

  it('should trigger function on confirm edit', () => {
    const spy = jest.fn();
    const wrapper = mount(<EditableInput value="Test" fetching={false} onEdit={spy} disabled={false} />);
    const editBtn = wrapper.find('svg.blue');
    const input = wrapper.find('input');

    editBtn.simulate('click');
    input.simulate('change', { target: { value: 'Hello' } });

    expect(wrapper.find('svg.green')).toHaveLength(1);

    wrapper.find('svg.green').simulate('click');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('Hello');
    expect(wrapper.find('div.loading')).toHaveLength(1);
  });
});