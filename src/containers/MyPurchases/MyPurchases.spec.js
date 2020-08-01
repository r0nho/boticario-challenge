import React from 'react';
import { mount } from 'enzyme';
import MyPurchases from './MyPurchases';

describe('Chip Component', () => {
  it('should be some total of cashback value, only from approved purchase"', async () => {
    const getListPurchases = jest.fn();
    const purchases = [
      {
        cashback: 10,
        cashback_value: 13,
        code: 'ACDB32',
        date: '25/03/2020',
        price: 130.2,
        status: 'aprovado',
      },
      {
        cashback: 10,
        cashback_value: 999,
        code: 'ACDB32',
        date: '25/03/2020',
        price: 130.2,
        status: 'reprovado',
      },
      {
        cashback: 10,
        cashback_value: 25.1,
        code: 'ACDB32',
        date: '25/03/2020',
        price: 130.2,
        status: 'em validação',
      },
    ];
    const component = mount(
      <MyPurchases purchases={{ fetching: false, purchases }} getListPurchases={getListPurchases} />,
    );

    expect(
      component
        .find('.MuiChip-label')
        .at(0)
        .text()
        .includes('13.00'),
    ).toBe(true);
  });
});
