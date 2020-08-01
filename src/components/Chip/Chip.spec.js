import React from 'react';
import { mount } from 'enzyme';
import Chip from './Chip';
import MenuItem from '@material-ui/core/MenuItem';

describe('Chip Component', () => {
  it('should be green background when status is "Aprovado"', async () => {
    const component = mount(<Chip label="Aprovado" status="aprovado" />);
    const chip = component.find('.MuiChip-root');

    expect(component.find('.MuiChip-label').text()).toEqual('Aprovado');
    expect(chip.get(0).props.style).toHaveProperty('background', '#00555C');
  });

  it('should be yellow background when status is "Em validação"', async () => {
    const component = mount(<Chip label="Em validação" status="em validação" />);
    const chip = component.find('.MuiChip-root');

    expect(component.find('.MuiChip-label').text()).toEqual('Em validação');
    expect(chip.get(0).props.style).toHaveProperty('background', 'yellow');
  });

  it('should be red background when status is "Reprovado', async () => {
    const component = mount(<Chip label="Reprovado" status="reprovado" />);
    const chip = component.find('.MuiChip-root');

    expect(component.find('.MuiChip-label').text()).toEqual('Reprovado');
    expect(chip.get(0).props.style).toHaveProperty('background', '#ff1744');
  });

  it('should fire callback on change status', async () => {
    const onChangeStatus = jest.fn();
    const component = mount(<Chip label="Reprovado" status="reprovado" onChangeStatus={onChangeStatus} />);
    const chip = component.find('.MuiChip-root');

    chip.at(0).simulate('click');
    expect(component.find('#simple-menu').length > 0).toBeTruthy();

    component
      .find(MenuItem)
      .at(0)
      .simulate('click');
    expect(onChangeStatus).toHaveBeenCalled();
    expect(chip.get(0).props.style).toHaveProperty('background', '#ff1744');
  });
});
