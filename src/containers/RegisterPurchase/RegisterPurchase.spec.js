import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RegisterPurchase from './RegisterPurchase';

describe('RegisterPurchase Component', () => {
  it('should show success animation when register new purchase', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <MemoryRouter>
        <RegisterPurchase />
      </MemoryRouter>,
    );

    const code = getByPlaceholderText('Código da compra');
    const value = getByPlaceholderText('Valor da compra');
    const date = getByPlaceholderText('Data da compra');

    await act(async () => {
      await fireEvent.change(code, { target: { value: '40903912880' } });
      await fireEvent.change(value, { target: { value: 132.3 } });
    });

    await act(async () => {
      await fireEvent.change(date, { target: { value: '26051992' } });
    });

    await act(async () => {
      await fireEvent.submit(getByTestId('form'));
    });

    expect(getByTestId('success')).toBeTruthy();
  });
});
